import React from 'react';
import {CollapsibleComponent,CollapsibleHead, CollapsibleContent} from 'react-collapsible-component'

const CourseListItem = (props) => {
  return (
    <div>
      <CollapsibleComponent >
        <CollapsibleHead className="bg-light text-primary">{props.course.disciplina}</CollapsibleHead>
              <CollapsibleContent className="border border-primary">
                <br />
                  <p> Semestre: {props.course.semestre}  &nbsp;&nbsp;&nbsp;&nbsp;
                      Créditos: {props.course.creditos}&nbsp;&nbsp;&nbsp;
                      Código da disciplina: {props.course.codigo_disciplina} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Tipo: {props.course.tipo}
                  </p>
        </CollapsibleContent>
      </CollapsibleComponent>

    </div>
  );
}

export default CourseListItem;
