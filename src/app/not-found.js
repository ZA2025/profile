import React from 'react';

import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
    return (
        <div>
            <div className="wrapper">
                <h1>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Image className="image404" src="/images/404.avif" alt="404 Not Found" width={300} height={300} />
                <Link className="liveLink" href="/">Home</Link>
            </div>
        </div>
    )
}