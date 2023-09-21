"use client";
import {
  Droppable,
  DragDropContext,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import Card from "@/components/ui/card/card";
import DragHook from "@/hooks/drag-hook/drag-hook";

const CardListDragAble = ({ CardMockData }: any) => {
  const { dragList, setDragList } = DragHook({ data: CardMockData });
  resetServerContext();
  
  function handleOnDragEnd(result: any) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(dragList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDragList(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters" direction="horizontal">
        {(provided) => (
          <div
            className="mt-20 mx-10 grid grid-cols-2 gap-8 md:grid-cols-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {dragList.map((index: any, i: number) => {
              return (
                <Draggable
                  key={index.id}
                  draggableId={index.id.toString()}
                  index={i}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        title={index.title}
                        description={index.description}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CardListDragAble;
