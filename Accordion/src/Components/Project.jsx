import React, { useState } from 'react'

const Project = () => {
    const data = [
    {
      id  : '1',
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id  : '2',
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id  : '3',
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id  : '4',
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];
    const [selcted, setSelcted] = useState(null)
    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelcted(getCurrentId ===selcted?null:getCurrentId)
        

    }
  return (

    <div className='wrapper text-center cursor-pointer select-none flex flex-col items-center justify-center h-screen w-screen '>
        <button className='px-10 py-1 rounded mb-10 cursor-pointer bg-gray-700 text-white font-medium uppercase'>Enable Multiple lines</button>
        <div className="accordian w-[700px] flex flex-col items-center gap-2">
            {
                data && data.length > 0 ? 
                data.map(dataItem => <div className='item w-full px-5 py-3 '>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className="title  bg-gray-700 text-white py-5 rounded">
                        <h3 className='text-2xl font-medium '>{dataItem.question}</h3>
                        <span>+</span>

                    </div>
                    {
                        selcted===dataItem.id ? 
                        <div className='contents text-lg font-normal  '>{dataItem.answer}</div>
                        : null
                    }
                </div> )
                : <div>No data found !!!</div>
            }
        </div>
      
    </div>
  )
}

export default Project
