import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import CircleClicked from './3_Utils/CircleClicked'

const PanelParent = styled.div`
  height: 100%;
  right: 0%;
  position: absolute;
  // border: 3px solid brown;
  flex-grow: 1;
  max-width: calc(333px);
  min-width: calc(333px);
`

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
`

const FireNetLogo = styled.img`
  height: 88%;
  width: 88%;
  position: absolute;
  flex-grow: 1;
  display: none;
`

const FruitCake = styled.div`
  height: 94%;
  width: 94%;
  position: absolute;
  flex-grow: 1;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
`

const Circle = styled.img`
  height: 61.1px;
  width: 61.1px;
  position: absolute;
  display: block;
`

const CenterCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterCircle = styled(Circle)`
`

const CenterTopCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  top: 61.1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterTopCircle = styled(Circle)`
`

const CenterTopTopCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterBottomBottomCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  bottom: calc(0px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const CenterBottomCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  bottom: 61.15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLeftCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  left: 69.286px;
  top: 91.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperLeftLeftCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  left: 16.885px;
  top: 61.1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperRightCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  right: 69.286px;
  top: 91.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UpperRightRightCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  right: 16.885px;
  top: 61.1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomRightCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  right: 69.286px;
  bottom: 91.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomRightRightCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  right: 16.885px;
  bottom: 61.1px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomLeftCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  left: 69.286px;
  bottom: 91.5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BottomLeftLeftCircleCont = styled.div`
  height: calc(305.5px / 5);
  width: calc(305.5px / 5);;
  position: absolute;
  left: 16.885px;
  bottom: 61.1px;
  display: flex;
  justify-content: center;
  align-items: center;
`


const CenterTopTopCircle = styled(Circle)`
`
const CenterBottomBottomCircle = styled(Circle)`
`
const CenterBottomCircle = styled(Circle)`
`
const UpperLeftCircle = styled(Circle)`
`
const UpperLeftLeftCircle = styled(Circle)`
`
const UpperRightCircle = styled(Circle)`
`
const UpperRightRightCircle = styled(Circle)`
`
const BottomRightCircle = styled(Circle)`
`
const BottomRightRightCircle = styled(Circle)`
`
const BottomLeftCircle = styled(Circle)`
`
const BottomLeftLeftCircle = styled(Circle)`
`

// const Fruit = styled.img`
//   height: 94%;
//   width: 94%;
//   position: absolute;
//   flex-grow: 1;
//   display: block;
// `

const Panel = () => {
  const [centerCircleToggled, setCenterCircleToggled] = useState(false)
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

  const CircleClicked = (elementID: any, stateSetter: any, stateVal: any): any => {
    const CircleSelected = document.getElementById(elementID) as HTMLImageElement;

    if (CircleSelected && !stateVal) {
      CircleSelected.src = '/purpleCircle.png'
      stateSetter(true)
      CircleSelected.style.zIndex = '999';
    }
    else {
      if (CircleSelected) CircleSelected.src = '/whiteCircle.png'
      stateSetter(false)

      CircleSelected.style.zIndex = '0';
    }
  }

  // CircleClicked('CenterCircle', setCenterCircleToggled, centerCircleToggled)

  return (<PanelParent>
    <PanelWrapper>
      <FireNetLogo id='FireNetLogo' src="/OfficialLogo.png"></FireNetLogo>
      {/* 
      <FruitCake id='FruitCake' >
        <CenterCircleCont>Topics<CenterCircle onClick={() => CenterCircleClick()} id='CenterCircle' src="/whiteCircle.png"></CenterCircle></CenterCircleCont>
        <CenterTopCircleCont>News<CenterTopCircle id='CenterTopCircle' src="/whiteCircle.png"></CenterTopCircle></CenterTopCircleCont>
        <CenterTopTopCircleCont>Politics<CenterTopTopCircle id='CenterTopTopCircle' src="/whiteCircle.png"></CenterTopTopCircle></CenterTopTopCircleCont>
        <UpperRightCircleCont>Religion<UpperRightCircle id='UpperRightCircle' src="/whiteCircle.png"></UpperRightCircle></UpperRightCircleCont>
        <UpperRightRightCircleCont>Social<UpperRightRightCircle id='UpperRightRightCircle' src="/whiteCircle.png"></UpperRightRightCircle></UpperRightRightCircleCont>
        <UpperLeftCircleCont>Sports<UpperLeftCircle id='UpperLeftCircle' src="/whiteCircle.png"></UpperLeftCircle></UpperLeftCircleCont>
        <UpperLeftLeftCircleCont><UpperLeftLeftCircle id='UpperLeftLeftCircle' src="/whiteCircle.png"></UpperLeftLeftCircle></UpperLeftLeftCircleCont>
        <UpperRightRightCircleCont><UpperRightRightCircle id='UpperRightRightCircle' src="/whiteCircle.png"></UpperRightRightCircle></UpperRightRightCircleCont>
        <BottomRightCircleCont><BottomRightCircle id='BottomRightCircle' src="/whiteCircle.png"></BottomRightCircle></BottomRightCircleCont>
        <BottomRightRightCircleCont><BottomRightRightCircle id='BottomRightRightCircle' src="/whiteCircle.png"></BottomRightRightCircle></BottomRightRightCircleCont>
        <BottomRightCircleCont><BottomRightCircle id='BottomRightCircle' src="/whiteCircle.png"></BottomRightCircle></BottomRightCircleCont>
        <BottomLeftCircleCont><BottomLeftCircle id='BottomLeftCircle' src="/whiteCircle.png"></BottomLeftCircle></BottomLeftCircleCont>
        <BottomLeftLeftCircleCont><BottomLeftLeftCircle id='BottomLeftLeftCircle' src="/whiteCircle.png"></BottomLeftLeftCircle></BottomLeftLeftCircleCont>
        <UpperRightRightCircleCont><UpperRightRightCircle id='UpperRightRightCircle' src="/whiteCircle.png"></UpperRightRightCircle></UpperRightRightCircleCont>
        <CenterBottomBottomCircleCont><CenterBottomBottomCircle id='CenterBottomBottomCircle' src="/whiteCircle.png"></CenterBottomBottomCircle></CenterBottomBottomCircleCont>
        <CenterBottomCircleCont><CenterBottomCircle id='CenterBottomCircle' src="/whiteCircle.png"></CenterBottomCircle></CenterBottomCircleCont>
        <CenterBottomBottomCircleCont><CenterBottomBottomCircle id='CenterBottomBottomCircle' src="/whiteCircle.png"></CenterBottomBottomCircle></CenterBottomBottomCircleCont>
      </FruitCake> */}

      <FruitCake id='FruitCake' >
        <CenterCircleCont>Topics<CenterCircle
          onClick={() => CircleClicked('CenterCircle', setCenterCircleToggled, centerCircleToggled)} id='CenterCircle' src="/whiteCircle.png"></CenterCircle></CenterCircleCont>

        <CenterTopCircleCont><CenterTopCircle id='CenterTopCircle' src="/whiteCircle.png"></CenterTopCircle></CenterTopCircleCont>
        <CenterTopTopCircleCont><CenterTopTopCircle id='CenterTopTopCircle' src="/whiteCircle.png"></CenterTopTopCircle></CenterTopTopCircleCont>
        <UpperRightCircleCont><UpperRightCircle id='UpperRightCircle' src="/whiteCircle.png"></UpperRightCircle></UpperRightCircleCont>
        <UpperRightRightCircleCont><UpperRightRightCircle id='UpperRightRightCircle' src="/whiteCircle.png"></UpperRightRightCircle></UpperRightRightCircleCont>
        <UpperLeftCircleCont><UpperLeftCircle id='UpperLeftCircle' src="/whiteCircle.png"></UpperLeftCircle></UpperLeftCircleCont>
        <UpperLeftLeftCircleCont><UpperLeftLeftCircle id='UpperLeftLeftCircle' src="/whiteCircle.png"></UpperLeftLeftCircle></UpperLeftLeftCircleCont>
        <BottomRightRightCircleCont><BottomRightRightCircle id='BottomRightRightCircle' src="/whiteCircle.png"></BottomRightRightCircle></BottomRightRightCircleCont>
        <BottomRightCircleCont><BottomRightCircle id='BottomRightCircle' src="/whiteCircle.png"></BottomRightCircle></BottomRightCircleCont>
        <BottomLeftCircleCont><BottomLeftCircle id='BottomLeftCircle' src="/whiteCircle.png"></BottomLeftCircle></BottomLeftCircleCont>
        <BottomLeftLeftCircleCont><BottomLeftLeftCircle id='BottomLeftLeftCircle' src="/whiteCircle.png"></BottomLeftLeftCircle></BottomLeftLeftCircleCont>
        <CenterBottomCircleCont><CenterBottomCircle id='CenterBottomCircle' src="/whiteCircle.png"></CenterBottomCircle></CenterBottomCircleCont>
        <CenterBottomBottomCircleCont><CenterBottomBottomCircle id='CenterBottomBottomCircle' src="/whiteCircle.png"></CenterBottomBottomCircle></CenterBottomBottomCircleCont>
      </FruitCake>
      {/* <Fruit id='Fruit' onMouseLeave={() => mouseLeaveFruit()} src="/Fruit.png"></Fruit> */}
    </PanelWrapper>
  </PanelParent>
  )
}

export default Panel
