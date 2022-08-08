import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isAddMode,setIsAddMode] = useState(false)
  const [courseGoal,setIsCourseGoal] = useState([])

  const addGoalHandler=(goalTitle)=>{
    setIsCourseGoal(prevGoal=>[...prevGoal,{id:Math.random().toString(),value:goalTitle}])
    setIsAddMode(false)
  }

  const cancelGoalHandler=()=>{
    setIsAddMode(false)
  }

const removeGoalHandler=(goalId)=>{
  const newgoalArray = courseGoal.filter(goal=>goal.id!==goalId)
  setIsCourseGoal(newgoalArray)
}

  return (
    <View style={styles.screen}>
      <Button 
      title='Add Goal'
      onPress={()=>setIsAddMode(true)}
      />
      <GoalInput 
      visible={isAddMode}
      onCancel={cancelGoalHandler}
      onAddGoal={addGoalHandler}
      />
      <FlatList
      data={courseGoal}
      renderItem={(itemData)=> <GoalItem title={itemData.item.value} id={itemData.item.id} onDelete={removeGoalHandler}/>}
      keyExtractor={itemData => itemData.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  }
});
