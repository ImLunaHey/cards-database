import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "トゲチック",
		ko: "토게틱",
		'zh-tw': "波克基古",
		'zh-cn': "波克基古",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。",
		ko: "마음 착한 사람에게 행복을 가져다주기 위해 모습을 드러낸다고 전해진다.",
		'zh-tw': "據說牠會為了將 幸福帶給心地善良 的人而現身。",
		'zh-cn': "據說牠會為了將 幸福帶給心地善良 的人而現身。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ドレインキッス",
				ko: "드레인키스",
				'zh-tw': "吸取之吻",
				'zh-cn': "吸取之吻",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				ko: "이 포켓몬의 HP를 「30」회복한다.",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				'zh-cn': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793480,
				tcgplayer: 587626,
			},
		},
	],

	evolveFrom: {
		ja: "トゲピー",
		ko: "토게피",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [176],
};

export default card;
