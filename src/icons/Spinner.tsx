import React from "react";

export const Spinner = () => (
    <div className="spinner">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 44 44"
            stroke="#4CAF50"
        >
            <g fill="none" fillRule="evenodd" strokeWidth="4">
                <circle cx="22" cy="22" r="20" strokeOpacity=".5" />
                <path d="M22 2a20 20 0 0 1 20 20">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 22 22"
                        to="360 22 22"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>
        </svg>
    </div>
)