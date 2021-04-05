import React from 'react';
import {Trans} from "react-i18next";

/**
 * Section with title
 *
 * @param {object} props.className Css styles
 * @param {string} props.title Included in a heading tag
 * @param {boolean} [props.h=1] Heading tag level
 * @param props.children
 */

const Section = React.forwardRef((props, ref) => {


    let {h, title, ...tagProps} = props;

    const HTag = `h${h}`;

    return (
        <section {...tagProps} ref={ref}>
            <HTag><Trans>{props.title}</Trans></HTag>
            {props.children}
        </section>
    );

});

Section.defaultProps = {
  h: 1
};


export default Section;
