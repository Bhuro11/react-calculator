import React from "react";

function Calculator(){
    return(
        <>
            <div className="calculator h-screen m-auto">
                <div className="calculator-back h-screen w-[1000px] m-auto bg-slate-900 flex items-center justify-center">
                    <div className="calculator-bg h-[500px] w-[450px] bg-stone-200 rounded-3xl grid justify-center items-center">
                        <div className="calculator-input grid justify-center items-center">
                            <input type="text" className="text-right text-black border border-black rounded-md h-[50px] w-[300px] p-2 " placeholder="0"></input>
                        </div>
                        <div className="calculator-button grid justify-center items-center gap-3">
                            <div className="first flex gap-3">
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white " >%</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">CE</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">/</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">DEL</button>
                            </div>
                            <div className="secound flex gap-3">
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white" >7</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">8</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">9</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">X</button>
                            </div>
                            <div className="third flex gap-3">
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white" >4</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">5</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">6</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">-</button>
                            </div>
                            <div className="fourth flex gap-3">
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white" >1</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">2</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">3</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">+</button>
                            </div>
                            <div className="fifth flex gap-3">
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white" >00</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">0</button>
                                <button type="button" className="bg-blue-600 hover:bg-blue-900 h-[50px] w-[70px] p-2 rounded-lg text-white">.</button>
                                <button type="button" className="bg-green-600 hover:bg-green-900 h-[50px] w-[70px] p-2 rounded-lg text-white">=</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;