import CardListDragAble from "@/components/card-list-dragable/card-list-dragable";
import { delay } from "@/utils/delay/delay";
import { CardMockData } from "@/utils/mock/card-data-mock";

const CardList = async () => {
  await delay(2000);
  return <CardListDragAble CardMockData={CardMockData} />;
};

export default CardList;
