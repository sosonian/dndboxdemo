import React, { Component } from 'react'
import { DnDContainer,DnDLayout } from 'dnd-box'

class DemoApp extends Component {
    constructor(props){
        super(props)
        this.state={
            showContainer:null,
            toggleDnDLayer:true 
        }
    }

    showContainerClick=()=>{
        this.setState({
            showContainer:[1,2,3,4,5]
        },()=>{
            this.setState({
                showContainer:null
            })
        })
    }

    toggleDnDLayoutClick=()=>{
        this.setState({
            toggleDnDLayer:!this.state.toggleDnDLayer
        })
    }


    render() {
        let boxesSetting=[
            {
                boxID:1,
                width:200,
                height:200,
                x:0,
                y:100
            },
            {
                boxID:2,
                width:200,
                height:200,
                x:200,
                y:100
            },
            {
                boxID:3,
                width:200,
                height:200,
                x:400,
                y:100
            },
            {
                boxID:4,
                width:200,
                height:200,
                x:600,
                y:100
            },
            {
                boxID:5,
                width:200,
                height:200,
                x:600,
                y:100
            }
        ]
        return (
            <div style={{widht:'100vw',height:'100vh'}}>
                <div style={{display:'flex',width:'100%',height:'50px'}}> 
                    <button onClick={this.toggleDnDLayoutClick}>Toggle DnDLayout</button>
                    <button onClick={this.showContainerClick}>Show Default DnDContainer</button>
                </div>
                {
                    this.state.toggleDnDLayer?
                    <DnDLayout backgroundColor={"pink"} width={'100%'} height={800}  boxTabRadius={'0px 10px 0px 0px'} boxesSetting={boxesSetting} tabHeight={40} openContainer={this.state.showContainer}>
                        <DnDContainer containerTabTitle={"TabA"} containerID={1} boxID={1}>
                            <div style={{backgroundColor:'yellow',height:'100%'}}>
                                {"GrandChildrenB"}
                            </div>
                        </DnDContainer>
                        <DnDContainer containerTabTitle={"TabB"} containerID={2} boxID={1}>
                            <div style={{backgroundColor:'green',height:'100%'}}>
                                {"GrandChildrenB"}
                            </div>
                        </DnDContainer>
                        <DnDContainer containerTabTitle={"TabC"} containerID={3} boxID={2}>
                            <div style={{backgroundColor:'brown',height:'100%'}}>
                                {"GrandChildrenC"}
                            </div>
                        </DnDContainer>
                        <DnDContainer containerTabTitle={"TabD"} containerID={4} boxID={2}>
                            <div style={{backgroundColor:'gray',height:'100%'}}>
                                {"GrandChildrenD"}
                            </div>
                        </DnDContainer>
                        <DnDContainer containerTabTitle={"TabE"} containerID={5} boxID={3}>
                            <div style={{backgroundColor:'white',height:'100%'}}>
                                {"GrandChildrenE"}
                            </div>
                        </DnDContainer>               
                    </DnDLayout>
                    :null
                }
            </div>
        )
    }
}

export default DemoApp