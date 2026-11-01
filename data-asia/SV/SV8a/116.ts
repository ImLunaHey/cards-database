import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチ",
		ko: "무쇠바퀴",
		id: "Iron Treads",
		th: "รอยล้อเหล็ก",
		'zh-tw': "鐵轍跡",
		'zh-cn': "鐵轍跡"
	},

	illustrator: "Tonji Matsuno",
	rarity: "None",
	category: "Pokemon",
	dexId: [990],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "近年 目撃例が ある。 古い 探検記に 記された 謎の 物体に 似た ポケモン。",
		ko: "근년에 목격된 사례가 있다. 오래된 탐험기에 기록된 정체불명의 물체를 닮은 포켓몬.",
		id: "Terdapat laporan kesaksian atas Pokémon ini dalam beberapa tahun terakhir. Pokémon yang mirip dengan objek misterius yang tertera dalam jurnal ekspedisi kuno.",
		th: "มีผู้พบเห็นเมื่อไม่กี่ปีที่ผ่านมานี้ เป็นโปเกมอนที่มีลักษณะคล้ายกับวัตถุลึกลับที่ระบุไว้ในบันทึกการสำรวจเก่าแก่",
		'zh-tw': "近年曾經有人目擊到牠。 是與古老的探險記裡記載的 不明物體長得很像的寶可夢。",
		'zh-cn': "近年曾經有人目擊到牠。 是與古老的探險記裡記載的 不明物體長得很像的寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "デュアルコア",
			ko: "듀얼 코어",
			id: "Dual Core",
			th: "ดูอัลคอร์",
			'zh-tw': "二重核心",
			'zh-cn': "二重核心"
		},

		effect: {
			ja: "このポケモンに「ブーストエナジー 未来」がついているかぎり、このポケモンはとの2つのタイプになる。",
			ko: "이 포켓몬에게 「부스트에너지 미래」가 붙어 있는 한, 이 포켓몬은 (격투)와 (강철)의 2가지 타입이 된다.",
			id: "Selama Pokémon ini mengenakan Pemacu Energi Futur, Pokémon ini menjadi 2 tipe yaitu {Petarung} dan {Logam}.",
			th: "ตราบใดที่โปเกมอนนี้มี [บูสต์เอนเนอร์จี้ อนาคต] ติดอยู่ โปเกมอนนี้จะเป็น 2 ประเภทคือ[ต่อสู้]และ[โลหะ]",
			'zh-tw': "只要這隻寶可夢身上附有「驅勁能量 未來」，這隻寶可夢改為【鬥】與【鋼】2種屬性。",
			'zh-cn': "只要這隻寶可夢身上附有「驅勁能量 未來」，這隻寶可夢改為【鬥】與【鋼】2種屬性。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "パスホイール",
			ko: "패스휠",
			id: "Pass Wheel",
			th: "พาสวีล",
			'zh-tw': "路徑輪",
			'zh-cn': "路徑輪"
		},

		damage: 60,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			ko: "이 포켓몬에게 붙어 있는 에너지를 1개 선택해서 벤치 포켓몬에게 붙인다.",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			'zh-cn': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803229,
				tcgplayer: 602520,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604588,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602521,
			},
		},
	],

	retreat: 2,
	regulationMark: "H"
}

export default card