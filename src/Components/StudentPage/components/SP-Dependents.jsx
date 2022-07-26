import React, { useState, useEffect } from "react";

export default function SPDependents({ student }) {
   const [dependents, setDependents] = useState([]);
   useEffect(() => {
      getDependents();
   }, [student]);

   const getDependents = () => {
      fetch(`https://hacking-transition.herokuapp.com/api/dependents/sponsor/${student.user_id}`)
         .then((res) => res.json())
         .then((deps) => {
            setDependents(deps);
         });
   };

   if (student.has_dependents) {
      return dependents.map((dep) => {
         return (
            <div className="Dependent--Card">
               <div>{dep.relation}</div>
               <div id="Dependent--Age">{dep.age}</div>
            </div>
         );
      });
   }
}
