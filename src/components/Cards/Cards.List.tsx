import React, { Fragment } from "react";
import { Stats } from "../StatsComponent";
import { ProgressComponent } from "../ProgressComponent";
import { Card } from "./Card.Component";
import { CardFooter } from "./Card.Footer";
import { CardsJSON, ICard } from "../../json/cards";
import { Filters } from "../../json/filters";
import { IProgressComponent } from "../ProgressComponent";
import memoize from "fast-memoize";

// This memoizes the call to filter cards by the filterBy string.
const GetCards = memoize(
  (
    filterBy: string,
    // Need to set an id here to prevent image caching.
    CardsList: Array<ICard> = CardsJSON.map((item, i) => ({ ...item, id: i }))
  ): Array<ICard> => {
    const chosenCampaign = Filters.find(item => item.campaignName === filterBy);
    if (chosenCampaign && chosenCampaign.id) {
      return CardsList.filter(item => item.campaignId === chosenCampaign.id);
    }
    return CardsList;
  }
);

export const Cards: React.FunctionComponent<{ filterBy: string }> = ({
  filterBy
}) => {
  return (
    <Fragment>
      {GetCards(filterBy).map((card: Partial<ICard>, i: number) => (
        <Card
          key={i}
          title={card.cardTitle}
          text={card.cardDescription}
          imageSrc={`${card.primaryMediaUrl}?random=${card.id}`}
          ProgressComponent={(props: IProgressComponent) => (
            <ProgressComponent {...props} />
          )}
        >
          <CardFooter>
            <Stats
              amount={card.listOfPlans![0].price.amount}
              subscribers={card.subscribers}
              views={card.views}
            />
          </CardFooter>
        </Card>
      ))}
    </Fragment>
  );
};
