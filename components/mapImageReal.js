import Image from "next/image";

import mypic from "../src/pages/logos/mypic.png";
export default function mapImageReal(props) {
    return (
        <div className={styles.card}>
            <Image
                src={mypic}

            />
        </div>
    );
}
