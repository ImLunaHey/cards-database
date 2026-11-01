import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゾロア",
		ko: "조로아",
		id: "Zorua",
		th: "โซรัว",
		'zh-tw': "索羅亞",
		'zh-cn': "索羅亞"
	},

	illustrator: "Yuu Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [570],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "人や ほかの ポケモンに 化ける。 自分の 正体を 隠すことで 危険から 身を 守っているのだ。",
		ko: "사람이나 다른 포켓몬으로 둔갑한다. 자신의 정체를 감추어 위험으로부터 몸을 지키는 것이다.",
		id: "Zorua menjelma menjadi manusia atau Pokémon lain. Dengan menyembunyikan identitasnya, Pokémon ini melindungi dirinya dari bahaya.",
		th: "แปลงกายเป็นคนหรือโปเกมอนตัวอื่น ซ่อนตัวตนที่แท้จริงเพื่อปกป้องตัวเองจากอันตราย",
		'zh-tw': "會化為人類或其他的寶可夢。 透過隱藏自己原本的面貌， 保護自己不遇危險。",
		'zh-cn': "會化為人類或其他的寶可夢。 透過隱藏自己原本的面貌， 保護自己不遇危險。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふむ",
			ko: "밟기",
			id: "Menginjak",
			th: "เหยียบ",
			'zh-tw': "踩",
			'zh-cn': "踩"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ダブルひっかき",
			ko: "더블할퀴기",
			id: "Cakaran Ganda",
			th: "ข่วนทวีคูณ",
			'zh-tw': "雙重抓",
			'zh-cn': "雙重抓"
		},

		damage: "20×",

		effect: {
			ja: "コインを2回投げ、オモテの数×20ダメージ。",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 20데미지를 준다.",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803209,
				tcgplayer: 602485,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604573,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602486,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card