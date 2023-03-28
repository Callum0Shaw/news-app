import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();

  return (
    <main className="main__article__container">
      <article className="section__container article__container">
        <div className="article__details">
          <p>USA Today</p>
          <p>2023-03-26T10:20:30Z</p>
        </div>
        <h2 className="article__title">
          American contractor killed, troops wounded in Iran-linked drone attack in Syria, prompting
          US airstrikes
        </h2>
        <p className="article__description">
          Phillip Washington, Denver International Airport CEO, withdrew his nomination to lead the
          Federal Aviation Administration. President Biden chose him for the job in July 2022.
        </p>
        <div className={`article__image__container`}>
          <div className={`placeholder`}></div>
        </div>
        <p className="article__text">
          Just 1% of the estimated £1.1bn lost from the government’s Covid business support
          programme in England as a result of fraud and error has been recovered so far, the public
          spending watchdog has said in a report urging ministers to learn lessons from the scheme.
          The “overwhelming majority” of fraud and error occurred during the initial incarnation of
          the grant scheme launched in March 2020, which did not require prepayment checks, the
          National Audit Office (NAO) said in its report on the rushed-through efforts. The total of
          £1.1bn lost in grants amounted to just under 5% of the total for the scheme, according to
          business department statistics. The latest figures of retrieved money, collated by the
          newly renamed Department for Business and Trade (DBT) and cited by the NAO, showed that
          only £11.4m of that has been recovered – 1% of the amount lost. The report sets out the
          sheer speed at which the eight separate grant schemes for businesses, administered by
          local authorities, were developed and launched, noting that the business department was
          only asked by the Treasury in late February to examine how such a system might work.
          Nearly £1bn of fraudulent Covid grants made to UK firms ‘unlikely to be recovered’. The
          first version began from 11 March, with a second on 17 March. As early as 19 April, the
          report says, local authorities had made 484,000 payments totalling £6bn, more than 50% of
          the total handed out in what was the biggest such support programme beyond the furlough
          scheme. Matters were not helped by a lack of any shared contingency plan between local and
          national government on how to support businesses in the event of an emergency, the NAO
          said, with councils generally only hearing about new schemes when they were announced
          publicly, at which point they were already dealing with queries from local businesses. One
          result of the accelerated timetable was the initial wave of fraud and error. Later
          versions of the grants not only used prepayment checks but also had access to much more
          accurate local information about businesses. The report calls for the DBT and Treasury,
          working with councils, to draw up formal contingency plans by the end of this year about
          similar financial support if there is a future national emergency, using the lessons of
          the Covid scheme. Gareth Davies, the head of the NAO, said the business department and
          local government “deserve credit for working quickly to set up and distribute grants to
          businesses”, but that the full impact of fraud and error remained unclear.
        </p>
      </article>
      <aside className="aside__container">
        <h3>Latest stories:</h3>
        <p>
          Biden's choice for FAA administrator withdraws nomination after lack of Senate support
        </p>
        <hr className="aside__hr" />
        <p>Taiwan breaks ties with Honduras after it switches allegiance to Beijing</p>
        <hr className="aside__hr" />
        <p>
          March Madness 2023: FAU's improbable Final Four run isn't as shocking once you know these
          anonymous Owls
        </p>
      </aside>
    </main>
  );
}

export default Article;
