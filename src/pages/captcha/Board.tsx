import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState, useEffect, useRef } from "react";

const Board: React.FC = () => {
    const [icebergs, setIcebergs] = useState<{ x: number; y: number }[]>([]);
    const [visibleCount, setVisibleCount] = useState(0);
    const [progressValue, setProgressValue] = useState(0);

    const [position, setPosition] = useState({ x: 220, y: 350 });
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        const step = 10;
        const stepHorizontal = 5;
        switch (e.key) {

            case "ArrowRight":
                if (position.x > 560) {
                    return;
                }
                setPosition((prev) => ({ ...prev, x: prev.x + step, y: prev.y - stepHorizontal }));
                break;
            case "ArrowLeft":
                if (position.x < 220) {
                    return;
                }
                setPosition((prev) => ({ ...prev, x: prev.x - step, y: prev.y + stepHorizontal }));
                break;
            default:
                break;
        }
    };

    const generateIcebergs = () => {
        const positions = [];
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * 20;
            const y = Math.random() * 50;
            positions.push({ x, y });
        }
        return positions;
    };

    useEffect(() => {
        const generatedIcebergs = generateIcebergs();
        setIcebergs(generatedIcebergs);

        const interval = setInterval(() => {
            setVisibleCount((prevCount) => {
                if (prevCount < generatedIcebergs.length) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setIcebergs((prevIcebergs) =>
                prevIcebergs.map((iceberg, index) => {
                    if (index < visibleCount && iceberg.x < 50) {
                        return { ...iceberg, x: iceberg.x + 0.2, y: iceberg.y + 0.2 };
                    }
                    return iceberg;
                })
            );
        }, 100);

        return () => clearInterval(moveInterval);
    }, [visibleCount]);

    const image1Ref = useRef<HTMLImageElement>(null);
    const image2Refs = useRef<Map<number, HTMLImageElement>>(new Map());
    const [isColliding, setIsColliding] = useState(false);

    useEffect(() => {
        if (image1Ref.current) {
            image1Ref.current.focus();
        }
    }, []);

    useEffect(() => {
        const checkCollision = () => {
            if (image1Ref.current) {
                console.log("Checking collision");
                const rect1 = image1Ref.current.getBoundingClientRect();
                let collides = false;

                image2Refs.current.forEach((element) => {
                    if (element) {
                        const rect2 = element.getBoundingClientRect();
                        if (
                            rect1.left < rect2.right &&
                            rect1.right > rect2.left &&
                            rect1.top < rect2.bottom &&
                            rect1.bottom > rect2.top
                        ) {
                            collides = true;
                            console.log("Collision detected!");
                        }
                    }
                });

                setIsColliding(collides);
            }
        };

        window.addEventListener("keydown", checkCollision);

        return () => {
            window.removeEventListener("keydown", checkCollision);
        };
    }, []);

    const setRef = (id: number, element: HTMLImageElement | null) => {
        if (element) {
            image2Refs.current.set(id, element);
        } else {
            image2Refs.current.delete(id);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (progressValue >= 100) {
                clearInterval(interval);
                alert("You have successfully completed the captcha!");
                window.location.href = "/";
                return;
            }
            setProgressValue((prevProgress) => {
                if (isColliding) {
                    return Math.max(prevProgress - -10, 0);
                } else {
                    return Math.min(prevProgress + 10, 100);
                }
            });
        }, 2000);

        const timeout = setTimeout(() => {
            clearInterval(interval);
        }, 180000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isColliding]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
            <div className="mb-4">
                <p className="text-lg font-semibold">Progress:</p>
                <ProgressBar completed={progressValue} width="50vw" />
            </div>
            <div className="mt-4 text-center bg-white p-4 rounded shadow-md">
                <p className="text-lg font-semibold text-blue-700">Utilisez la touche flèche gauche pour reculer et la touche flèche droite pour avancer.</p>
            </div>
            <div className="relative w-1/2 h-screen bg-cover" style={{ backgroundImage: "url('/images/captcha/eau.png')" }}>
                <img
                    ref={image1Ref}
                    src="/images/captcha/boat.png"
                    alt="to move"
                    className="absolute w-1/6 h-1/6 outline-none"
                    style={{
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        transition: "left 0.1s, top 0.1s",
                    }}
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                />
                <div className="relative w-full h-full">
                    {icebergs.slice(0, visibleCount).map((iceberg, index) => (
                        <img
                            ref={(el) => setRef(index, el)}
                            key={index}
                            className="absolute w-20 h-20 transition-all"
                            src="/images/captcha/iceberg.png"
                            alt="iceberg"
                            style={{
                                left: `${iceberg.x}vw`,
                                top: `${iceberg.y}vh`,
                            }}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Board;
