import React from 'react'
import { Icon,Divider, Avatar, Card, Col, Tag} from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
import styles from './EmployeeCompanyTraining.base.less'
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderAvatarCell=defaultRenderAvatarCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell



const menuData = {menuName: window.trans('employee_company_training'), menuFor: "employeeCompanyTraining",
  		subItems: [
  
  		],
}


const settingMenuData = {menuName: window.trans('employee_company_training'), menuFor: "employeeCompanyTraining",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('employee_company_training.id'),
  employee: window.trans('employee_company_training.employee'),
  training: window.trans('employee_company_training.training'),
  scoring: window.trans('employee_company_training.scoring'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'employeeCompanyTraining') , sorter: true },
  { title: fieldLabels.employee, dataIndex: 'employee', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.training, dataIndex: 'training', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.scoring, dataIndex: 'scoring', render: (text, record) => renderReferenceCell(text, record), sorter:true},

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)
<<<<<<< HEAD
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
let counter = 0;
const genColor=()=>{
	counter++;
	return colorList[counter%colorList.length];
}
const followColor=()=>{
	return 'green';
	// return colorList[counter%colorList.length];
}
const leftChars=(value, left)=>{
	const chars = left || 4
	if(!value){
		return "N/A"
	}
	return value.substring(0,chars);
}
const renderItemOfList=(employeeCompanyTraining, targetComponent, columCount)=>{
  const displayColumnsCount = columCount || 4
=======

const renderItemOfList=(employeeCompanyTraining, targetComponent, columCount)=>{
  const displayColumnsCount = columCount || 2
>>>>>>> b1266426b024c6919f91c6b5be4635d10d614fe9
  const userContext = null
  return (
    <Card key={employeeCompanyTraining.id} style={{marginTop:"10px"}}>
		
	<Col span={4}>
		<Avatar size={90} style={{ backgroundColor: genColor(), verticalAlign: 'middle' }}>
			{leftChars(employeeCompanyTraining.displayName)}
		</Avatar>
	</Col>
	<Col span={20}>
	  
	  
	 
	
      <DescriptionList  key={employeeCompanyTraining.id} size="small" col={displayColumnsCount} >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{employeeCompanyTraining.id}</Description> 
        <Description term={fieldLabels.employee}><Tag color='blue' title={`${employeeCompanyTraining.employee.id}-${employeeCompanyTraining.employee.displayName}`}>{employeeCompanyTraining.employee==null?appLocaleName(userContext,"NotAssigned"):`${leftChars(employeeCompanyTraining.employee.displayName,15)}`}
        </Tag></Description>
        <Description term={fieldLabels.training}><Tag color='blue' title={`${employeeCompanyTraining.training.id}-${employeeCompanyTraining.training.displayName}`}>{employeeCompanyTraining.training==null?appLocaleName(userContext,"NotAssigned"):`${leftChars(employeeCompanyTraining.training.displayName,15)}`}
        </Tag></Description>
	
        
      </DescriptionList>
     </Col>
    </Card>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {employeeId, trainingId, scoringId} = formValuesToPack
	const employee = {id: employeeId, version: 2^31}
	const training = {id: trainingId, version: 2^31}
	const scoring = {id: scoringId, version: 2^31}
	const data = {employee, training, scoring}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {employee, training, scoring} = objectToUnpack
	const employeeId = employee ? employee.id : null
	const trainingId = training ? training.id : null
	const scoringId = scoring ? scoring.id : null
	const data = {employeeId, trainingId, scoringId}
	return data
}
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const EmployeeCompanyTrainingBase={menuData,settingMenuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
export default EmployeeCompanyTrainingBase

