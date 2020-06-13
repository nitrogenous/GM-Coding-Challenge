import React, { useContext } from 'react';
import '../../Styles/Components/Table/RewardItem.css';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';


const RewardItem = (props) => {
	var { onDragStart } = useContext(DragAndDropContext);

	return (
		<div 
			className='rewardItemWrapper' 
			draggable="true" 
			onDragStart={() => {
				onDragStart(props.name, props.index, props.draggedFrom || -1)
			}}
		>
			<span className='rewardItemTitle'>
				{ props.name }
			</span>
			{ props.closeButton && <span class='rewardItemCloseButton' onClick={() => {console.log(1)}}> X </span>}
		</div>
	);
};

export default RewardItem;