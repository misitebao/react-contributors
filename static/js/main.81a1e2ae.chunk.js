(this["webpackJsonpreact-contributors-example"]=this["webpackJsonpreact-contributors-example"]||[]).push([[0],{12:function(e,t,s){e.exports=s(27)},13:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);s(13);var r=s(0),a=s.n(r),o=s(6),n=s.n(o),l=s(11),c="styles-module_contributors__1xF5k",i="styles-module_profile__2FLLu",u="styles-module_photo__RLXPX",m="styles-module_photo-lg__3WNNQ",p="styles-module_intro__1iC6i",_="styles-module_name__2EVu_",h="styles-module_subtitle__2SMiA";const d=new l.a;class b extends a.a.Component{render(){return a.a.createElement("div",{className:i},a.a.createElement("img",{className:"".concat(u," ").concat(m),src:this.props.avatar_url}),a.a.createElement("div",{className:p},a.a.createElement("h4",{className:_},this.props.name),a.a.createElement("small",{className:h},a.a.createElement("a",{href:this.props.url},this.props.url))))}}class E extends a.a.Component{constructor(e){super(e),this.state={contributors:[]}}componentDidMount(){d.repos.listContributors({owner:this.props.owner,repo:this.props.repo}).then(e=>{this.setState({contributors:[...e.data]})},()=>{this.setState({contributors:[]})})}render(){return a.a.createElement("div",{className:c},this.state.contributors&&this.state.contributors.length?this.state.contributors.map((e,t)=>a.a.createElement(b,{key:t,avatar_url:e.avatar_url,name:e.login,url:e.html_url})):void 0)}}var v=E;s(26);var y=()=>a.a.createElement(v,{owner:"evert-arias",repo:"EasyButton"});n.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.81a1e2ae.chunk.js.map