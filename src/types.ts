import { InputHTMLAttributes, DetailedHTMLProps } from "react";

type NativeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TheMaskInputProps = Omit<NativeProps, "value" | "type" | "defaultValue" | "inputMode" | "autoCapitalize"> &
	Partial<{
		as: "input" | React.FC<Omit<TheMaskInputProps, "as">>;
		autoCapitalize: AutoCapitalize;
		defaultValue: string;
		onChangeText?: (text: string) => void;
		inputMode: InputMode;
		mask: TheMasks;
		tokens: Tokens;
		type: InputTypes;
		value: string;
	}>;

export type Token = { regex: RegExp; parse?: (v: string) => string };

export type AutoCapitalize = "off" | "none" | "on" | "sentences" | "words" | "characters";

export type Tokens = Record<string, Token>;

export type Mask = string | RegExp;

export type TheMasks = string | Mask[] | ((value: string) => string | Mask[]);

export type InputTypes =
	| "button"
	| "checkbox"
	| "color"
	| "date"
	| "datetime-local"
	| "email"
	| "file"
	| "hidden"
	| "image"
	| "month"
	| "number"
	| "password"
	| "radio"
	| "range"
	| "reset"
	| "search"
	| "submit"
	| "tel"
	| "text"
	| "time"
	| "url"
	| "week";

export type InputMode = "decimal" | "none" | "text" | "numeric" | "tel" | "search" | "email" | "url";

// https://www.currency-iso.org/dam/downloads/lists/list_one.xml
export type CurrencyCode =
	| "AFN"
	| "EUR"
	| "ALL"
	| "DZD"
	| "USD"
	| "EUR"
	| "AOA"
	| "XCD"
	| "XCD"
	| "ARS"
	| "AMD"
	| "AWG"
	| "AUD"
	| "EUR"
	| "AZN"
	| "BSD"
	| "BHD"
	| "BDT"
	| "BBD"
	| "BYN"
	| "EUR"
	| "BZD"
	| "XOF"
	| "BMD"
	| "INR"
	| "BTN"
	| "BOB"
	| "BOV"
	| "USD"
	| "BAM"
	| "BWP"
	| "NOK"
	| "BRL"
	| "USD"
	| "BND"
	| "BGN"
	| "XOF"
	| "BIF"
	| "CVE"
	| "KHR"
	| "XAF"
	| "CAD"
	| "KYD"
	| "XAF"
	| "XAF"
	| "CLP"
	| "CLF"
	| "CNY"
	| "AUD"
	| "AUD"
	| "COP"
	| "COU"
	| "KMF"
	| "CDF"
	| "XAF"
	| "NZD"
	| "CRC"
	| "XOF"
	| "HRK"
	| "CUP"
	| "CUC"
	| "ANG"
	| "EUR"
	| "CZK"
	| "DKK"
	| "DJF"
	| "XCD"
	| "DOP"
	| "USD"
	| "EGP"
	| "SVC"
	| "USD"
	| "XAF"
	| "ERN"
	| "EUR"
	| "ETB"
	| "EUR"
	| "FKP"
	| "DKK"
	| "FJD"
	| "EUR"
	| "EUR"
	| "EUR"
	| "XPF"
	| "EUR"
	| "XAF"
	| "GMD"
	| "GEL"
	| "EUR"
	| "GHS"
	| "GIP"
	| "EUR"
	| "DKK"
	| "XCD"
	| "EUR"
	| "USD"
	| "GTQ"
	| "GBP"
	| "GNF"
	| "XOF"
	| "GYD"
	| "HTG"
	| "USD"
	| "AUD"
	| "EUR"
	| "HNL"
	| "HKD"
	| "HUF"
	| "ISK"
	| "INR"
	| "IDR"
	| "XDR"
	| "IRR"
	| "IQD"
	| "EUR"
	| "GBP"
	| "ILS"
	| "EUR"
	| "JMD"
	| "JPY"
	| "GBP"
	| "JOD"
	| "KZT"
	| "KES"
	| "AUD"
	| "KPW"
	| "KRW"
	| "KWD"
	| "KGS"
	| "LAK"
	| "EUR"
	| "LBP"
	| "LSL"
	| "ZAR"
	| "LRD"
	| "LYD"
	| "CHF"
	| "EUR"
	| "EUR"
	| "MOP"
	| "MKD"
	| "MGA"
	| "MWK"
	| "MYR"
	| "MVR"
	| "XOF"
	| "EUR"
	| "USD"
	| "EUR"
	| "MRU"
	| "MUR"
	| "EUR"
	| "XUA"
	| "MXN"
	| "MXV"
	| "USD"
	| "MDL"
	| "EUR"
	| "MNT"
	| "EUR"
	| "XCD"
	| "MAD"
	| "MZN"
	| "MMK"
	| "NAD"
	| "ZAR"
	| "AUD"
	| "NPR"
	| "EUR"
	| "XPF"
	| "NZD"
	| "NIO"
	| "XOF"
	| "NGN"
	| "NZD"
	| "AUD"
	| "USD"
	| "NOK"
	| "OMR"
	| "PKR"
	| "USD"
	| "PAB"
	| "USD"
	| "PGK"
	| "PYG"
	| "PEN"
	| "PHP"
	| "NZD"
	| "PLN"
	| "EUR"
	| "USD"
	| "QAR"
	| "EUR"
	| "RON"
	| "RUB"
	| "RWF"
	| "EUR"
	| "SHP"
	| "XCD"
	| "XCD"
	| "EUR"
	| "EUR"
	| "XCD"
	| "WST"
	| "EUR"
	| "STN"
	| "SAR"
	| "XOF"
	| "RSD"
	| "SCR"
	| "SLL"
	| "SGD"
	| "ANG"
	| "XSU"
	| "EUR"
	| "EUR"
	| "SBD"
	| "SOS"
	| "ZAR"
	| "SSP"
	| "EUR"
	| "LKR"
	| "SDG"
	| "SRD"
	| "NOK"
	| "SZL"
	| "SEK"
	| "CHF"
	| "CHE"
	| "CHW"
	| "SYP"
	| "TWD"
	| "TJS"
	| "TZS"
	| "THB"
	| "USD"
	| "XOF"
	| "NZD"
	| "TOP"
	| "TTD"
	| "TND"
	| "TRY"
	| "TMT"
	| "USD"
	| "AUD"
	| "UGX"
	| "UAH"
	| "AED"
	| "GBP"
	| "USD"
	| "USD"
	| "USN"
	| "UYU"
	| "UYI"
	| "UYW"
	| "UZS"
	| "VUV"
	| "VES"
	| "VND"
	| "USD"
	| "USD"
	| "XPF"
	| "MAD"
	| "YER"
	| "ZMW"
	| "ZWL"
	| "XBA"
	| "XBB"
	| "XBC"
	| "XBD"
	| "XTS"
	| "XXX"
	| "XAU"
	| "XPD"
	| "XPT"
	| "XAG";

// https://gist.github.com/ndbroadbent/588fefab8e0f1b459fcec8181b41b39c
export type Locales =
	| "af"
	| "af-NA"
	| "af-ZA"
	| "agq"
	| "agq-CM"
	| "ak"
	| "ak-GH"
	| "am"
	| "am-ET"
	| "ar"
	| "ar-001"
	| "ar-AE"
	| "ar-BH"
	| "ar-DJ"
	| "ar-DZ"
	| "ar-EG"
	| "ar-EH"
	| "ar-ER"
	| "ar-IL"
	| "ar-IQ"
	| "ar-JO"
	| "ar-KM"
	| "ar-KW"
	| "ar-LB"
	| "ar-LY"
	| "ar-MA"
	| "ar-MR"
	| "ar-OM"
	| "ar-PS"
	| "ar-QA"
	| "ar-SA"
	| "ar-SD"
	| "ar-SO"
	| "ar-SS"
	| "ar-SY"
	| "ar-TD"
	| "ar-TN"
	| "ar-YE"
	| "as"
	| "as-IN"
	| "asa"
	| "asa-TZ"
	| "az"
	| "az-Cyrl"
	| "az-Cyrl-AZ"
	| "az-Latn"
	| "az-Latn-AZ"
	| "bas"
	| "bas-CM"
	| "be"
	| "be-BY"
	| "bem"
	| "bem-ZM"
	| "bez"
	| "bez-TZ"
	| "bg"
	| "bg-BG"
	| "bm"
	| "bm-Latn"
	| "bm-Latn-ML"
	| "bn"
	| "bn-BD"
	| "bn-IN"
	| "bo"
	| "bo-CN"
	| "bo-IN"
	| "br"
	| "br-FR"
	| "brx"
	| "brx-IN"
	| "bs"
	| "bs-Cyrl"
	| "bs-Cyrl-BA"
	| "bs-Latn"
	| "bs-Latn-BA"
	| "ca"
	| "ca-AD"
	| "ca-ES"
	| "ca-FR"
	| "ca-IT"
	| "cgg"
	| "cgg-UG"
	| "chr"
	| "chr-US"
	| "ckb"
	| "ckb-IQ"
	| "ckb-IR"
	| "cs"
	| "cs-CZ"
	| "cy"
	| "cy-GB"
	| "da"
	| "da-DK"
	| "da-GL"
	| "dav"
	| "dav-KE"
	| "de"
	| "de-AT"
	| "de-BE"
	| "de-CH"
	| "de-DE"
	| "de-LI"
	| "de-LU"
	| "dje"
	| "dje-NE"
	| "dsb"
	| "dsb-DE"
	| "dua"
	| "dua-CM"
	| "dyo"
	| "dyo-SN"
	| "dz"
	| "dz-BT"
	| "ebu"
	| "ebu-KE"
	| "ee"
	| "ee-GH"
	| "ee-TG"
	| "el"
	| "el-CY"
	| "el-GR"
	| "en"
	| "en-001"
	| "en-150"
	| "en-AD"
	| "en-AG"
	| "en-AI"
	| "en-AL"
	| "en-AS"
	| "en-AT"
	| "en-AU"
	| "en-BA"
	| "en-BB"
	| "en-BE"
	| "en-BM"
	| "en-BS"
	| "en-BW"
	| "en-BZ"
	| "en-CA"
	| "en-CC"
	| "en-CH"
	| "en-CK"
	| "en-CM"
	| "en-CX"
	| "en-CY"
	| "en-CZ"
	| "en-DE"
	| "en-DG"
	| "en-DK"
	| "en-DM"
	| "en-EE"
	| "en-ER"
	| "en-ES"
	| "en-FI"
	| "en-FJ"
	| "en-FK"
	| "en-FM"
	| "en-FR"
	| "en-GB"
	| "en-GD"
	| "en-GG"
	| "en-GH"
	| "en-GI"
	| "en-GM"
	| "en-GR"
	| "en-GU"
	| "en-GY"
	| "en-HK"
	| "en-HR"
	| "en-HU"
	| "en-IE"
	| "en-IL"
	| "en-IM"
	| "en-IN"
	| "en-IO"
	| "en-IS"
	| "en-IT"
	| "en-JE"
	| "en-JM"
	| "en-KE"
	| "en-KI"
	| "en-KN"
	| "en-KY"
	| "en-LC"
	| "en-LR"
	| "en-LS"
	| "en-LT"
	| "en-LU"
	| "en-LV"
	| "en-ME"
	| "en-MG"
	| "en-MH"
	| "en-MO"
	| "en-MP"
	| "en-MS"
	| "en-MT"
	| "en-MU"
	| "en-MW"
	| "en-MY"
	| "en-NA"
	| "en-NF"
	| "en-NG"
	| "en-NL"
	| "en-NO"
	| "en-NR"
	| "en-NU"
	| "en-NZ"
	| "en-PG"
	| "en-PH"
	| "en-PK"
	| "en-PL"
	| "en-PN"
	| "en-PR"
	| "en-PT"
	| "en-PW"
	| "en-RO"
	| "en-RU"
	| "en-RW"
	| "en-SB"
	| "en-SC"
	| "en-SD"
	| "en-SE"
	| "en-SG"
	| "en-SH"
	| "en-SI"
	| "en-SK"
	| "en-SL"
	| "en-SS"
	| "en-SX"
	| "en-SZ"
	| "en-TC"
	| "en-TK"
	| "en-TO"
	| "en-TR"
	| "en-TT"
	| "en-TV"
	| "en-TZ"
	| "en-UG"
	| "en-UM"
	| "en-US"
	| "en-US-POSIX"
	| "en-VC"
	| "en-VG"
	| "en-VI"
	| "en-VU"
	| "en-WS"
	| "en-ZA"
	| "en-ZM"
	| "en-ZW"
	| "eo"
	| "es"
	| "es-419"
	| "es-AR"
	| "es-BO"
	| "es-CL"
	| "es-CO"
	| "es-CR"
	| "es-CU"
	| "es-DO"
	| "es-EA"
	| "es-EC"
	| "es-ES"
	| "es-GQ"
	| "es-GT"
	| "es-HN"
	| "es-IC"
	| "es-MX"
	| "es-NI"
	| "es-PA"
	| "es-PE"
	| "es-PH"
	| "es-PR"
	| "es-PY"
	| "es-SV"
	| "es-US"
	| "es-UY"
	| "es-VE"
	| "et"
	| "et-EE"
	| "eu"
	| "eu-ES"
	| "ewo"
	| "ewo-CM"
	| "fa"
	| "fa-AF"
	| "fa-IR"
	| "ff"
	| "ff-CM"
	| "ff-GN"
	| "ff-MR"
	| "ff-SN"
	| "fi"
	| "fi-FI"
	| "fil"
	| "fil-PH"
	| "fo"
	| "fo-FO"
	| "fr"
	| "fr-BE"
	| "fr-BF"
	| "fr-BI"
	| "fr-BJ"
	| "fr-BL"
	| "fr-CA"
	| "fr-CD"
	| "fr-CF"
	| "fr-CG"
	| "fr-CH"
	| "fr-CI"
	| "fr-CM"
	| "fr-DJ"
	| "fr-DZ"
	| "fr-FR"
	| "fr-GA"
	| "fr-GF"
	| "fr-GN"
	| "fr-GP"
	| "fr-GQ"
	| "fr-HT"
	| "fr-KM"
	| "fr-LU"
	| "fr-MA"
	| "fr-MC"
	| "fr-MF"
	| "fr-MG"
	| "fr-ML"
	| "fr-MQ"
	| "fr-MR"
	| "fr-MU"
	| "fr-NC"
	| "fr-NE"
	| "fr-PF"
	| "fr-PM"
	| "fr-RE"
	| "fr-RW"
	| "fr-SC"
	| "fr-SN"
	| "fr-SY"
	| "fr-TD"
	| "fr-TG"
	| "fr-TN"
	| "fr-VU"
	| "fr-WF"
	| "fr-YT"
	| "fur"
	| "fur-IT"
	| "fy"
	| "fy-NL"
	| "ga"
	| "ga-IE"
	| "gd"
	| "gd-GB"
	| "gl"
	| "gl-ES"
	| "gsw"
	| "gsw-CH"
	| "gsw-FR"
	| "gsw-LI"
	| "gu"
	| "gu-IN"
	| "guz"
	| "guz-KE"
	| "gv"
	| "gv-IM"
	| "ha"
	| "ha-Latn"
	| "ha-Latn-GH"
	| "ha-Latn-NE"
	| "ha-Latn-NG"
	| "haw"
	| "haw-US"
	| "he"
	| "he-IL"
	| "hi"
	| "hi-IN"
	| "hr"
	| "hr-BA"
	| "hr-HR"
	| "hsb"
	| "hsb-DE"
	| "hu"
	| "hu-HU"
	| "hy"
	| "hy-AM"
	| "id"
	| "id-ID"
	| "ig"
	| "ig-NG"
	| "ii"
	| "ii-CN"
	| "is"
	| "is-IS"
	| "it"
	| "it-CH"
	| "it-IT"
	| "it-SM"
	| "iu"
	| "iu-Cans"
	| "iu-Cans-CA"
	| "ja"
	| "ja-JP"
	| "jgo"
	| "jgo-CM"
	| "jmc"
	| "jmc-TZ"
	| "ka"
	| "ka-GE"
	| "kab"
	| "kab-DZ"
	| "kam"
	| "kam-KE"
	| "kde"
	| "kde-TZ"
	| "kea"
	| "kea-CV"
	| "khq"
	| "khq-ML"
	| "ki"
	| "ki-KE"
	| "kk"
	| "kk-Cyrl"
	| "kk-Cyrl-KZ"
	| "kkj"
	| "kkj-CM"
	| "kl"
	| "kl-GL"
	| "kln"
	| "kln-KE"
	| "km"
	| "km-KH"
	| "kn"
	| "kn-IN"
	| "ko"
	| "ko-KP"
	| "ko-KR"
	| "kok"
	| "kok-IN"
	| "ks"
	| "ks-Arab"
	| "ks-Arab-IN"
	| "ksb"
	| "ksb-TZ"
	| "ksf"
	| "ksf-CM"
	| "ksh"
	| "ksh-DE"
	| "kw"
	| "kw-GB"
	| "ky"
	| "ky-Cyrl"
	| "ky-Cyrl-KG"
	| "lag"
	| "lag-TZ"
	| "lb"
	| "lb-LU"
	| "lg"
	| "lg-UG"
	| "lkt"
	| "lkt-US"
	| "ln"
	| "ln-AO"
	| "ln-CD"
	| "ln-CF"
	| "ln-CG"
	| "lo"
	| "lo-LA"
	| "localeIdentifier"
	| "lt"
	| "lt-LT"
	| "lu"
	| "lu-CD"
	| "luo"
	| "luo-KE"
	| "luy"
	| "luy-KE"
	| "lv"
	| "lv-LV"
	| "mas"
	| "mas-KE"
	| "mas-TZ"
	| "mer"
	| "mer-KE"
	| "mfe"
	| "mfe-MU"
	| "mg"
	| "mg-MG"
	| "mgh"
	| "mgh-MZ"
	| "mgo"
	| "mgo-CM"
	| "mk"
	| "mk-MK"
	| "ml"
	| "ml-IN"
	| "mn"
	| "mn-Cyrl"
	| "mn-Cyrl-MN"
	| "mr"
	| "mr-IN"
	| "ms"
	| "ms-Arab"
	| "ms-Arab-BN"
	| "ms-Arab-MY"
	| "ms-Latn"
	| "ms-Latn-BN"
	| "ms-Latn-MY"
	| "ms-Latn-SG"
	| "mt"
	| "mt-MT"
	| "mua"
	| "mua-CM"
	| "my"
	| "my-MM"
	| "naq"
	| "naq-NA"
	| "nb"
	| "nb-NO"
	| "nb-SJ"
	| "nd"
	| "nd-ZW"
	| "ne"
	| "ne-IN"
	| "ne-NP"
	| "nl"
	| "nl-AW"
	| "nl-BE"
	| "nl-BQ"
	| "nl-CW"
	| "nl-NL"
	| "nl-SR"
	| "nl-SX"
	| "nmg"
	| "nmg-CM"
	| "nn"
	| "nn-NO"
	| "nnh"
	| "nnh-CM"
	| "nus"
	| "nus-SD"
	| "nyn"
	| "nyn-UG"
	| "om"
	| "om-ET"
	| "om-KE"
	| "or"
	| "or-IN"
	| "os"
	| "os-GE"
	| "os-RU"
	| "pa"
	| "pa-Arab"
	| "pa-Arab-PK"
	| "pa-Guru"
	| "pa-Guru-IN"
	| "pl"
	| "pl-PL"
	| "ps"
	| "ps-AF"
	| "pt"
	| "pt-AO"
	| "pt-BR"
	| "pt-CV"
	| "pt-GW"
	| "pt-MO"
	| "pt-MZ"
	| "pt-PT"
	| "pt-ST"
	| "pt-TL"
	| "qu"
	| "qu-BO"
	| "qu-EC"
	| "qu-PE"
	| "rm"
	| "rm-CH"
	| "rn"
	| "rn-BI"
	| "ro"
	| "ro-MD"
	| "ro-RO"
	| "rof"
	| "rof-TZ"
	| "ru"
	| "ru-BY"
	| "ru-KG"
	| "ru-KZ"
	| "ru-MD"
	| "ru-RU"
	| "ru-UA"
	| "rw"
	| "rw-RW"
	| "rwk"
	| "rwk-TZ"
	| "sah"
	| "sah-RU"
	| "saq"
	| "saq-KE"
	| "sbp"
	| "sbp-TZ"
	| "se"
	| "se-FI"
	| "se-NO"
	| "se-SE"
	| "seh"
	| "seh-MZ"
	| "ses"
	| "ses-ML"
	| "sg"
	| "sg-CF"
	| "shi"
	| "shi-Latn"
	| "shi-Latn-MA"
	| "shi-Tfng"
	| "shi-Tfng-MA"
	| "si"
	| "si-LK"
	| "sk"
	| "sk-SK"
	| "sl"
	| "sl-SI"
	| "smn"
	| "smn-FI"
	| "sn"
	| "sn-ZW"
	| "so"
	| "so-DJ"
	| "so-ET"
	| "so-KE"
	| "so-SO"
	| "sq"
	| "sq-AL"
	| "sq-MK"
	| "sq-XK"
	| "sr"
	| "sr-Cyrl"
	| "sr-Cyrl-BA"
	| "sr-Cyrl-ME"
	| "sr-Cyrl-RS"
	| "sr-Cyrl-XK"
	| "sr-Latn"
	| "sr-Latn-BA"
	| "sr-Latn-ME"
	| "sr-Latn-RS"
	| "sr-Latn-XK"
	| "sv"
	| "sv-AX"
	| "sv-FI"
	| "sv-SE"
	| "sw"
	| "sw-CD"
	| "sw-KE"
	| "sw-TZ"
	| "sw-UG"
	| "ta"
	| "ta-IN"
	| "ta-LK"
	| "ta-MY"
	| "ta-SG"
	| "te"
	| "te-IN"
	| "teo"
	| "teo-KE"
	| "teo-UG"
	| "tg"
	| "tg-Cyrl"
	| "tg-Cyrl-TJ"
	| "th"
	| "th-TH"
	| "ti"
	| "ti-ER"
	| "ti-ET"
	| "tk"
	| "tk-Latn"
	| "tk-Latn-TM"
	| "to"
	| "to-TO"
	| "tr"
	| "tr-CY"
	| "tr-TR"
	| "twq"
	| "twq-NE"
	| "tzm"
	| "tzm-Latn"
	| "tzm-Latn-MA"
	| "ug"
	| "ug-Arab"
	| "ug-Arab-CN"
	| "uk"
	| "uk-UA"
	| "ur"
	| "ur-IN"
	| "ur-PK"
	| "uz"
	| "uz-Arab"
	| "uz-Arab-AF"
	| "uz-Cyrl"
	| "uz-Cyrl-UZ"
	| "uz-Latn"
	| "uz-Latn-UZ"
	| "vai"
	| "vai-Latn"
	| "vai-Latn-LR"
	| "vai-Vaii"
	| "vai-Vaii-LR"
	| "vi"
	| "vi-VN"
	| "vun"
	| "vun-TZ"
	| "wae"
	| "wae-CH"
	| "xog"
	| "xog-UG"
	| "yav"
	| "yav-CM"
	| "yi"
	| "yi-001"
	| "yo"
	| "yo-BJ"
	| "yo-NG"
	| "zgh"
	| "zgh-MA"
	| "zh"
	| "zh-Hans"
	| "zh-Hans-CN"
	| "zh-Hans-HK"
	| "zh-Hans-MO"
	| "zh-Hans-SG"
	| "zh-Hant"
	| "zh-Hant-HK"
	| "zh-Hant-MO"
	| "zh-Hant-TW"
	| "zu"
	| "zu-ZA";