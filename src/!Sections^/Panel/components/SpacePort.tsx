import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { supabase } from '../../../../client.js';
import { GetServerSideProps } from 'next';
import { text } from 'stream/consumers';

const SpacePort = ({}) => {
    return (
        <SpacePortWrapper>
            <div className='container'>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
                <div className='row'>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                    <div className='hexagon'></div>
                </div>
            </div>
        </SpacePortWrapper>
    );
};

export default SpacePort;

const SpacePortWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: black;
`;