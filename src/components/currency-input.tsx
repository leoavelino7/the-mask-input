import React, { useImperativeHandle, useMemo, useRef, useState } from "react";
import { CurrencyInputProps } from "../@types/input";
import { currencyToFloat, namedFormatCurrency, safeConvert, toCurrency } from "../helpers/fmt";

const PATTERN = "^[A-Z]{1,3}[0-9$,. ]+$";

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
	({ locale = "pt-BR", currency = "BRL", ...html }, externalRef) => {
		const ref = useRef<HTMLInputElement>(null);
		useImperativeHandle(externalRef, () => ref.current as HTMLInputElement);

		const info = useMemo(() => {
			const infos = namedFormatCurrency(locale, currency);
			infos.currency = `${infos.currency.trim()} `;
			infos.literal = infos.literal.trim() || ".";
			return infos;
		}, [locale, currency]);

		const [input, setInput] = useState(() =>
			safeConvert(html.value || "", {
				separator: info.literal,
				decimalSeparator: info.decimal,
				prefix: info.currency,
				decimalsLength: info.fraction.length
			})
		);

		const change = (e: React.ChangeEvent<HTMLInputElement>) => {
			e.persist();
			const money = toCurrency(e.target.value, {
				separator: info.literal,
				decimalSeparator: info.decimal,
				prefix: info.currency,
				decimalsLength: info.fraction.length
			});
			const realValue = currencyToFloat(money);
			const cursor = e.target.selectionStart || 0;
			setInput(money);
			ref.current!.value = money;
			e.target.value = money;
			html.onChange?.(e);
			if (realValue !== 0) {
				ref.current!.selectionEnd = cursor + 1;
			}
		};
		return <input {...html} type="text" ref={ref} value={input} onChange={change} inputMode="decimal" pattern={PATTERN} />;
	}
);