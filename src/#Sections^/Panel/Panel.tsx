import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// @ts-ignore
import useStore from '$Store';
// @ts-ignore
import isFound from '$Utils/isFound.ts';
import { compareCreated_At } from '$Sections/Dash/Fn/compare';

// const Fruit = styled.img`
//   height: 94%;
//   width: 94%;
//   position: absolute;
//   flex-grow: 1;
//   display: block;
// `

const Panel = () => {
    // @ts-ignore
    const topicsSelected = useStore((state) => state.topicsSelected);
    // @ts-ignore
    const topicsEnum = useStore((state) => state.topics);
    // @ts-ignore
    const pushTopic = useStore((state) => state.pushTopic);
    // @ts-ignore
    const removeTopic = useStore((state) => state.removeTopic);
    // STATE TOGGLES
    const [centerCircleToggled, setCenterCircleToggled] = useState(false);
    const [centerTopCircleToggled, setCenterTopCircleToggled] = useState(false);
    const [centerTopTopCircleToggled, setCenterTopTopCircleToggled] = useState(false);
    const [centerBottomCircleToggled, setCenterBottomCircleToggled] = useState(false);
    const [centerBottomBottomCircleToggled, setCenterBottomBottomCircleToggled] = useState(false);
    const [upperRightCircleToggled, setUpperRightCircleToggled] = useState(false);
    const [upperRightRightCircleToggled, setUpperRightRightCircleToggled] = useState(false);
    const [upperLeftCircleToggled, setUpperLeftCircleToggled] = useState(false);
    const [upperLeftLeftCircleToggled, setUpperLeftLeftCircleToggled] = useState(false);
    const [bottomRightCircleToggled, setBottomRightCircleToggled] = useState(false);
    const [bottomRightRightCircleToggled, setBottomRightRightCircleToggled] = useState(false);
    const [bottomLeftCircleToggled, setBottomLeftCircleToggled] = useState(false);
    const [bottomLeftLeftCircleToggled, setBottomLeftLeftCircleToggled] = useState(false);
    // STATE BOOLEANS
    const [topics, setTopics] = useState(true);
    const [subTopics, setSubTopics] = useState(false);
    const [subSubTopics, setSubSubTopics] = useState(false);
    // STATE CIRCLES
    const [centerCircle, setCenterCircle] = useState('Topics');
    const [centerTopCircle, setCenterTopCircle] = useState('');

    // const mouseOverLogo = () => {
    //   const FireNetLogo = document.getElementById('FireNetLogo')
    //   const Fruit = document.getElementById('Fruit')
    //   const FruitCake = document.getElementById('FruitCake')
    //   const CenterCircle = document.getElementById('CenterCircle')
    //   const CenterTopCircle = document.getElementById('CenterTopCircle')
    //   if (FireNetLogo) { FireNetLogo.style.display = 'none' }
    //   if (Fruit) { Fruit.style.display = 'block' }
    //   if (FruitCake) { FruitCake.style.display = 'flex' }
    //   if (CenterCircle) { CenterCircle.style.display = 'block' }
    //   if (CenterTopCircle) { CenterTopCircle.style.display = 'block' }
    // }
    // const mouseLeaveFruitCake = () => {
    //   const FireNetLogo = document.getElementById('FireNetLogo')
    //   const Fruit = document.getElementById('Fruit')
    //   const FruitCake = document.getElementById('FruitCake')
    //   const CenterCircle = document.getElementById('CenterCircle')
    //   const CenterTopCircle = document.getElementById('CenterTopCircle')
    //   if (FireNetLogo) { FireNetLogo.style.display = 'block' }
    //   if (Fruit) { Fruit.style.display = 'none' }
    //   if (FruitCake) { FruitCake.style.display = 'flex' }
    //   if (CenterCircle) { CenterCircle.style.display = 'none' }
    //   if (CenterTopCircle) { CenterTopCircle.style.display = 'none' }
    // }onMouseLeave={() => mouseLeaveFruitCake()}
    // const mouseLeaveFruit = () => {
    //   const FireNetLogo = document.getElementById('FireNetLogo')
    //   const Fruit = document.getElementById('Fruit')
    //   if (FireNetLogo) { FireNetLogo.style.display = 'block' }
    //   if (Fruit) { Fruit.style.display = 'none' }
    // }onMouseEnter={() => mouseOverLogo()}

    // const CenterCircleClick = () => {
    //   const CenterCircle = document.getElementById('CenterCircle') as HTMLImageElement;
    //   if (CenterCircle && !centerCircleToggled) {
    //     CenterCircle.src = '/purpleCircle.png'
    //     setCenterCircleToggled(true)
    //     CenterCircle.style.zIndex = '999';
    //   }
    //   else {
    //     if (CenterCircle) CenterCircle.src = '/whiteCircle.png'
    //     setCenterCircleToggled(false)
    //     CenterCircle.style.zIndex = '0';
    //   }
    // }

    const CC = (parentID: any, elementID: any, stateSetter: any, stateVal: any): any => {
        console.log(`topicsSelected`);
        console.log(topicsSelected);
        if (topicsSelected.filter((t) => t.topic === textFinder(parentID)).length > 0) {
            removeTopic(textFinder(parentID));
        } else {
            pushTopic(textFinder(parentID));
        }
        const CircleSelected = document.getElementById(elementID) as HTMLImageElement;
        if (CircleSelected && !stateVal) {
            setCenterCircle('Go 🚀');
            CircleSelected.src = '/purpleStrokedCircle.png';
            stateSetter(true);
            CircleSelected.style.zIndex = '999';
        } else {
            if (CircleSelected) {
                CircleSelected.src = '/whiteCircle.png';
                setCenterCircle('Topics');
            }
            stateSetter(false);
            CircleSelected.style.zIndex = '0';
        }
    };

    const validationFn = (topicName) => {
        // ANCHOR
        topicsSelected.forEach((topic) => {
            if (topicName === topic.name) {
                return false;
            }
        });
        console.log(`naa`);
    };

    // ANCHOR here a util Fn
    const textFinder = (ElemID) => {
        let Text = document.getElementById(ElemID)?.innerText;
        return Text;
    };

    const CircleClicked = (elementID: any, stateSetter: any, stateVal: any): any => {
        // textFinder();

        if (stateSetter === setCenterTopTopCircleToggled) {
            if (topics) {
                let topicName = 'Tech';
                pushTopic({ name: topicName });
                // console.log(validationFn(topicName));
                if (topicsEnum.includes(topicName) && !topicsSelected.includes(topicName)) {
                    pushTopic({ name: topicName });
                }
            }
            if (subTopics) {
                // ANCHOR how do you overcome the 10000 line file problem?  Also in the context of repetitive re-renders?
                // Import the function that you can port state into?
            }
            if (subSubTopics) {
            }
        }
        const CircleSelected = document.getElementById(elementID) as HTMLImageElement;

        if (CircleSelected && !stateVal) {
            setCenterCircle('Go 🚀');
            CircleSelected.src = '/purpleStrokedCircle.png';
            stateSetter(true);
            CircleSelected.style.zIndex = '999';
        } else {
            if (CircleSelected) {
                CircleSelected.src = '/whiteCircle.png';
                setCenterCircle('Topics');
            }
            stateSetter(false);
            CircleSelected.style.zIndex = '0';
        }
    };

    // const MenuHeirachyArrowLeftClk = () => {
    //     // if (topics) { setTopics(false); setSubTopics(true); setSubSubTopics(false); }
    //     if (subTopics) {
    //         setTopics(true);
    //         setSubTopics(false);
    //         setSubSubTopics(false);
    //     }
    //     if (subSubTopics) {
    //         setTopics(false);
    //         setSubTopics(true);
    //         setSubSubTopics(false);
    //     }
    // };

    const MenuOverFlowUpClk = () => {
        // if (topics) { setTopics(false); setSubTopics(true); setSubSubTopics(false); }
        if (subTopics) {
            setTopics(true);
            setSubTopics(false);
            setSubSubTopics(false);
        }
        if (subSubTopics) {
            setTopics(false);
            setSubTopics(true);
            setSubSubTopics(false);
        }
    };

    useEffect(() => {}, []);

    const HistoryClk = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Over Flow Up';
        }
    };

    const MenuOverFlowDownClk = () => {
        if (topics) {
            setTopics(false);
            setSubTopics(true);
            setSubSubTopics(false);
        }
        if (subTopics) {
            setTopics(false);
            setSubTopics(false);
            setSubSubTopics(true);
        }
    };

    const MenuHeirachyArrowRightClk = () => {
        if (topics) {
            setTopics(false);
            setSubTopics(true);
            setSubSubTopics(false);
        }
        if (subTopics) {
            setTopics(false);
            setSubTopics(false);
            setSubSubTopics(true);
        }
        if (subSubTopics) {
            setTopics(true);
            setSubTopics(false);
            setSubSubTopics(false);
        }
    };

    const MenuOverFlowUpME = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Over Flow Up';
        }
    };

    const MenuOverFlowDownME = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Over Flow Down';
        }
    };

    const HistoryME = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'History';
        }
    };

    const MenuHeirachyArrowLeftME = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Heirarchy Arrow';
        }
    };

    const MenuHeirachyArrowRightME = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = 'Menu Heirarchy Arrow';
        }
    };

    const MenuOverFlowUpMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    const MenuOverFlowDownMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    const HistoryMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    const MenuHeirachyArrowLeftMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    const MenuHeirachyArrowRightMO = () => {
        const DockTextEl = document.getElementById('DockText');
        if (DockTextEl) {
            DockTextEl.innerText = '';
        }
    };

    return (
        <PanelParent>
            <PanelWrapper>
                <FireNetLogo id='FireNetLogo' src='/OfficialLogo.png'></FireNetLogo>
                <FruitCake id='FruitCake'>
                    <CircZero id='CircZero'>
                        {topics
                            ? centerCircle
                            : subTopics
                            ? 'Category'
                            : subSubTopics
                            ? 'Weight '
                            : ''}
                        <CenterCircle
                            onClick={() =>
                                CC(
                                    'CircZero',
                                    'CenterCircle',
                                    setCenterCircleToggled,
                                    centerCircleToggled,
                                )
                            }
                            id='CenterCircle'
                            src='/whiteCircle.png'></CenterCircle>
                    </CircZero>
                    <CircOne id='CircOne'>
                        {topics
                            ? 'Religion'
                            : subTopics
                            ? 'Important'
                            : subSubTopics
                            ? '64-70'
                            : ''}
                        <CenterTopCircle
                            onClick={() =>
                                CC(
                                    'CircOne',
                                    'CenterTopCircle',
                                    setCenterTopCircleToggled,
                                    centerTopCircleToggled,
                                )
                            }
                            id='CenterTopCircle'
                            src='/whiteCircle.png'></CenterTopCircle>
                    </CircOne>
                    <CenterTopTopCircleCont>
                        {topics ? 'Tech' : subTopics ? 'Note' : subSubTopics ? '71-77' : ''}
                        <CenterTopTopCircle
                            onClick={() =>
                                CircleClicked(
                                    'CenterTopTopCircle',
                                    setCenterTopTopCircleToggled,
                                    centerTopTopCircleToggled,
                                )
                            }
                            id='CenterTopTopCircle'
                            src='/whiteCircle.png'></CenterTopTopCircle>
                    </CenterTopTopCircleCont>
                    <UpperRightCircleCont>
                        {topics ? 'News' : subTopics ? 'Key' : subSubTopics ? '0-7' : ''}
                        <UpperRightCircle
                            onClick={() =>
                                CircleClicked(
                                    'UpperRightCircle',
                                    setUpperRightCircleToggled,
                                    upperRightCircleToggled,
                                )
                            }
                            id='UpperRightCircle'
                            src='/whiteCircle.png'></UpperRightCircle>
                    </UpperRightCircleCont>
                    <UpperRightRightCircleCont>
                        {topics ? 'Business' : subTopics ? 'Date' : subSubTopics ? '8-14' : ''}
                        <UpperRightRightCircle
                            onClick={() =>
                                CircleClicked(
                                    'UpperRightRightCircle',
                                    setUpperRightRightCircleToggled,
                                    upperRightRightCircleToggled,
                                )
                            }
                            id='UpperRightRightCircle'
                            src='/whiteCircle.png'></UpperRightRightCircle>
                    </UpperRightRightCircleCont>
                    <UpperLeftCircleCont>
                        {topics
                            ? 'Software'
                            : subTopics
                            ? 'Interesting'
                            : subSubTopics
                            ? '15-21'
                            : ''}
                        <UpperLeftCircle
                            onClick={() =>
                                CircleClicked(
                                    'UpperLeftCircle',
                                    setUpperLeftCircleToggled,
                                    upperLeftCircleToggled,
                                )
                            }
                            id='UpperLeftCircle'
                            src='/whiteCircle.png'></UpperLeftCircle>
                    </UpperLeftCircleCont>
                    <UpperLeftLeftCircleCont>
                        {topics ? 'Fitness' : subTopics ? 'Helpful' : subSubTopics ? '22-28' : ''}
                        <UpperLeftLeftCircle
                            onClick={() =>
                                CircleClicked(
                                    'UpperLeftLeftCircle',
                                    setUpperLeftLeftCircleToggled,
                                    upperLeftLeftCircleToggled,
                                )
                            }
                            id='UpperLeftLeftCircle'
                            src='/whiteCircle.png'></UpperLeftLeftCircle>
                    </UpperLeftLeftCircleCont>
                    <BottomRightRightCircleCont>
                        {topics ? 'Science' : subTopics ? 'Applicable' : subSubTopics ? '100' : ''}
                        <BottomRightRightCircle
                            onClick={() =>
                                CircleClicked(
                                    'BottomRightRightCircle',
                                    setBottomRightRightCircleToggled,
                                    bottomRightRightCircleToggled,
                                )
                            }
                            id='BottomRightRightCircle'
                            src='/whiteCircle.png'></BottomRightRightCircle>
                    </BottomRightRightCircleCont>
                    <BottomRightCircleCont>
                        {topics ? 'Nature' : subTopics ? 'Career' : subSubTopics ? '29-35' : ''}
                        <BottomRightCircle
                            onClick={() =>
                                CircleClicked(
                                    'BottomRightCircle',
                                    setBottomRightCircleToggled,
                                    bottomRightCircleToggled,
                                )
                            }
                            id='BottomRightCircle'
                            src='/whiteCircle.png'></BottomRightCircle>
                    </BottomRightCircleCont>
                    <BottomLeftCircleCont>
                        {topics ? 'Health' : subTopics ? 'Knowledge' : subSubTopics ? '36-42' : ''}
                        <BottomLeftCircle
                            onClick={() =>
                                CircleClicked(
                                    'BottomLeftCircle',
                                    setBottomLeftCircleToggled,
                                    bottomLeftCircleToggled,
                                )
                            }
                            id='BottomLeftCircle'
                            src='/whiteCircle.png'></BottomLeftCircle>
                    </BottomLeftCircleCont>
                    <Circ11 id='Circ11'>
                        {topics ? 'Fashion' : subTopics ? 'Question' : subSubTopics ? '43-49' : ''}
                        <BottomLeftLeftCircle
                            onClick={() =>
                                CircleClicked(
                                    'BottomLeftLeftCircle',
                                    setBottomLeftLeftCircleToggled,
                                    bottomLeftLeftCircleToggled,
                                )
                            }
                            id='BottomLeftLeftCircle'
                            src='/whiteCircle.png'></BottomLeftLeftCircle>
                    </Circ11>
                    <CenterBottomCircleCont>
                        {topics ? 'Art' : subTopics ? 'Insightful' : subSubTopics ? '50-56' : ''}
                        <CenterBottomCircle
                            onClick={() =>
                                CircleClicked(
                                    'CenterBottomCircle',
                                    setCenterBottomCircleToggled,
                                    centerBottomCircleToggled,
                                )
                            }
                            id='CenterBottomCircle'
                            src='/whiteCircle.png'></CenterBottomCircle>
                    </CenterBottomCircleCont>
                    <CenterBottomBottomCircleCont>
                        {topics ? 'Finance' : subTopics ? 'Funny' : subSubTopics ? '57-63' : ''}
                        <CenterBottomBottomCircle
                            onClick={() =>
                                CircleClicked(
                                    'CenterBottomBottomCircle',
                                    setCenterBottomBottomCircleToggled,
                                    centerBottomBottomCircleToggled,
                                )
                            }
                            id='CenterBottomBottomCircle'
                            src='/whiteCircle.png'></CenterBottomBottomCircle>
                    </CenterBottomBottomCircleCont>
                </FruitCake>
            </PanelWrapper>
            <DockWrapper>
                <Dock>
                    <DockButtonContainer>
                        {/* <MenuHeirachyArrowLeftContainer>
                            <MenuHeirachyArrowLeft
                                onClick={() => MenuHeirachyArrowLeftClk()}
                                onMouseEnter={() => MenuHeirachyArrowLeftME()}
                                onMouseOut={() => MenuHeirachyArrowLeftMO()}
                                src='/MenuHeirarchyArrow.png'></MenuHeirachyArrowLeft>
                        </MenuHeirachyArrowLeftContainer> */}

                        <MenuOverFlowUpContainer>
                            <MenuOverFlowUp
                                onClick={() => MenuOverFlowUpClk()}
                                onMouseEnter={() => MenuOverFlowUpME()}
                                onMouseOut={() => MenuOverFlowUpMO()}
                                src='/Arrow.png'></MenuOverFlowUp>
                        </MenuOverFlowUpContainer>

                        <HistoryContainer>
                            <History
                                onClick={() => HistoryClk()}
                                onMouseEnter={() => HistoryME()}
                                onMouseOut={() => HistoryMO()}
                                src='/History.png'></History>
                        </HistoryContainer>

                        <MenuOverFlowDownContainer>
                            <MenuOverFlowDown
                                onClick={() => MenuOverFlowDownClk()}
                                onMouseEnter={() => MenuOverFlowDownME()}
                                onMouseOut={() => MenuOverFlowDownMO()}
                                src='/Arrow.png'></MenuOverFlowDown>
                        </MenuOverFlowDownContainer>

                        <MenuHeirachyArrowRightContainer>
                            <MenuHeirachyArrowRight
                                onClick={() => MenuHeirachyArrowRightClk()}
                                onMouseEnter={() => MenuHeirachyArrowRightME()}
                                onMouseOut={() => MenuHeirachyArrowRightMO()}
                                src='/MenuHeirarchyArrow.png'></MenuHeirachyArrowRight>
                        </MenuHeirachyArrowRightContainer>
                    </DockButtonContainer>
                </Dock>
                <DockTextWrapper>
                    <DockTextContainer>
                        <DockText id='DockText'></DockText>
                    </DockTextContainer>
                </DockTextWrapper>
            </DockWrapper>
        </PanelParent>
    );
};

export default Panel;

const PanelParent = styled.div`
    height: 100%;
    right: 0%;
    position: absolute;
    flex-direction: column;
    max-width: calc(333px);
    min-width: calc(333px);
`;
// PANEL
const PanelWrapper = styled.div`
    max-height: calc(333px);
    min-height: calc(333px);
    right: 0%;
    position: absolute;
    border: 4px solid white;
    flex-grow: 1;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FireNetLogo = styled.img`
    height: 88%;
    width: 88%;
    position: absolute;
    flex-grow: 1;
    display: none;
`;

const FruitCake = styled.div`
    height: 94%;
    width: 94%;
    position: absolute;
    flex-grow: 1;
    display: flex;
    border: 1px solid transparent;
    // border-radius: 50%;
    justify-content: center;
    align-items: center;
`;

const Circle = styled.img`
    height: 61.1px;
    width: 61.1px;
    position: absolute;
    display: block;
`;

const CircZero = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterCircle = styled(Circle)``;

const CircOne = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterTopCircle = styled(Circle)``;

const CenterTopTopCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterBottomBottomCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    bottom: calc(0px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterBottomCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    bottom: 61.15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UpperLeftCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 69.286px;
    top: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UpperLeftLeftCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 16.885px;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UpperRightCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 69.286px;
    top: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UpperRightRightCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 16.885px;
    top: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomRightCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 69.286px;
    bottom: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomRightRightCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    right: 16.885px;
    bottom: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BottomLeftCircleCont = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 69.286px;
    bottom: 91.5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Circ11 = styled.div`
    height: calc(305.5px / 5);
    width: calc(305.5px / 5);
    position: absolute;
    left: 16.885px;
    bottom: 61.1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterTopTopCircle = styled(Circle)``;
const CenterBottomBottomCircle = styled(Circle)``;
const CenterBottomCircle = styled(Circle)``;
const UpperLeftCircle = styled(Circle)``;
const UpperLeftLeftCircle = styled(Circle)``;
const UpperRightCircle = styled(Circle)``;
const UpperRightRightCircle = styled(Circle)``;
const BottomRightCircle = styled(Circle)``;
const BottomRightRightCircle = styled(Circle)``;
const BottomLeftCircle = styled(Circle)``;
const BottomLeftLeftCircle = styled(Circle)``;
// end

// DOCK
const DockWrapper = styled.div`
    max-height: calc(66px);
    min-height: calc(66px);
    right: 0%;
    position: absolute;
    border: 1px solid gold;
    max-width: calc(333px);
    min-width: calc(333px);
    display: flex;
    align-items: center;
    justify-content: center;
    top: 333px;
    flex-direction: column;
`;

const Dock = styled.div`
    width: 80%;
    height: 58px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const DockButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    // border: 1px solid white;
    display: flex;
    justify-content: space-evenly;
    padding-top: 3px;
`;

const MenuHeirachyArrowLeftContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuHeirachyArrowLeft = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const MenuHeirachyArrowRightContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuHeirachyArrowRight = styled.img`
    height: 100%;
    width: 100%;
    // transform: rotate(180deg);
`;

const MenuOverFlowUpContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuOverFlowUp = styled.img`
    height: 100%;
    width: 100%;
`;
const MenuOverFlowDownContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const MenuOverFlowDown = styled.img`
    height: 100%;
    width: 100%;
    transform: rotate(180deg);
`;

const HistoryContainer = styled.div`
    width: 33px;
    height: 33px;
    // border: 1px solid white;
`;

const History = styled.img`
    height: 100%;
    width: 100%;
`;

const DockTextWrapper = styled.div`
  width: 80%;
  height: 33px;
  // border: 1px solid white;
  display: flex;
  align-content; center;
`;

const DockTextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DockText = styled.div`
    color: white;
`;

// end