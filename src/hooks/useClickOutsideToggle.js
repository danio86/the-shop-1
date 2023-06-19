import React, {useEffect, useRef, useState} from "react";

const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
//   const { expanded, setExpanded, ref } = useClickOutsideToggle();
//   hat der user auf user auf den burger geklickt oder nicht
  const ref = useRef(null);
//   nur ein Referenzwert

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)){
            setExpanded(false);
            // wenn es ref.curr gibt (not null) und wenn irgendwo außer
            // auf den ref Button geklickt wurde, dann false > drop down wird 
            //geschlossen  
        }
    }

    document.addEventListener('mouseup', handleClickOutside)
    // wenn mouseup (js event) ausgeführt wird, wird handleClick ausgeführt
    return () => {
        document.removeEventListener('mouseup', handleClickOutside)
        // muss im Anschluss removed werden
    }
  }, [ref])
  return (
    {expanded, setExpanded, ref}
  )
}

export default useClickOutsideToggle