import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { compose } from 'lodash/fp';

import { Actor } from '@one/modules/actor';
import { Row, Column } from '@one/grid';
import { mediaDown } from '@one/theme-utils';
import { Section, SectionContent } from '@one/components';

import createActorProfile from './createActorProfile';

// feature to add upcoming sprint planning- font size from admin
const ActorNameStyled = styled.div`
    color: ${({ fontColor }) => fontColor};
    text-transform: uppercase;
    font-size: 2.25rem;

    ${mediaDown('small')`
        font-size: 1.25rem;
    `}
`;

const ActorNameBlock = ({
    actor,
    fontColor,
    fontSelection,
    cardOptions: { showFirstNamesOnly = false } = {},
}) => {
    const actorName = actor.getName(showFirstNamesOnly);

    const getFontClassName = () => {
        const className = {
            primaryFont: 'font-primary',
            secondaryFont: 'font-secondary',
        };
        return className[fontSelection];
    };

    return (
        <Section>
            <SectionContent padded noborder>
                <Row>
                    <Column>
                        <ActorNameStyled className={getFontClassName()} fontColor={fontColor}>
                            {actorName}
                        </ActorNameStyled>
                    </Column>
                </Row>
            </SectionContent>
        </Section>
    );
};

ActorNameBlock.propTypes = {
    actor: PropTypes.instanceOf(Actor).isRequired,
    fontColor: PropTypes.string.isRequired,
    fontSelection: PropTypes.oneOf(['primaryFont', 'secondaryFont']).isRequired,
};

export default compose(
    withTheme,
    createActorProfile,
)(ActorNameBlock);
