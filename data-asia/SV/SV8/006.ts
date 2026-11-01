import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ビビヨン",
		ko: "비비용",
		'zh-tw': "彩粉蝶",
		'zh-cn': "彩粉蝶",
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "不思議な 土地で 生まれた。 色鮮やかな 毒の りんぷんを 翅から 散らして 戦う。",
		ko: "신비한 땅에서 태어났다. 독성을 띠는 화려한 날개 가루를 흩뿌리면서 싸운다.",
		'zh-tw': "誕生在神奇的地方。 會從翅膀灑出色彩鮮豔的 毒鱗粉來戰鬥。",
		'zh-cn': "誕生在神奇的地方。 會從翅膀灑出色彩鮮豔的 毒鱗粉來戰鬥。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "エボルパウダー",
				ko: "이볼브파우더",
				'zh-tw': "進化粉",
				'zh-cn': "進化粉",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。",
				ko: "자신의 벤치 포켓몬 전원으로부터 각각 진화하는 카드를 자신의 덱에서 1장씩 선택해서 각각 올려서 진화시킨다. 그리고 덱을 섞는다.",
				'zh-tw': "從自己的牌庫，選擇自己的所有備戰寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
				'zh-cn': "從自己的牌庫，選擇自己的所有備戰寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "カッターウインド",
				ko: "커터윈드",
				'zh-tw': "利刃之風",
				'zh-cn': "利刃之風",
			},
			damage: 90,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793440,
				tcgplayer: 587586,
			},
		},
	],

	evolveFrom: {
		ja: "コフーライ",
		ko: "분떠도리",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [666],
};

export default card;
