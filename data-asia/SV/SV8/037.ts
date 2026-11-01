import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム",
		ko: "로토무",
		'zh-tw': "洛托姆",
		'zh-cn': "洛托姆",
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
		ko: "특수한 모터를 움직이는 동력원으로서 긴 시간 동안 연구되었던 포켓몬이다.",
		'zh-tw': "被當作驅動 特殊馬達的動力源， 而被長期研究的寶可夢。",
		'zh-cn': "被當作驅動 特殊馬達的動力源， 而被長期研究的寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "クラッシュパルス",
				ko: "크래시펄스",
				'zh-tw': "粉碎脈衝",
				'zh-cn': "粉碎脈衝",
			},
			cost: ["Lightning"],
			effect: {
				ja: "相手の手札を見て、その中にある「グッズ」と「ポケモンのどうぐ」を、すべてトラッシュする。",
				ko: "상대의 패를 보고 그 중에 있는 「아이템」과 「포켓몬의 도구」를 모두 트래쉬한다.",
				'zh-tw': "查看對手的手牌，將其中的「物品」卡與「寶可夢道具」卡全部丟棄。",
				'zh-cn': "查看對手的手牌，將其中的「物品」卡與「寶可夢道具」卡全部丟棄。",
			},
		},
		{
			name: {
				ja: "エネショート",
				ko: "에너지쇼트",
				'zh-tw': "能量短路",
				'zh-cn': "能量短路",
			},
			damage: "20×",
			cost: ["Lightning"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。",
				ko: "상대의 배틀 포켓몬에게 붙어 있는 에너지의 개수 × 20데미지를 준다.",
				'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
				'zh-cn': "造成對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793471,
				tcgplayer: 587617,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [479],
};

export default card;
