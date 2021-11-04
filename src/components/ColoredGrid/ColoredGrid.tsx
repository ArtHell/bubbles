
import { css } from '@emotion/react';
import { Grid, Paper, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { getPaletteColor, getRandomColor, getRandomNumber } from '../../helpers/colorHelper';
import bubble from '../../sounds/bubble.mp3';
import background from '../../images/background.jfif';
import piano from '../../sounds/piano.mp3';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    height: '50px',
    borderRadius: '50%',
    opacity: '80%',
    boxShadow: '5px 5px  rgba(0,0,0,0.1 )'
}));

const Background = styled(Paper)(({ theme }) => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}));

const ColorGrid = styled(Grid)(({ theme }) => ({
    width: '794px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer'
}));

interface GridItem {
    pos: number;
    color: string;
}

const ColoredItem = (props: { mouseDown: boolean, playBubble: any }) => {
    
    const [color, setColor] = useState(`#${getPaletteColor()}`);
    const [otherColor, setOtherColor] = useState(`#${getPaletteColor()}`);
    const changeColor = () => {
        if (props.mouseDown) {
            props.playBubble({
                playbackRate:  1 - 0.4 + getRandomNumber()*0.1
            });
            setColor(`#${getPaletteColor()}`);
            setOtherColor(`#${getPaletteColor()}`);
        }
    }



    return <Item style={{ background: `radial-gradient(circle at 50px 50px, ${color}, ${otherColor})`, border: `1px solid ${otherColor}` }} onMouseEnter={changeColor}></Item>
}

const ColoredGrid = () => {
    const [mouseDown, setMouseDown] = useState(false);
    const colors = Array.from(Array(144).keys());
    const [playMusic] = useSound(piano, {
        loop: true,
        autoplay: true,
        volume: 0.7,
    });

    const [playBubble] = useSound(bubble, { volume: 0.3 });

    return <Background onMouseDown={(event) => { event.preventDefault(); setMouseDown(true) }} onMouseUp={(event) => { event.preventDefault(); setMouseDown(false) }}>
        <ColorGrid container spacing={2} >
            {colors.map(x =>
                <Grid item xs={1} style={{ padding: 0 }}>
                    <ColoredItem mouseDown={mouseDown} playBubble={playBubble} />
                </Grid>)
            }
        </ColorGrid>
    </Background>
}

export default ColoredGrid;