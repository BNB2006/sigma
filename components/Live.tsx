import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursor from './cursor/LiveCursor'
import React, { useCallback, useEffect, useState } from 'react';
import { CursorMode } from '@/types/type';
import CursorChat from './cursor/CursorChat';

const Live = () =>{
    const others = useOthers();
    const [{cursor}, updateMyPresence] = useMyPresence() as any;
    const [cursorState, setCursorState] = useState({
        mode: CursorMode.Hidden,
    })

    const handlePointerMove = useCallback(( event: React.PointerEvent ) => {
        event.preventDefault();

        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor: {x, y}});
    }, [])
    
    const handlePointerleave = useCallback(( event: React.PointerEvent ) => {

        event.preventDefault();

        updateMyPresence({cursor: null, message: null});
    }, [])

    const handlePointerDown = useCallback(( event: React.PointerEvent ) => {
       
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

        updateMyPresence({cursor:{x, y}});

    }, [])

    useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
        if(e.key === '/'){
            setCursorState({
                mode: CursorMode.Chat,
                previousMessage: null,
                message: '',
            })
        }else if(e.key === 'Escape'){
            updateMyPresence({message: ''});
            setCursorState({ mode: CursorMode.Hidden })
        }
    }

    const onKeyDown = (e: KeyboardEvent ) => {
        if(e.key === '/'){
            e.preventDefault();
        }
    }

    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('keydown', onKeyDown);

    return () => {
        window.removeEventListener('keyup', onKeyUp);
        window.removeEventListener('keydown', onKeyDown);

    }

    }, [updateMyPresence])
    
    

    
    
    return(
        <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerleave}
        onPointerDown={handlePointerDown}
        className='h-[100vh] w-full flex justify-center items-center text-center'
        >
            
      <h1 className="text-2xl text-white">Liveblock Cursor Chat function</h1>

      {cursor && <CursorChat cursor={cursor}
      cursorState={cursorState}
      setCursorState={setCursorState}
      updateMyPresence={updateMyPresence} />}

            <LiveCursor others={others} />
        </div>
    )
}

export default Live;