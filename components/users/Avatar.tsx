import React from "react";
import styles from "./Avatar.module.css";
import Image from "next/image";

const IMAGE_SIZE = 48;

export function Avatar({ name, otherStyles }: { otherStyles: string; name: string }) {
    return (
        <div className={`${styles.avatar} ${otherStyles} h-8 w-8 rounded-full overflow-hidden transition-all duration-200 hover:scale-110`} data-tooltip={name}>
            <Image
                src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
                fill
                className={`${styles.avatar_picture} object-cover`}
                alt={name}
            />
        </div>
    );
}