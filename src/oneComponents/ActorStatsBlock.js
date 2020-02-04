import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'lodash/fp';
import { Actor } from '@one/modules/actor';
import { CollapseBody, FeatherIcon } from '@one/components';
import createActorProfile from './createActorProfile';

export const statDefaultTitles = {
    birthdayTitle: 'Date of Birth',
    birthplaceTitle: 'Birth Place',
    heightTitle: 'Height',
    measurementsTitle: 'Measurements',
};

const Wrapper = styled.div`
    margin-bottom: 20px;
    ${({ configs: { hasBackgroundColor, backgroundColor } }) =>
        hasBackgroundColor && backgroundColor && `background-color:${backgroundColor}`}
`;

const StatsList = styled.ul`
    padding: 10px 15px;

    li {
        line-height: 2;
        color: #888;

        > span {
            font-size: 16px;
        }
    }
`;

const StatsHeaderWrapper = styled.div`
    display: flex;
    padding: 1em 1em;
    font-size: 14px;
    text-align: left;
`;

const StatsTitle = styled.h2`
    line-height: 1;
    font-size: 1.5em;
    padding-right: 16px;
    overflow-wrap: break-word;
    ${({ configs: { statTitleColor } }) => statTitleColor && `color:${statTitleColor}`}
`;

const ToggleIconButton = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    transition: background 0.2s ease;
`;

const StatsToggleButton = ({ onToggle, isExpanded, configs: { signColor } }) => (
    <ToggleIconButton onClick={onToggle}>
        {isExpanded ? (
            <FeatherIcon icon="Minus" size={20} color={signColor} />
        ) : (
            <FeatherIcon icon="Plus" size={20} color={signColor} />
        )}
    </ToggleIconButton>
);

const StatsName = styled.span`
    ${({ configs: { statTitleColor } }) => statTitleColor && `color:${statTitleColor}`}
`;

const StatsValue = styled.span`
    ${({ configs: { statValueColor } }) => statValueColor && `color:${statValueColor}`}
`;

const ActorStatsBlock = ({
    actor,
    client: {
        device: { isMobile },
    },
    styles: { backgroundColor },
    options: { hasBackgroundColor, hasExpandCollapse },
    childs: {
        statTitle: {
            styles: { color: statTitleColor },
        },
        statValue: {
            styles: { color: statValueColor },
        },
        signButton: {
            styles: { color: signColor },
        },
    },
}) => {
    const statOptionsConfig = {
        showBirthday: {
            title: statDefaultTitles.birthdayTitle,
            value: actor.getFormattedBirthday(),
        },
        showBirthplace: {
            title: statDefaultTitles.birthplaceTitle,
            value: actor.getFormattedBirthplace(),
        },
        showHeight: {
            title: statDefaultTitles.heightTitle,
            value: actor.getFormattedHeight(),
        },
        showMeasurements: {
            title: statDefaultTitles.measurementsTitle,
            value: actor.getFormattedMeasurements(),
        },
    };

    const configs = {
        backgroundColor,
        hasBackgroundColor,
        statTitleColor,
        statValueColor,
        hasExpandCollapse,
        signColor,
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Wrapper configs={configs}>
            {hasExpandCollapse && isMobile && (
                <StatsHeaderWrapper>
                    <StatsTitle configs={configs}>STATS & MEASUREMENTS</StatsTitle>
                    <StatsToggleButton
                        onToggle={handleToggle}
                        isExpanded={isExpanded}
                        configs={configs}
                    />
                </StatsHeaderWrapper>
            )}
            {isMobile ? (
                <CollapseBody {...(hasExpandCollapse ? { isOpen: isExpanded } : { isOpen: true })}>
                    <StatsList>
                        {Object.keys(statOptionsConfig).map((optionName, index) => {
                            return (
                                <li key={index}>
                                    <StatsName
                                        configs={configs}
                                    >{`${statOptionsConfig[optionName].title}: `}</StatsName>
                                    <StatsValue configs={configs}>
                                        {statOptionsConfig[optionName].value}
                                    </StatsValue>
                                </li>
                            );
                        })}
                    </StatsList>
                </CollapseBody>
            ) : (
                <CollapseBody isOpen>
                    <StatsList>
                        {Object.keys(statOptionsConfig).map((optionName, index) => {
                            return (
                                <li key={index}>
                                    <StatsName
                                        configs={configs}
                                    >{`${statOptionsConfig[optionName].title}: `}</StatsName>
                                    <StatsValue configs={configs}>
                                        {statOptionsConfig[optionName].value}
                                    </StatsValue>
                                </li>
                            );
                        })}
                    </StatsList>
                </CollapseBody>
            )}
        </Wrapper>
    );
};

ActorStatsBlock.propTypes = {
    actor: PropTypes.instanceOf(Actor),
};

export default compose(createActorProfile)(ActorStatsBlock);
