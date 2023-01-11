import {
  LIST_BACKLOG,
  LIST_READY,
  LIST_IN_PROGRESS,
  LIST_FINISHED
} from "./listTypes";

export const dataMock = [
  {
    id: 1,
    name: "Login page – performance issues",
    description: "This task has no description",
    listType: LIST_BACKLOG,
  },
  {
    id: 2,
    name: "Shop page – performance issues",
    description: "This task has no description",
    listType: LIST_READY,
  },
  {
    id: 3,
    name: "User page – performance issues",
    description: "This task has no description",
    listType: LIST_IN_PROGRESS,
  },
  {
    id: 4,
    name: "Main page – performance issues",
    description: "Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.",
    listType: LIST_FINISHED,
  },
];
