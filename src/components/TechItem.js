 import React from 'react';
 import PropTypes from 'prop-types';

 function TechItem({ tech, onDelete }) {
     return (
        <li>
            {tech}
            <button onClick={onDelete } type="button">Remover</button>
        </li>
     );
 }
//Default Props
 TechItem.defaultProps = {
    tech: 'Oculto',
 };
//<TechItem /> isso dentro da ul de TechList

//propTypes
TechItem.PropTypes = {
    tech: PropTypes.string , 
    onDelete: PropTypes.func.isRequired,
};
 export default TechItem;