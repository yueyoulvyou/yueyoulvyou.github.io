/*
Cache: ts_vcsc, jquery-lazy, thickbox, dt-main, dt-jscroller2, dt-main-roya-js, dt-language, dt-main-op-jquery, dt-plugins, jquery-blockui, qfe_php_js, qfe_scrollTo_js, canvas_js
*/
/* canvas_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/js/html5_canvas.js) */

FSS={FRONT:0,BACK:1,DOUBLE:2,SVGNS:"http://www.w3.org/2000/svg"},FSS.Array="function"==typeof Float32Array?Float32Array:Array,FSS.Utils={isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}},function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;e.length>i&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),r=Math.max(0,16-(i-t)),s=window.setTimeout(function(){e(i+r)},r);return t=i+r,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Math.PIM2=2*Math.PI,Math.PID2=Math.PI/2,Math.randomInRange=function(t,e){return t+(e-t)*Math.random()},Math.clamp=function(t,e,i){return t=Math.max(t,e),t=Math.min(t,i)},FSS.Vector3={create:function(t,e,i){var r=new FSS.Array(3);return this.set(r,t,e,i),r},clone:function(t){var e=this.create();return this.copy(e,t),e},set:function(t,e,i,r){return t[0]=e||0,t[1]=i||0,t[2]=r||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],this},addVectors:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],this},addScalar:function(t,e){return t[0]+=e,t[1]+=e,t[2]+=e,this},subtract:function(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],this},subtractVectors:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],this},subtractScalar:function(t,e){return t[0]-=e,t[1]-=e,t[2]-=e,this},multiply:function(t,e){return t[0]*=e[0],t[1]*=e[1],t[2]*=e[2],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,this},divide:function(t,e){return t[0]/=e[0],t[1]/=e[1],t[2]/=e[2],this},divideVectors:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],this},divideScalar:function(t,e){return 0!==e?(t[0]/=e,t[1]/=e,t[2]/=e):(t[0]=0,t[1]=0,t[2]=0),this},cross:function(t,e){var i=t[0],r=t[1],s=t[2];return t[0]=r*e[2]-s*e[1],t[1]=s*e[0]-i*e[2],t[2]=i*e[1]-r*e[0],this},crossVectors:function(t,e,i){return t[0]=e[1]*i[2]-e[2]*i[1],t[1]=e[2]*i[0]-e[0]*i[2],t[2]=e[0]*i[1]-e[1]*i[0],this},min:function(t,e){return e>t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),e>t[2]&&(t[2]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this},limit:function(t,e,i){var r=this.length(t);return null!==e&&e>r?this.setLength(t,e):null!==i&&r>i&&this.setLength(t,i),this},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},normalise:function(t){return this.divideScalar(t,this.length(t))},negate:function(t){return this.multiplyScalar(t,-1)},distanceSquared:function(t,e){var i=t[0]-e[0],r=t[1]-e[1],s=t[2]-e[2];return i*i+r*r+s*s},distance:function(t,e){return Math.sqrt(this.distanceSquared(t,e))},lengthSquared:function(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]},length:function(t){return Math.sqrt(this.lengthSquared(t))},setLength:function(t,e){var i=this.length(t);return 0!==i&&e!==i&&this.multiplyScalar(t,e/i),this}},FSS.Vector4={create:function(t,e,i){var r=new FSS.Array(4);return this.set(r,t,e,i),r},set:function(t,e,i,r,s){return t[0]=e||0,t[1]=i||0,t[2]=r||0,t[3]=s||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},setW:function(t,e){return t[3]=e||0,this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t[3]+=e[3],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,this},min:function(t,e){return e>t[0]&&(t[0]=e),e>t[1]&&(t[1]=e),e>t[2]&&(t[2]=e),e>t[3]&&(t[3]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),t[3]>e&&(t[3]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this}},FSS.Color=function(t,e){this.rgba=FSS.Vector4.create(),this.hex=t||"#000000",this.opacity=FSS.Utils.isNumber(e)?e:1,this.set(this.hex,this.opacity)},FSS.Color.prototype={set:function(t,e){t=t.replace("#","");var i=t.length/3;return this.rgba[0]=parseInt(t.substring(0*i,1*i),16)/255,this.rgba[1]=parseInt(t.substring(1*i,2*i),16)/255,this.rgba[2]=parseInt(t.substring(2*i,3*i),16)/255,this.rgba[3]=FSS.Utils.isNumber(e)?e:this.rgba[3],this},hexify:function(t){var e=Math.ceil(255*t).toString(16);return 1===e.length&&(e="0"+e),e},format:function(){var t=this.hexify(this.rgba[0]),e=this.hexify(this.rgba[1]),i=this.hexify(this.rgba[2]);return this.hex="#"+t+e+i,this.hex}},FSS.Object=function(){this.position=FSS.Vector3.create()},FSS.Object.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Light=function(t,e){FSS.Object.call(this),this.ambient=new FSS.Color(t||"#FFFFFF"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.ray=FSS.Vector3.create()},FSS.Light.prototype=Object.create(FSS.Object.prototype),FSS.Vertex=function(t,e,i){this.position=FSS.Vector3.create(t,e,i)},FSS.Vertex.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Triangle=function(t,e,i){this.a=t||new FSS.Vertex,this.b=e||new FSS.Vertex,this.c=i||new FSS.Vertex,this.vertices=[this.a,this.b,this.c],this.u=FSS.Vector3.create(),this.v=FSS.Vector3.create(),this.centroid=FSS.Vector3.create(),this.normal=FSS.Vector3.create(),this.color=new FSS.Color,this.polygon=document.createElementNS(FSS.SVGNS,"polygon"),this.polygon.setAttributeNS(null,"stroke-linejoin","round"),this.polygon.setAttributeNS(null,"stroke-miterlimit","1"),this.polygon.setAttributeNS(null,"stroke-width","1"),this.computeCentroid(),this.computeNormal()},FSS.Triangle.prototype={computeCentroid:function(){return this.centroid[0]=this.a.position[0]+this.b.position[0]+this.c.position[0],this.centroid[1]=this.a.position[1]+this.b.position[1]+this.c.position[1],this.centroid[2]=this.a.position[2]+this.b.position[2]+this.c.position[2],FSS.Vector3.divideScalar(this.centroid,3),this},computeNormal:function(){return FSS.Vector3.subtractVectors(this.u,this.b.position,this.a.position),FSS.Vector3.subtractVectors(this.v,this.c.position,this.a.position),FSS.Vector3.crossVectors(this.normal,this.u,this.v),FSS.Vector3.normalise(this.normal),this}},FSS.Geometry=function(){this.vertices=[],this.triangles=[],this.dirty=!1},FSS.Geometry.prototype={update:function(){if(this.dirty){var t,e;for(t=this.triangles.length-1;t>=0;t--)e=this.triangles[t],e.computeCentroid(),e.computeNormal();this.dirty=!1}return this}},FSS.Plane=function(t,e,i,r){FSS.Geometry.call(this),this.width=t||100,this.height=e||100,this.segments=i||4,this.slices=r||4,this.segmentWidth=this.width/this.segments,this.sliceHeight=this.height/this.slices;var s,n,o,h,a,l,u,c=[],S=this.width*-.5,f=.5*this.height;for(s=0;this.segments>=s;s++)for(c.push([]),n=0;this.slices>=n;n++)u=new FSS.Vertex(S+s*this.segmentWidth,f-n*this.sliceHeight),c[s].push(u),this.vertices.push(u);for(s=0;this.segments>s;s++)for(n=0;this.slices>n;n++)o=c[s+0][n+0],h=c[s+0][n+1],a=c[s+1][n+0],l=c[s+1][n+1],t0=new FSS.Triangle(o,h,a),t1=new FSS.Triangle(a,h,l),this.triangles.push(t0,t1)},FSS.Plane.prototype=Object.create(FSS.Geometry.prototype),FSS.Material=function(t,e){this.ambient=new FSS.Color(t||"#444444"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.slave=new FSS.Color},FSS.Mesh=function(t,e){FSS.Object.call(this),this.geometry=t||new FSS.Geometry,this.material=e||new FSS.Material,this.side=FSS.FRONT,this.visible=!0},FSS.Mesh.prototype=Object.create(FSS.Object.prototype),FSS.Mesh.prototype.update=function(t,e){var i,r,s,n,o;if(this.geometry.update(),e)for(i=this.geometry.triangles.length-1;i>=0;i--){for(r=this.geometry.triangles[i],FSS.Vector4.set(r.color.rgba),s=t.length-1;s>=0;s--)n=t[s],FSS.Vector3.subtractVectors(n.ray,n.position,r.centroid),FSS.Vector3.normalise(n.ray),o=FSS.Vector3.dot(r.normal,n.ray),this.side===FSS.FRONT?o=Math.max(o,0):this.side===FSS.BACK?o=Math.abs(Math.min(o,0)):this.side===FSS.DOUBLE&&(o=Math.max(Math.abs(o),0)),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.ambient.rgba,n.ambient.rgba),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.diffuse.rgba,n.diffuse.rgba),FSS.Vector4.multiplyScalar(this.material.slave.rgba,o),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba);FSS.Vector4.clamp(r.color.rgba,0,1)}return this},FSS.Scene=function(){this.meshes=[],this.lights=[]},FSS.Scene.prototype={add:function(t){return t instanceof FSS.Mesh&&!~this.meshes.indexOf(t)?this.meshes.push(t):t instanceof FSS.Light&&!~this.lights.indexOf(t)&&this.lights.push(t),this},remove:function(t){return t instanceof FSS.Mesh&&~this.meshes.indexOf(t)?this.meshes.splice(this.meshes.indexOf(t),1):t instanceof FSS.Light&&~this.lights.indexOf(t)&&this.lights.splice(this.lights.indexOf(t),1),this}},FSS.Renderer=function(){this.width=0,this.height=0,this.halfWidth=0,this.halfHeight=0},FSS.Renderer.prototype={setSize:function(t,e){return this.width!==t||this.height!==e?(this.width=t,this.height=e,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height,this):void 0},clear:function(){return this},render:function(){return this}},FSS.CanvasRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.context=this.element.getContext("2d"),this.setSize(this.element.width,this.element.height)},FSS.CanvasRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.CanvasRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.width=t,this.element.height=e,this.context.setTransform(1,0,0,-1,this.halfWidth,this.halfHeight),this},FSS.CanvasRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.context.clearRect(-this.halfWidth,-this.halfHeight,this.width,this.height),this},FSS.CanvasRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,s,n;for(this.clear(),this.context.lineJoin="round",this.context.lineWidth=1,e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)s=i.geometry.triangles[r],n=s.color.format(),this.context.beginPath(),this.context.moveTo(s.a.position[0],s.a.position[1]),this.context.lineTo(s.b.position[0],s.b.position[1]),this.context.lineTo(s.c.position[0],s.c.position[1]),this.context.closePath(),this.context.strokeStyle=n,this.context.fillStyle=n,this.context.stroke(),this.context.fill();return this},FSS.WebGLRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.vertices=null,this.lights=null;var t={preserveDrawingBuffer:!1,premultipliedAlpha:!0,antialias:!0,stencil:!0,alpha:!0};return this.gl=this.getContext(this.element,t),this.unsupported=!this.gl,this.unsupported?"WebGL is not supported by your browser.":(this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.DEPTH_TEST),this.setSize(this.element.width,this.element.height),void 0)},FSS.WebGLRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.WebGLRenderer.prototype.getContext=function(t,e){var i=!1;try{if(!(i=t.getContext("experimental-webgl",e)))throw"Error creating WebGL context."}catch(r){console.error(r)}return i},FSS.WebGLRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.unsupported?void 0:(this.element.width=t,this.element.height=e,this.gl.viewport(0,0,t,e),this)},FSS.WebGLRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.unsupported?void 0:(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this)},FSS.WebGLRenderer.prototype.render=function(t){if(FSS.Renderer.prototype.render.call(this,t),!this.unsupported){var e,i,r,s,n,o,h,a,l,u,c,S,f,m,g,d=!1,p=t.lights.length,F=0;if(this.clear(),this.lights!==p){if(this.lights=p,!(this.lights>0))return;this.buildProgram(p)}if(this.program){for(e=t.meshes.length-1;e>=0;e--)i=t.meshes[e],i.geometry.dirty&&(d=!0),i.update(t.lights,!1),F+=3*i.geometry.triangles.length;if(d||this.vertices!==F){this.vertices=F;for(a in this.program.attributes){for(u=this.program.attributes[a],u.data=new FSS.Array(F*u.size),f=0,e=t.meshes.length-1;e>=0;e--)for(i=t.meshes[e],r=0,s=i.geometry.triangles.length;s>r;r++)for(n=i.geometry.triangles[r],m=0,g=n.vertices.length;g>m;m++){switch(vertex=n.vertices[m],a){case"side":this.setBufferData(f,u,i.side);break;case"position":this.setBufferData(f,u,vertex.position);break;case"centroid":this.setBufferData(f,u,n.centroid);break;case"normal":this.setBufferData(f,u,n.normal);break;case"ambient":this.setBufferData(f,u,i.material.ambient.rgba);break;case"diffuse":this.setBufferData(f,u,i.material.diffuse.rgba)}f++}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,u.data,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(u.location),this.gl.vertexAttribPointer(u.location,u.size,this.gl.FLOAT,!1,0,0)}}for(this.setBufferData(0,this.program.uniforms.resolution,[this.width,this.height,this.width]),o=p-1;o>=0;o--)h=t.lights[o],this.setBufferData(o,this.program.uniforms.lightPosition,h.position),this.setBufferData(o,this.program.uniforms.lightAmbient,h.ambient.rgba),this.setBufferData(o,this.program.uniforms.lightDiffuse,h.diffuse.rgba);for(l in this.program.uniforms)switch(u=this.program.uniforms[l],S=u.location,c=u.data,u.structure){case"3f":this.gl.uniform3f(S,c[0],c[1],c[2]);break;case"3fv":this.gl.uniform3fv(S,c);break;case"4fv":this.gl.uniform4fv(S,c)}}return this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertices),this}},FSS.WebGLRenderer.prototype.setBufferData=function(t,e,i){if(FSS.Utils.isNumber(i))e.data[t*e.size]=i;else for(var r=i.length-1;r>=0;r--)e.data[t*e.size+r]=i[r]},FSS.WebGLRenderer.prototype.buildProgram=function(t){if(!this.unsupported){var e=FSS.WebGLRenderer.VS(t),i=FSS.WebGLRenderer.FS(t),r=e+i;if(!this.program||this.program.code!==r){var s=this.gl.createProgram(),n=this.buildShader(this.gl.VERTEX_SHADER,e),o=this.buildShader(this.gl.FRAGMENT_SHADER,i);if(this.gl.attachShader(s,n),this.gl.attachShader(s,o),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS)){var h=this.gl.getError(),a=this.gl.getProgramParameter(s,this.gl.VALIDATE_STATUS);return console.error("Could not initialise shader.\nVALIDATE_STATUS: "+a+"\nERROR: "+h),null}return this.gl.deleteShader(o),this.gl.deleteShader(n),s.code=r,s.attributes={side:this.buildBuffer(s,"attribute","aSide",1,"f"),position:this.buildBuffer(s,"attribute","aPosition",3,"v3"),centroid:this.buildBuffer(s,"attribute","aCentroid",3,"v3"),normal:this.buildBuffer(s,"attribute","aNormal",3,"v3"),ambient:this.buildBuffer(s,"attribute","aAmbient",4,"v4"),diffuse:this.buildBuffer(s,"attribute","aDiffuse",4,"v4")},s.uniforms={resolution:this.buildBuffer(s,"uniform","uResolution",3,"3f",1),lightPosition:this.buildBuffer(s,"uniform","uLightPosition",3,"3fv",t),lightAmbient:this.buildBuffer(s,"uniform","uLightAmbient",4,"4fv",t),lightDiffuse:this.buildBuffer(s,"uniform","uLightDiffuse",4,"4fv",t)},this.program=s,this.gl.useProgram(this.program),s}}},FSS.WebGLRenderer.prototype.buildShader=function(t,e){if(!this.unsupported){var i=this.gl.createShader(t);return this.gl.shaderSource(i,e),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error(this.gl.getShaderInfoLog(i)),null)}},FSS.WebGLRenderer.prototype.buildBuffer=function(t,e,i,r,s,n){var o={buffer:this.gl.createBuffer(),size:r,structure:s,data:null};switch(e){case"attribute":o.location=this.gl.getAttribLocation(t,i);break;case"uniform":o.location=this.gl.getUniformLocation(t,i)}return n&&(o.data=new FSS.Array(n*r)),o},FSS.WebGLRenderer.VS=function(t){var e=["precision mediump float;","#define LIGHTS "+t,"attribute float aSide;","attribute vec3 aPosition;","attribute vec3 aCentroid;","attribute vec3 aNormal;","attribute vec4 aAmbient;","attribute vec4 aDiffuse;","uniform vec3 uResolution;","uniform vec3 uLightPosition[LIGHTS];","uniform vec4 uLightAmbient[LIGHTS];","uniform vec4 uLightDiffuse[LIGHTS];","varying vec4 vColor;","void main() {","vColor = vec4(0.0);","vec3 position = aPosition / uResolution * 2.0;","for (int i = 0; i < LIGHTS; i++) {","vec3 lightPosition = uLightPosition[i];","vec4 lightAmbient = uLightAmbient[i];","vec4 lightDiffuse = uLightDiffuse[i];","vec3 ray = normalize(lightPosition - aCentroid);","float illuminance = dot(aNormal, ray);","if (aSide == 0.0) {","illuminance = max(illuminance, 0.0);","} else if (aSide == 1.0) {","illuminance = abs(min(illuminance, 0.0));","} else if (aSide == 2.0) {","illuminance = max(abs(illuminance), 0.0);","}","vColor += aAmbient * lightAmbient;","vColor += aDiffuse * lightDiffuse * illuminance;","}","vColor = clamp(vColor, 0.0, 1.0);","gl_Position = vec4(position, 1.0);","}"].join("\n");return e},FSS.WebGLRenderer.FS=function(){var t=["precision mediump float;","varying vec4 vColor;","void main() {","gl_FragColor = vColor;","}"].join("\n");return t},FSS.SVGRenderer=function(){FSS.Renderer.call(this),this.element=document.createElementNS(FSS.SVGNS,"svg"),this.element.setAttribute("xmlns",FSS.SVGNS),this.element.setAttribute("version","1.1"),this.element.style.display="block",this.setSize(300,150)},FSS.SVGRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.SVGRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.setAttribute("width",t),this.element.setAttribute("height",e),this},FSS.SVGRenderer.prototype.clear=function(){FSS.Renderer.prototype.clear.call(this);for(var t=this.element.childNodes.length-1;t>=0;t--)this.element.removeChild(this.element.childNodes[t]);return this},FSS.SVGRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,s,n,o;for(e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)s=i.geometry.triangles[r],s.polygon.parentNode!==this.element&&this.element.appendChild(s.polygon),n=this.formatPoint(s.a)+" ",n+=this.formatPoint(s.b)+" ",n+=this.formatPoint(s.c),o=this.formatStyle(s.color.format()),s.polygon.setAttributeNS(null,"points",n),s.polygon.setAttributeNS(null,"style",o);return this},FSS.SVGRenderer.prototype.formatPoint=function(t){return this.halfWidth+t.position[0]+","+(this.halfHeight-t.position[1])},FSS.SVGRenderer.prototype.formatStyle=function(t){var e="fill:"+t+";";return e+="stroke:"+t+";"};
/******************1*******************/
(function ($, window) {
	var $ = jQuery;
	$.fn.qfy_bg_canvas_1 = function() {
		var linecolor =  $(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff";
		var bgcolor =  $(this).attr("data-bgcolor")? jQuery(this).attr("data-bgcolor"):'#000000';
		var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="0.01";
		else if(speed=="3") speed="0.005";
		else if(speed=="2") speed="0.001";
		else speed="0.0001";
		var obj = jQuery(this);
		initialise(obj,speed);
		
	};
	//------------------------------
	  // Mesh Properties   0.0001     0.001      0.01
	  //------------------------------
	  var MESH = {
	   width:1.8,height:1.8,depth:10,segments:16,slices:8,xRange:.8,yRange:.1,zRange:1,ambient:"#010101",diffuse:"#ffffff",speed:0.01,opacity:.5
	  };

	  //------------------------------
	  // Light Properties
	  //------------------------------
	  var LIGHT = {
	   count:2,xyScalar:1,zOffset:100,ambient:"#ffffff",diffuse:"#2d2d2d",speed:0.001,gravity:800,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!1,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))
	  };


	  //------------------------------
	  // Render Properties
	  //------------------------------
	  var WEBGL = 'webgl';
	  var CANVAS = 'canvas';
	  var SVG = 'svg';
	  var RENDER = {
	    renderer: CANVAS
	  };

	  //------------------------------
	  // Global Properties
	  //------------------------------
	  var now, start = Date.now();
	  var center = FSS.Vector3.create();
	  var attractor = FSS.Vector3.create();

	  var renderer, scene, mesh, geometry, material;
	  var webglRenderer, canvasRenderer, svgRenderer;
	  var gui, autopilotController;

	  //------------------------------
	  // Methods
	  //------------------------------
	  function initialise(obj,speed) {
		  var container = obj[0];
		 
	    createRenderer(obj);
	    createScene();
	    createMesh();
	    createLights();
	    addEventListeners();
	    //addControls();
	    resize(container.offsetWidth, container.offsetHeight);
	    animate(speed);
	  }

	  function createRenderer(obj) {
	    //webglRenderer = new FSS.WebGLRenderer();
	    canvasRenderer = new FSS.CanvasRenderer();
	    //svgRenderer = new FSS.SVGRenderer();
	    setRenderer(RENDER.renderer,obj);
	  }

	  function setRenderer(index,obj) {
		var container = obj[0];
		 var output = obj.find(">div")[0];
		
	    //if (renderer) {
	     // output.removeChild(renderer.element);
	   // }
	    switch(index) {
	      case WEBGL:
	        renderer = webglRenderer;
	        break;
	      case CANVAS:
	        renderer = canvasRenderer;
	        break;
	      case SVG:
	        renderer = svgRenderer;
	        break;
	    }
	    renderer.setSize(container.offsetWidth, container.offsetHeight);
	    output.appendChild(renderer.element);
	  }

	  function createScene() {
	    scene = new FSS.Scene();
	  }

	  function createMesh() {
	    scene.remove(mesh);
	    renderer.clear();
	    geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
	    material = new FSS.Material(MESH.ambient, MESH.diffuse);
	    mesh = new FSS.Mesh(geometry, material);
	    scene.add(mesh);

	    // Augment vertices for animation
	    var v, vertex;
	    for (v = geometry.vertices.length - 1; v >= 0; v--) {
	      vertex = geometry.vertices[v];
	      vertex.anchor = FSS.Vector3.clone(vertex.position);
	      vertex.step = FSS.Vector3.create(
	        Math.randomInRange(0.2, 1.0),
	        Math.randomInRange(0.2, 1.0),
	        Math.randomInRange(0.2, 1.0)
	      );
	      vertex.time = Math.randomInRange(0, Math.PIM2);
	    }
	  }

	  function createLights() {
	    var l, light;
	    for (l = scene.lights.length - 1; l >= 0; l--) {
	      light = scene.lights[l];
	      scene.remove(light);
	    }
	    renderer.clear();
	    for (l = 0; l < LIGHT.count; l++) {
	      light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
	      light.ambientHex = light.ambient.format();
	      light.diffuseHex = light.diffuse.format();
	      scene.add(light);

	      // Augment light for animation
	      light.mass = Math.randomInRange(0.5, 1);
	      light.velocity = FSS.Vector3.create();
	      light.acceleration = FSS.Vector3.create();
	      light.force = FSS.Vector3.create();

	    }
	  }

	  function resize(width, height) {
	    renderer.setSize(width, height);
	    FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
	    createMesh();
	  }

	  function animate(speed) {
	    now = Date.now() - start;
	    update(speed);
	    render();
	    requestAnimationFrame(function(){animate(speed)});
	  }

	  function update(speed) {
	    var ox, oy, oz, l, light, v, vertex, offset = MESH.depth/2;

	    // Update Bounds
	    FSS.Vector3.copy(LIGHT.bounds, center);
	    FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

	    // Update Attractor
	    FSS.Vector3.setZ(attractor, LIGHT.zOffset);

	    // Overwrite the Attractor position
	    if (LIGHT.autopilot) {
	      ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
	      oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
	      FSS.Vector3.set(attractor,
	        LIGHT.bounds[0]*ox,
	        LIGHT.bounds[1]*oy,
	        LIGHT.zOffset);
	    }

	    // Animate Lights
	    for (l = scene.lights.length - 1; l >= 0; l--) {
	      light = scene.lights[l];

	      // Reset the z position of the light
	      FSS.Vector3.setZ(light.position, LIGHT.zOffset);

	      // Calculate the force Luke!
	      var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
	      var F = LIGHT.gravity * light.mass / D;
	      FSS.Vector3.subtractVectors(light.force, attractor, light.position);
	      FSS.Vector3.normalise(light.force);
	      FSS.Vector3.multiplyScalar(light.force, F);

	      // Update the light position
	      FSS.Vector3.set(light.acceleration);
	      FSS.Vector3.add(light.acceleration, light.force);
	      FSS.Vector3.add(light.velocity, light.acceleration);
	      FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
	      FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
	      FSS.Vector3.add(light.position, light.velocity);
	    }

	    // Animate Vertices
	    for (v = geometry.vertices.length - 1; v >= 0; v--) {
	      vertex = geometry.vertices[v];
	      ox = Math.sin(vertex.time + vertex.step[0] * now * speed);
	      oy = Math.cos(vertex.time + vertex.step[1] * now * speed);
	      oz = Math.sin(vertex.time + vertex.step[2] * now * speed);
	      FSS.Vector3.set(vertex.position,
	        MESH.xRange*geometry.segmentWidth*ox,
	        MESH.yRange*geometry.sliceHeight*oy,
	        MESH.zRange*offset*oz - offset);
	      FSS.Vector3.add(vertex.position, vertex.anchor);
	    }

	    // Set the Geometry to dirty
	    geometry.dirty = true;
	  }

	  function render() {
	    renderer.render(scene);

	    // Draw Lights
	    if (LIGHT.draw) {
	      var l, lx, ly, light;
	      for (l = scene.lights.length - 1; l >= 0; l--) {
	        light = scene.lights[l];
	        lx = light.position[0];
	        ly = light.position[1];
	        switch(RENDER.renderer) {
	          case CANVAS:
	            renderer.context.lineWidth = 0.5;
	            renderer.context.beginPath();
	            renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
	            renderer.context.strokeStyle = light.ambientHex;
	            renderer.context.stroke();
	            renderer.context.beginPath();
	            renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
	            renderer.context.fillStyle = light.diffuseHex;
	            renderer.context.fill();
	            break;
	          case SVG:
	            lx += renderer.halfWidth;
	            ly = renderer.halfHeight - ly;
	            break;
	        }
	      }
	    }
	  }

	  function addEventListeners() {
	    //window.addEventListener('resize', onWindowResize);
	  }

	  //------------------------------
	  // Callbacks
	  //------------------------------

	  function onWindowResize(event) {
	    //resize(container.offsetWidth, container.offsetHeight);
	    //render();
	  }





})($, window);




/********************雨********************/
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground1=function(options){var height;var width;var points=800;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){points=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){var tempVar;snow[i]={posX:100,posY:100,initialX:100,initialY:100,radius:3,opacity:0.5,initialOpacity:0.5};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].initialX=snow[i].posX;snow[i].initialY=snow[i].posY;snow[i].radius=Math.random()*radius;snow[i].opacity=Math.random();snow[i].initialOpacity=snow[i].opacity}}function createSnow(snowID){ctx.beginPath();ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].opacity+")";ctx.fill();ctx.closePath();snow[snowID].posX=snow[snowID].posX+(width/2-snow[snowID].posX)/200;snow[snowID].posY=snow[snowID].posY+(height/2-snow[snowID].posY)/200;snow[snowID].radius-=0.02;if(snow[snowID].radius<=0){snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=2;snow[snowID].opacity=0}if(snow[snowID].opacity<snow[snowID].initialOpacity){snow[snowID].opacity+=0.05}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground2=function(options){var height;var width;var points=800;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){points=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){var tempVar;snow[i]={posX:100,posY:100,initialX:100,initialY:100,radius:3,opacity:0.5,initialOpacity:0.5};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].initialX=snow[i].posX;snow[i].initialY=snow[i].posY;snow[i].radius=Math.random()*radius;snow[i].opacity=Math.random();snow[i].initialOpacity=snow[i].opacity}}function createSnow(snowID){ctx.beginPath();ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+","+snow[snowID].opacity+")";ctx.fill();ctx.closePath();snow[snowID].posX=snow[snowID].posX-(width/2-snow[snowID].posX)/200;snow[snowID].posY=snow[snowID].posY-(height/2-snow[snowID].posY)/200;snow[snowID].radius+=0.02;if(snow[snowID].posX<0||snow[snowID].posY<0||snow[snowID].posX>width||snow[snowID].posY>height){snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=0}if(snow[snowID].radius>2){if(snow[snowID].opacity>=0){snow[snowID].opacity-=0.05}else{snow[snowID].posX=snow[snowID].initialX;snow[snowID].posY=snow[snowID].initialY;snow[snowID].radius=0;snow[snowID].opacity=snow[snowID].initialOpacity}}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground3=function(options){var scroll_count;var scroll_time;var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var velocity=5;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.velocity){velocity=parseInt(config.velocity,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var snow=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){var tempVar;snow[i]={posX:100,posY:100,velocity:3,radius:3,gradAngle:0,gradStart:0,gradEnd:0.4};snow[i].posX=width*Math.random();snow[i].posY=height*Math.random();snow[i].radius=Math.random()*radius;snow[i].gradAngle=Math.random()*360;snow[i].gradStart=Math.random();snow[i].gradEnd=Math.random();tempVar=Math.random()*velocity;snow[i].velocity=(tempVar<velocity*(2/5))?velocity*(2/5):tempVar}}function createSnow(snowID){ctx.beginPath();var grd=ctx.createLinearGradient(snow[snowID].posX-snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posY-snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posX+snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),snow[snowID].posY+snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180));grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].gradStart+")");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", "+snow[snowID].gradEnd+")");ctx.arc(snow[snowID].posX,snow[snowID].posY,snow[snowID].radius,0,2*Math.PI,false);ctx.fillStyle=grd;ctx.fill();ctx.closePath();snow[snowID].posY+=snow[snowID].velocity;if(snow[snowID].posY>height){snow[snowID].posY=height-snow[snowID].posY}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<numberOfPoints;i++){createSnow(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground4=function(options){var height;var width;var drops=500;var length=40;var interval=50;var color={r:256,g:256,b:256};var angle=30;var opacity=0.2;var stroke=2;var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.drops){drops=parseInt(config.drops,10)}if(config.length){length=parseInt(config.length,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.stroke){stroke=parseInt(config.stroke,10)}if(config.angle){angle=parseInt(config.angle,10)}if(config.opacity){opacity=parseFloat(config.opacity)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var rain=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<drops;i++){rain[i]={posX:100,posY:100,angle:30,length:20,opacity:0.4,stroke:2};rain[i].posX=Math.random()*width;rain[i].posY=Math.random()*height;rain[i].angle=angle;rain[i].length=Math.random()*length;rain[i].opacity=Math.random()*opacity;rain[i].stroke=Math.random()*stroke}}function createRain(rainId){var fposX,fposY,fangle,flength,fopacity,fstroke;fposX=rain[rainId].posX;fposY=rain[rainId].posY;fangle=rain[rainId].angle;fopacity=rain[rainId].opacity;fstroke=rain[rainId].stroke;flength=rain[rainId].length;ctx.beginPath();ctx.moveTo(fposX,fposY);ctx.lineTo(fposX+flength*Math.sin(Math.PI*fangle/180),fposY+flength*Math.cos(Math.PI*fangle/180));ctx.strokeStyle="rgba("+color.r+","+color.g+","+color.b+", "+fopacity+")";ctx.lineWidth=fstroke;ctx.stroke();rain[rainId].posX=Math.random()*width;rain[rainId].posY=Math.random()*height;rain[rainId].angle=angle;rain[rainId].length=Math.random()*length;rain[rainId].opacity=Math.random()*opacity;rain[rainId].stroke=Math.random()*stroke}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<drops;i++){createRain(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground5=function(options){var height;var width;var birds=5;var points=5;var size=15;var interval=50;var color="rgba(0, 0, 0, 1)";var velocity=3;var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.birds){points=parseInt(config.birds,10)}if(config.size){size=parseInt(config.size,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.velocity){velocity=parseInt(config.velocity,10)}if(config.color){color=config.color}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var bird=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<points;i++){bird[i]={posX:100,posY:100,wingUp:0,wingStretch:1,size:15,speed:2,color:"rgba(0, 0, 0, 1)",rest:1};bird[i].posX=width*Math.random();bird[i].posY=(height-50)*Math.random()/2+50;bird[i].size=size-(size/2)*Math.random();bird[i].speed=velocity-(1/3)*velocity*Math.random();bird[i].rest=100*Math.random();bird[i].color=color}}function createBird(birdId){var startX,startY,endX,endY;startX=bird[birdId].posX;startY=bird[birdId].posY;endX=startX+bird[birdId].size;endY=bird[birdId].posY;var wingStartX,wingStartY,wingEndX,wingEndY;var wingStartX2,wingStartY2,wingEndX2,wingEndY2;wingStartX=startX+(endX-startX)/2.5;wingStartY=startY;wingEndX=startX+(endX-startX)/1.5;wingEndY=startY-(endX-startX)*0.8;wingStartX2=startX+(endX-startX)/2.5;wingStartY2=startY;wingEndX2=startX+(endX-startX)/1.4;wingEndY2=startY-(endX-startX)*0.9;wingEndY=startY-((endX-startX)*0.8)*bird[birdId].wingStretch;wingEndY2=startY-((endX-startX)*0.9)*bird[birdId].wingStretch;wingEndX=startX+(endX-startX)/1.5-(endX-startX)*Math.abs(bird[birdId].wingStretch-1)*0.1;wingEndX2=startX+(endX-startX)/1.4+(endX-startX)*Math.abs(bird[birdId].wingStretch-1)*0.05;bird[birdId].rest++;if(bird[birdId].rest>80){bird[birdId].wingStretch=0.6;if(bird[birdId].rest>100){bird[birdId].rest=1}}if(!bird[birdId].wingUp&&bird[birdId].rest<80){bird[birdId].wingStretch-=0.4;if(bird[birdId].wingStretch<=-1){bird[birdId].wingUp=1}}if(bird[birdId].wingUp&&bird[birdId].rest<80){bird[birdId].wingStretch+=0.4;if(bird[birdId].wingStretch>=1){bird[birdId].wingUp=0}}ctx.fillStyle=bird[birdId].color;ctx.beginPath();ctx.moveTo(startX,startY);ctx.bezierCurveTo(startX+(endX-startX)/4,startY+(endX-startX)/4,startX+(endX-startX)/2,startY-(endX-startX)/3,endX,endY);ctx.bezierCurveTo(endX-(endX-startX)/3,endY,endX-(endX-startX)/2.4,startY+(endX-startX)/3,startX+(endX-startX)/5,startY+(endX-startX)/7);ctx.bezierCurveTo(startX+(endX-startX)/5,startY+(endX-startX)/7,startX,startY+(endX-startX)/4,startX,startY);ctx.strokeStyle="rgb(256, 256, 256)";ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(wingStartX,wingStartY);ctx.bezierCurveTo(wingStartX-(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/2,wingStartX+(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/1.5,wingStartX+(wingEndX-wingStartX)/2,wingEndY);ctx.bezierCurveTo(wingStartX+(wingEndX-wingStartX)*1.5,wingStartY-(wingStartY-wingEndY)/2,wingStartX+(wingEndX-wingStartX),wingStartY-(wingStartY-wingEndY)/1.5,wingEndX,wingStartY);ctx.lineTo(wingStartX,wingStartY);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(wingStartX2,wingStartY2);ctx.bezierCurveTo(wingStartX2-(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/2,wingStartX2+(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/1.5,wingStartX2+(wingEndX2-wingStartX2)/2,wingEndY2);ctx.bezierCurveTo(wingStartX2+(wingEndX2-wingStartX2)*1.5,wingStartY2-(wingStartY2-wingEndY2)/2,wingStartX2+(wingEndX2-wingStartX2),wingStartY2-(wingStartY2-wingEndY2)/1.5,wingEndX2,wingStartY2);ctx.lineTo(wingStartX2,wingStartY2);ctx.closePath();ctx.fill();bird[birdId].posX+=bird[birdId].speed;if(bird[birdId].posX>width){bird[birdId].posX=0}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<points;i++){createBird(i)}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground6=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;var timeOut=1;var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();var starId=new Array();var sparkStar=new Array();function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius*0.5,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}function drawSparklingStar(posX,posY,base){if(base<0){return}base=base*1.5;ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,base,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,base*2,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+",.1)";ctx.beginPath();ctx.arc(posX,posY,base*3,0,Math.PI*2,true);ctx.closePath();ctx.fill();var a=7*base/1.5;var grd;ctx.beginPath();ctx.moveTo(posX-a,posY-a);grd=ctx.createLinearGradient(posX-a,posY-a,posX+a,posY+a);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", 0)");grd.addColorStop(0.5,"rgba("+color.r+","+color.g+","+color.b+", 1)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.lineTo(posX+a,posY+a);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.moveTo(posX+a,posY-a);grd=ctx.createLinearGradient(posX-a,posY+a,posX+a,posY-a);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", 0)");grd.addColorStop(0.5,"rgba("+color.r+","+color.g+","+color.b+", 1)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.lineTo(posX-a,posY+a);ctx.closePath();ctx.stroke()}function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height;if(Math.random()*10>=8&&Math.random()*10<=10){starId[i]=1}else{starId[i]=0}sparkStar[i]=1}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}function moveStars(){var tempVar;tempx=200;tempy=200;for(var i=0;i<numberOfPoints;i++){if(starId[i]==0){drawStar(tempx,tempy)}else{if(starId[i]==1){if(sparkStar[i]<0){tempVar=parseInt(Math.random()*1000,10);if(tempVar<=5&&tempVar>=1){sparkStar[i]=1}}else{sparkStar[i]-=0.08;drawSparklingStar(tempx,tempy,sparkStar[i])}}}ctx.beginPath();ctx.moveTo(200,200);var a,b,c,d;a=tempx;b=tempy;c=starX[i]-(starX[i]-destStarX[i])*timeOut/400;d=starY[i]-(starY[i]-destStarY[i])*timeOut/400;var grd=ctx.createLinearGradient(a,b,c,d);grd.addColorStop(0,"rgba(256, 256, 256, .02)");grd.addColorStop(1,"rgba(256, 256, 256, 0)");ctx.strokeStyle=grd;ctx.moveTo(tempx,tempy);tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;ctx.lineTo(tempx,tempy);ctx.closePath();ctx.lineWidth=1;ctx.stroke()}}function setBackground(){ctx.clearRect(0,0,width,height);moveStars();if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<numberOfPoints;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground7=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}var timeOut=1;function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius*0.5,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}function setBackground(){ctx.clearRect(0,0,width,height);tempx=200;tempy=200;for(var i=0;i<numberOfPoints;i++){drawStar(tempx,tempy);ctx.beginPath();ctx.moveTo(200,200);var a,b,c,d;a=tempx;b=tempy;c=starX[i]-(starX[i]-destStarX[i])*timeOut/400;d=starY[i]-(starY[i]-destStarY[i])*timeOut/400;var grd=ctx.createLinearGradient(a,b,c,d);grd.addColorStop(0,"rgba("+color.r+","+color.g+","+color.b+", .02)");grd.addColorStop(1,"rgba("+color.r+","+color.g+","+color.b+", 0)");ctx.strokeStyle=grd;ctx.moveTo(tempx,tempy);tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;ctx.lineTo(tempx,tempy);ctx.closePath();ctx.stroke()}if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<numberOfPoints;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);
(function ($, window) {
	$ = jQuery;
	$.fn.flexBackground8=function(options){var height;var width;var numberOfPoints=200;var radius=1;var interval=50;var color={r:256,g:256,b:256};var config={};if(options){$.extend(config,options)}var selector=$(this);var selectorCan=$(this).find("canvas");if(config.numberOfPoints){numberOfPoints=parseInt(config.numberOfPoints,10)}if(config.radius){radius=parseInt(config.radius,10)}if(config.interval){interval=parseInt(config.interval,10)}if(config.color){var regExp=new RegExp("\\d+","g");color.r=regExp.exec(config.color);color.g=regExp.exec(config.color);color.b=regExp.exec(config.color)}width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);var canvas=selectorCan[0];var ctx=canvas.getContext("2d");var tempx=60;var tempy=60;function drawStar(posX,posY){ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .7)";ctx.beginPath();ctx.arc(posX,posY,radius/2,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .2)";ctx.beginPath();ctx.arc(posX,posY,radius,0,Math.PI*2,true);ctx.closePath();ctx.fill();ctx.fillStyle="rgba("+color.r+","+color.g+","+color.b+", .1)";ctx.beginPath();ctx.arc(posX,posY,radius*1.5,0,Math.PI*2,true);ctx.closePath();ctx.fill()}var starX=new Array();var starY=new Array();var destStarX=new Array();var destStarY=new Array();var timeOut=1;function refresh(){width=selector.width();height=selector.height();selectorCan.attr("height",height);selectorCan.attr("width",width);for(var i=0;i<numberOfPoints;i++){starX[i]=Math.random()*width;starY[i]=Math.random()*height}for(var i=0;i<numberOfPoints;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}function setBackground(){ctx.clearRect(0,0,width,height);for(var i=0;i<numberOfPoints;i++){tempx=starX[i]-(starX[i]-destStarX[i])*timeOut/400;tempy=starY[i]-(starY[i]-destStarY[i])*timeOut/400;drawStar(tempx,tempy)}if(timeOut<400){timeOut++}else{timeOut=1;refreshPosition()}}function refreshPosition(){for(var i=0;i<200;i++){starX[i]=destStarX[i];starY[i]=destStarY[i]}for(var i=0;i<200;i++){destStarX[i]=Math.random()*width;destStarY[i]=Math.random()*height}}refresh();setInterval(setBackground,interval);$(window).resize(function(){refresh()})};
})($, window);

/********************波浪线********************/
(function ($, window) {
	$ = jQuery;
	$(document).ready(


	),
	function(a, b) {
	    "use strict";
	    "function" == typeof define && "object" == typeof define.amd ? define([],
	    function() {
	        return b(a)
	    }) : a.SineWaves = b(a)
	} (this,
	function() {
	    "use strict";
	    function a(a) {
	    	
	        if (this.options = i.defaults(this.options, a), this.el = this.options.el, delete this.options.el, !this.el) throw "No Canvas Selected";
	        if (this.ctx = this.el.getContext("2d"), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw "No waves specified";
	        this.dpr = window.devicePixelRatio || 1,
	        this.updateDimensions(),
	        window.addEventListener("resize", this.updateDimensions.bind(this)),
	        this.setupUserFunctions(),
	        this.easeFn = i.getFn(n, this.options.ease, "linear"),
	        this.rotation = i.degreesToRadians(this.options.rotate),
	        i.isType(this.options.running, "boolean") && (this.running = this.options.running),
	        this.setupWaveFns(),
	        this.loop()
	    }
	    function b(a, b) {
	        return i.isType(a, "number") ? a: (a = a.toString(), a.indexOf("%") > -1 ? (a = parseFloat(a), a > 1 && (a /= 100), b * a) : a.indexOf("px") > -1 ? parseInt(a, 10) : void 0)
	    }
	    Function.prototype.bind || (Function.prototype.bind = function(a) {
	        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	        var b = Array.prototype.slice.call(arguments, 1),
	        c = this,
	        d = function() {},
	        e = function() {
	            return c.apply(this instanceof d && a ? this: a, b.concat(Array.prototype.slice.call(arguments)))
	        };
	        return d.prototype = this.prototype,
	        e.prototype = new d,
	        e
	    });
	    for (var c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"],
	    window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"] || window[c[d] + "CancelRequestAnimationFrame"];
	    if (!window.requestAnimationFrame) {
	        var e = 0;
	        window.requestAnimationFrame = function(a) {
	            var b = (new Date).getTime(),
	            c = Math.max(0, 16 - (b - e)),
	            d = window.setTimeout(function() {
	                a(b + c)
	            },
	            c);
	            return e = b + c,
	            d
	        }
	    }
	    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
	        clearTimeout(a)
	    });
	    var f = Math.PI / 180,
	    g = 2 * Math.PI,
	    h = Math.PI / 2,
	    i = {},
	    j = i.isType = function(a, b) {
	        var c = {}.toString.call(a).toLowerCase();
	        return c === "[object " + b.toLowerCase() + "]"
	    },
	    k = i.isFunction = function(a) {
	        return j(a, "function")
	    },
	    l = i.isString = function(a) {
	        return j(a, "string")
	    },
	    m = (i.isNumber = function(a) {
	        return j(a, "number")
	    },
	    i.shallowClone = function(a) {
	        var b = {};
	        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
	        return b
	    }),
	    n = (i.defaults = function(a, b) {
	        j(b, "object") || (b = {});
	        var c = m(a);
	        for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
	        return c
	    },
	    i.degreesToRadians = function(a) {
	        if (!j(a, "number")) throw new TypeError("Degrees is not a number");
	        return a * f
	    },
	    i.getFn = function(a, b, c) {
	        return k(b) ? b: l(b) && k(a[b.toLowerCase()]) ? a[b.toLowerCase()] : a[c]
	    },
	    {});
	    n.linear = function(a, b) {
	        return b
	    },
	    n.sinein = function(a, b) {
	        return b * (Math.sin(a * Math.PI - h) + 1) * .5
	    },
	    n.sineout = function(a, b) {
	        return b * (Math.sin(a * Math.PI + h) + 1) * .5
	    },
	    n.sineinout = function(a, b) {
	        return b * (Math.sin(a * g - h) + 1) * .5
	    };
	    var o = {};
	    o.sine = function(a) {
	        return Math.sin(a)
	    },
	    o.sin = o.sine,
	    o.sign = function(a) {
	        return a = +a,
	        0 === a || isNaN(a) ? a: a > 0 ? 1 : -1
	    },
	    o.square = function(a) {
	        return o.sign(Math.sin(a * g))
	    },
	    o.sawtooth = function(a) {
	        return 2 * (a - Math.floor(a + .5))
	    },
	    o.triangle = function(a) {
	        return Math.abs(o.sawtooth(a))
	    },
	    a.prototype.options = {
	        speed: 10,
	        rotate: 0,
	        ease: "Linear",
	        wavesWidth: "95%"
	    },
	    a.prototype.setupWaveFns = function() {
	        for (var a = -1,
	        b = this.waves.length; ++a < b;) this.waves[a].waveFn = i.getFn(o, this.waves[a].type, "sine")
	    },
	    a.prototype.setupUserFunctions = function() {
	        i.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener("resize", this.options.resizeEvent.bind(this))),
	        i.isFunction(this.options.initialize) && this.options.initialize.call(this)
	    };
	    var p = {
	        timeModifier: 1,
	        amplitude: 50,
	        wavelength: 50,
	        segmentLength: 10,
	        lineWidth: 1,
	        strokeStyle: "rgba(255, 255, 255, 0.2)",
	        type: "Sine"
	    };
	    return a.prototype.getDimension = function(a) {
	        return i.isNumber(this.options[a]) ? this.options[a] : i.isFunction(this.options[a]) ? this.options[a].call(this, this.el) : "width" === a ? this.el.clientWidth: "height" === a ? this.el.clientHeight: void 0
	    },
	    a.prototype.updateDimensions = function() {
	        var a = this.getDimension("width"),
	        c = this.getDimension("height");
	        this.width = this.el.width = a * this.dpr,
	        this.height = this.el.height = c * this.dpr,
	        this.el.style.width = a + "px",
	        this.el.style.height = c + "px",
	        this.waveWidth = b(this.options.wavesWidth, this.width),
	        this.waveLeft = (this.width - this.waveWidth) / 2,
	        this.yAxis = this.height / 2
	    },
	    a.prototype.clear = function() {
	        this.ctx.clearRect(0, 0, this.width, this.height)
	    },
	    a.prototype.time = 0,
	    a.prototype.update = function(a) {
	        this.time = this.time - .007,
	        "undefined" == typeof a && (a = this.time);
	        var b = -1,
	        c = this.waves.length;
	        for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate( - this.width / 2, -this.height / 2)); ++b < c;) {
	            var d = this.waves[b].timeModifier || 1;
	            this.drawWave(a * d, this.waves[b])
	        }
	        this.ctx.restore(),
	        b = void 0,
	        c = void 0
	    },
	    a.prototype.getPoint = function(a, b, c) {
	        var d = a * this.options.speed + ( - this.yAxis + b) / c.wavelength,
	        e = c.waveFn.call(this, d, o),
	        f = this.easeFn.call(this, b / this.waveWidth, c.amplitude);
	        return d = b + this.waveLeft,
	        e = f * e + this.yAxis,
	        {
	            x: d,
	            y: e
	        }
	    },
	    a.prototype.drawWave = function(a, b) {
	        b = i.defaults(p, b),
	        this.ctx.lineWidth = b.lineWidth * this.dpr,
	        this.ctx.strokeStyle = b.strokeStyle,
	        this.ctx.lineCap = "butt",
	        this.ctx.lineJoin = "round",
	        this.ctx.beginPath(),
	        this.ctx.moveTo(0, this.yAxis),
	        this.ctx.lineTo(this.waveLeft, this.yAxis);
	        var c, d;
	        for (c = 0; c < this.waveWidth; c += b.segmentLength) d = this.getPoint(a, c, b),
	        this.ctx.lineTo(d.x, d.y),
	        d = void 0;
	        c = void 0,
	        b = void 0,
	        this.ctx.lineTo(this.width, this.yAxis),
	        this.ctx.stroke()
	    },
	    a.prototype.running = !0,
	    a.prototype.loop = function() {
	        this.running === !0 && this.update(),
	        window.requestAnimationFrame(this.loop.bind(this))
	    },
	    a.prototype.Waves = o,
	    a.prototype.Ease = n,
	    a
	});
	
		$.fn.qfy_bg_canvas_13 = function() {
				var $el = $(this).find("canvas");
			   var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
			   var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			   if(speed=="4") speed=16;
				else if(speed=="3") speed=8;
				else if(speed=="2") speed=3;
				else speed=1;
				var a = new SineWaves({
					el: $el[0],
					speed: speed,
					width: function() {
						var a = $(document).width();
						return 768 > a ? 3 * $el.parent().width() : 1.4 * $el.parent().width()
					},
					height: function() {
						return $el.parent().height()
					},
					wavesWidth: "100%",
					ease: "SineInOut",
					waves: [{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 150,
						wavelength: 200,
						segmentLength: 1
					},
					{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 100,
						wavelength: 150,
						segmentLength: 1
					},
					{
						timeModifier: .5,
						lineWidth: 2,
						amplitude: 50,
						wavelength: 80,
						segmentLength: 1
					}],
					initialize: function() {},
					resizeEvent: function() {
						var a = this.ctx.createLinearGradient(0, 0, this.width, 0);
						if(linecolor.r){
								a.addColorStop(0, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0)"),
								a.addColorStop(.5, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0.5)"),
								a.addColorStop(1, "rgba("+linecolor.r+", "+linecolor.g+", "+linecolor.b+", 0)");
						}
						for (var b = -1,
						c = this.waves.length; ++b < c;) this.waves[b].strokeStyle = a;
						b = void 0,
						c = void 0,
						a = void 0
					}
				}),
				b = $el,
				c = $(document).scrollTop(),
				d = $(document).scrollTop() + $(window).height(),
				e = b.offset().top + b.height(),
				f = b.offset().top; (c > e || f > d) && (a.running = !1, a.update()),
				$(window).bind("scroll",
				function() {
					c = $(document).scrollTop(),
					d = $(document).scrollTop() + $(window).height(),
					e = b.offset().top + b.height(),
					f = b.offset().top,
					c > e || f > d ? (a.running = !1, a.update()) : (a.running = !0, a.update())
				})
		}

	
	
})($, window);
/********************气泡********************/
(function(e){e.hexToRgb=function(e){if(e.length=="4"){e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)}var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null};e.componentToHex=function(e){var t=e.toString(16);return t.length==1?"0"+t:t};e.rgbToHex=function(t,n,r){return"#"+e.componentToHex(t)+e.componentToHex(n)+e.componentToHex(r)};e.fn.easyBackgroundParticles=function(t){var n=t;var r=this[0].getContext("2d");var i=this.parent();var s=this[0];var o=[];if(n.shape.substr(0,5)=="image"){var u=n.shape.split(":")[1];n.shape="image";n.image=new Image;n.image.src=u}var a=function(e,t){return Math.random()*(t-e)+e};var f=function(){s.width=i.innerWidth();s.height=i.innerHeight()};var l=function(){for(var e=0;e<n.numParticles;e++){var t=n.colors[~~a(0,n.colors.length)];var r=n.borderColors[~~a(0,n.borderColors.length)];var i=a(n.minBorderOpacity,n.maxBorderOpacity);var u=a(n.minOpacity,n.maxOpacity);o[e]={scale:a(n.minScale,n.maxScale),x:a(0,s.width),y:a(0,s.height),rotation:0,xpeed:a(n.minSpeedX,n.maxSpeedX),yspeed:a(n.minSpeedY,n.maxSpeedY),rotationSpeed:a(n.minRotateSpeed,n.maxRotateSpeed),color:"rgba("+t+","+u+")",opacity:u,borderColor:"rgb("+r+")"}}h()};var c=function(e){r.fillStyle=e.color;if(n.border){r.strokeStyle=e.borderColor;r.stroke()}r.beginPath();e.rotation+=e.rotationSpeed;r.save();r.translate(e.x,e.y);r.rotate(e.rotation*Math.PI/180);var t=n.baseSize*e.scale/2;switch(n.shape){case"circle":r.arc(-t,-t,n.baseSize*e.scale,0,2*Math.PI,false);break;case"square":r.fillRect(-t,-t,n.baseSize*e.scale,n.baseSize*e.scale);break;case"image":r.globalAlpha=e.opacity;r.drawImage(n.image,-(n.image.width/2),-(n.image.height/2),n.image.width*e.scale,n.image.height*e.scale);r.globalAlpha=1;break}r.restore();r.fill()};var h=function(){setInterval(function(){r.clearRect(0,0,s.width,s.height);for(var e=0;e<n.numParticles;e++){var t=o[e];t.x+=t.xpeed;t.y+=t.yspeed;var i=n.baseSize*t.scale;var u=i;if(n.shape=="image"){i=n.image.width*t.scale;u=n.image.height*t.scale}if(t.x>s.width+i||t.y>s.height+u||t.x<-(i*1.5)||t.y<-(u*1.5)){p(t)}else{c(t)}}},17)};var p=function(e){var t=a(0,1);var r=n.baseSize*e.scale;var i=r;if(n.shape=="image"){r=n.image.width*e.scale;i=n.image.height*e.scale}if(t>.5){e.x=e.xpeed>0?-r:s.width+r;e.y=a(0,s.height)}else{e.x=a(0,s.width);e.y=e.yspeed>0?-i:s.height+i}c(e)};f();e(window).on("resize.canvas",f);l()};e.fn.easyBackground=function(t){function u(){var t=e('<canvas class="easy-background-canvas" />');t.css("display","block");i.append(t);return t}function a(t){var r=e('<div id="easy-background-player" />');i.append(r);if(t.substr(0,7)=="youtube"){var s=t.split(":")[1];if(s){var o=document.createElement("script");o.type="text/javascript";o.src="//www.youtube.com/iframe_api";e("body").append(o);window.onYouTubeIframeAPIReady=function(){var e=new YT.Player("easy-background-player",{width:1,height:1,videoId:s,playerVars:{controls:0,showinfo:0,modestbranding:1,iv_load_policy:3,wmode:"transparent"},events:{onReady:function(e){u();if(n.mute){e.target.mute()}e.target.seekTo(0);e.target.playVideo()},onStateChange:function(t){if(t.data===0){e.seekTo(0)}}}})};var u=function(){var t=i.innerWidth();var r=i.innerHeight();if(t/n.ratio<r){var s=Math.ceil(r*n.ratio);e("#easy-background-player").width(s);e("#easy-background-player").height(r);e("#easy-background-player").css({left:(t-s)/2,top:0})}else{var o=Math.ceil(t/n.ratio);e("#easy-background-player").width(t);e("#easy-background-player").height(o);e("#easy-background-player").css({left:0,top:(r-o)/2})}};e(window).on("resize.youtube",u)}}}function f(e,t){switch(n.gradientType){case"horizontal":i.css("background","-moz-linear-gradient(left, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, right top, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(left, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(to right, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break;case"vertical":i.css("background","-moz-linear-gradient(top, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, left bottom, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(top, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(to bottom, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=0 )");break;case"diagonal":i.css("background","-moz-linear-gradient(-45deg, "+e+", "+t+" 100%)");i.css("background","-webkit-gradient(linear, left top, right bottom, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","-o-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-linear-gradient(-45deg, "+e+" 0%,"+t+" 100%)");i.css("background","linear-gradient(135deg, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break;case"radial":i.css("background","-moz-radial-gradient(center, ellipse cover, "+e+" 0%, "+t+" 100%)");i.css("background","-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,"+e+"), color-stop(100%,"+t+"))");i.css("background","-webkit-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","-o-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","-ms-radial-gradient(center, ellipse cover, "+e+" 0%,"+t+" 100%)");i.css("background","radial-gradient(ellipse at center, "+e+" 0%,"+t+" 100%)");i.css("filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='"+e+"', endColorstr='"+t+"',GradientType=1 )");break}}function l(t,r){var i={colorAR:t[0][0],colorAG:t[0][1],colorAB:t[0][2],colorBR:t[1][0],colorBG:t[1][1],colorBB:t[1][2]};var s={colorAR:r[0][0],colorAG:r[0][1],colorAB:r[0][2],colorBR:r[1][0],colorBG:r[1][1],colorBB:r[1][2]};e(i).animate(s,{duration:n.duration,easing:n.gradientEase,step:function(){var t=e.rgbToHex(Math.round(this.colorAR),Math.round(this.colorAG),Math.round(this.colorAB));var n=e.rgbToHex(Math.round(this.colorBR),Math.round(this.colorBG),Math.round(this.colorBB));f(t,n)},complete:function(){if(n.gradientLoop){l(r,t)}}})}function c(t){if(!t){if(console&&console.log){console.log("No pattern found.")}return false}i.css("background-image","url("+t+")");var n=new Image;n.src=t;e(n).on("load",function(){h(this.width,this.height)})}function h(t,r){i.css("background-position","0 0");var s={x:0,y:0};var o={x:0,y:0};var u="";if(n.patternAnimationX=="left"){o.x=-t}else if(n.patternAnimationX=="right"){o.x=t}if(n.patternAnimationY=="top"){o.y=-r}else if(n.patternAnimationY=="bottom"){o.y=r}e(s).animate(o,{duration:n.duration,easing:"linear",step:function(){var e=Math.round(this.x);var t=Math.round(this.y);i.css("background-position",e+"px "+t+"px")},complete:function(){h(t,r)}})}function p(t){if(!t||t.length==0){if(console&&console.log){console.log("No slides found.")}return false}for(var r=0;r<t.length;r++){var s=new Image;s.src=t[r]}var o=e("<div />");o.css("width","100%");o.css("height","100%");o.css("position","absolute");o.css("top","0");o.css("left","0");o.css("z-index","2");o.css("-webkit-background-size","cover");o.css("-moz-background-size","cover");o.css("-o-background-size","cover");o.css("background-size","cover");o.css("background-repeat","no-repeat");var u=e("<div/>");u.css("width","100%");u.css("height","100%");u.css("position","absolute");u.css("top","0");u.css("left","0");u.css("z-index","1");u.css("-webkit-background-size","cover");u.css("-moz-background-size","cover");u.css("-o-background-size","cover");u.css("background-size","cover");u.css("background-repeat","no-repeat");i.append(o);i.append(u);d(o,t[0]);if(t.length>1){setTimeout(function(){v(o,u,0,t)},n.duration)}}function d(e,t){e.css("background-image","url("+t+")");e.css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')");e.css("-ms-filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')")}function v(e,t,r,i){var s=r+1;if(s==i.length){s=0}d(t,i[s]);var o=n.slideshowEffect=="slide"?"slideUp":"fadeOut";e[o](n.slideshowSpeed,function(){d(e,i[s]);e.show();setTimeout(function(){v(e,t,s,i)},n.duration)})}var n={effect:"particles",duration:5e3,slides:[],slideshowEffect:"fade",slideshowSpeed:2e3,patternImage:null,patternAnimationX:"left",patternAnimationY:"none",gradientType:"radial",gradientColors:["#9CC4E2","#004799"],gradientAnimateColors:["#666666","#333333"],gradientLoop:true,gradientEase:"linear",video:"youtube:3agk-1DohfA",mute:true,ratio:16/9,shape:"circle",colors:["#FFFFFF","255, 99, 71","19, 19, 19"],border:false,borderColors:["#FF0000","#00FF00","#0000FF"],minScale:.5,maxScale:1,baseSize:30,minOpacity:.1,maxOpacity:1,minBorderOpacity:.1,maxBorderOpacity:1,minSpeedX:-1,maxSpeedX:1,minSpeedY:-1,maxSpeedY:1,minRotateSpeed:.05,maxRotateSpeed:.1,numParticles:75,overlay:"dots",baseColor:"#333333",disableMobile:false,wrapNeighbours:false,relativeNeighbours:false};e.extend(true,n,t);if(n&&n.colors){e(n.colors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.colors[t]=i.r+", "+i.g+", "+i.b}})}if(n&&n.borderColors){e(n.borderColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.borderColors[t]=i.r+", "+i.g+", "+i.b}})}if(n&&n.gradientColors){e(n.gradientColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.gradientColors[t]=[i.r,i.g,i.b]}})}if(n&&n.gradientAnimateColors){e(n.gradientAnimateColors).each(function(t,r){if(r.substr(0,1)=="#"){var i=e.hexToRgb(r);n.gradientAnimateColors[t]=[i.r,i.g,i.b]}})}var r=false;if(n.disableMobile){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){r=true}}var i=e('<div class="easy-background" /> ');i.css("width","100%");i.css("height","100%");if(this.is("body")){i.css("position","fixed")}else{i.css("position","absolute");this.css("overflow","hidden")}i.css("top","0");i.css("left","0");if(n.baseColor){i.css("background-color",n.baseColor)}i.css("z-index","1");this.append(i);if(n.overlay){var s=e("<div /> ");s.css("width","100%");s.css("height","100%");s.css("position","absolute");s.css("top","0");s.css("left","0");s.css("z-index","10");switch(n.overlay){case"waves":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPklEQVQYV2NkwAT/gUKM6MLoAjBFGIqRFaJLovBhCrFaB7QeLg5SiEsRzJlgeQxHY/EcSOg/sQoxgwGHiQwA+f4KCL3Y/AQAAAAASUVORK5CYII=)");break;case"horizontal-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAFCAYAAACJmvbYAAAAF0lEQVQIW2NcvHjxfwYcgBGXBEicRpIAn+0C7kufXBgAAAAASUVORK5CYII=)");break;case"vertical-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAAF0lEQVQIW2NcvHjx/9jYWEYGJMA4oIIAzrccCBIzFHAAAAAASUVORK5CYII=)");break;case"simple-grid":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQIW2NcvHjxfwYcgBEkGRsby4hNftBJAgB4hhrww0B+QQAAAABJRU5ErkJggg==)");break;case"grid":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaklEQVQYV2NkYGAwBuKzQAwC9UA8C4ifQ/n/GaEMkCIfIG6E8iWB9DMgZoQpAOncgmTSfyBbCmQSSAFIEqYTZNIZkE6YSSAGyDi4nUC2CbKb4CphdqK7CaYAbieSb8BuAikASSKblIbsJgCKXBfTNjWx1AAAAABJRU5ErkJggg==)");break;case"dots":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGklEQVQIW2NkYGD4D8SMQAwGcAY2AbBKDBUAVuYCBQPd34sAAAAASUVORK5CYII=)");break;case"diagonal-lines":s.css("background-image","url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAI0lEQVQIW2NkwAT/GdHE/gP5jMiCYAGQIpggXAAmiCIAEgQAAE4FBbECyZcAAAAASUVORK5CYII=)");break}if(n.overlay.substr(0,5)=="image"){var o=n.overlay.split(":")[1];s.css("background-image","url("+o+")")}i.append(s)}if(n.wrapNeighbours){i.siblings(":not(script)").wrap('<div class="easy-background-wrap" style="position:relative; z-index: 2;"></div>')}else if(n.relativeNeighbours){i.siblings(":not(script)").each(function(t,n){n=e(n);if(n.css("position")=="static"){n.css({position:"relative","z-index":"2"})}})}if(!r){switch(n.effect){case"particles":u().easyBackgroundParticles(n);break;case"video":a(n.video);break;case"gradient":if(n.gradientAnimateColors){l(n.gradientColors,n.gradientAnimateColors)}else{var m=e.rgbToHex(n.gradientColors[0][0],n.gradientColors[0][1],n.gradientColors[0][2]);var g=e.rgbToHex(n.gradientColors[1][0],n.gradientColors[1][1],n.gradientColors[1][2]);f(m,g)}break;case"pattern":c(n.patternImage);break;case"slideshow":p(n.slides);break}}}})(jQuery)

/***********************************/
function qfy_canvas_animale_run(){
	var $ = jQuery;
	jQuery( ".qfy_bg_canvas_1:not(.loaded)" ).each(function(){
	    jQuery(this).addClass("loaded");
	    jQuery(this).qfy_bg_canvas_1();
	});

	jQuery( ".qfy_bg_canvas_4:not(.loaded)" ).each(function(){
	    jQuery(this).addClass("loaded");
	    var linecolor =  $(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff";
		var bgcolor =  $(this).attr("data-bgcolor")? jQuery(this).attr("data-bgcolor"):'#000000';
		var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="8";
		else if(speed=="3") speed="3";
		else if(speed=="2") speed="0.5";
		else speed="0.1";
	    jQuery(this).easyBackground({
			wrapNeighbours: true,
			shape: "circle",
			numParticles: 50,
			colors: [linecolor,linecolor,linecolor],
			minSpeedX: -speed,
            maxSpeedX: speed,
            minSpeedY: -speed,
            maxSpeedY: speed,
            overlay:'',
            baseColor: bgcolor,
		});
	});
	jQuery( ".qfy_bg_canvas_5:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";

			if(linecolor){
		  		jQuery(this).flexBackground1({numberOfPoints:'300',
					radius:'3',
					interval :speed,
					color : 'rgb('+linecolor.r+','+linecolor.g+','+linecolor.b+')'
				});
			}
	});
	jQuery( ".qfy_bg_canvas_6:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
	
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		

		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
				if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground2({
				numberOfPoints: '300',
				radius: '3',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_7:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground3({
				numberOfPoints: '100',
				radius: '2',
				interval: speed,
				velocity: '2',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_8:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground4({
				drops: '500',
				length: '40',
				stroke: '2',
				interval: speed,
				opacity: '1',
				angle: '30',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_9:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground5({
				birds: '15',
				size: '15',
				interval: speed,
				velocity: '3',
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_10:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground6({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_11:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
			if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground7({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_12:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  var linecolor =  hexToRgb($(this).attr("data-linecolor")? jQuery(this).attr("data-linecolor"):"#ffffff") ;
		  var speed =  $(this).attr("data-speed")? jQuery(this).attr("data-speed"):'';
		if(speed=="4") speed="1";
			else if(speed=="3") speed="5";
			else if(speed=="2") speed="40";
			else speed="100";
		if(linecolor) {
			jQuery(this).flexBackground8({
				numberOfPoints: '100',
				radius: '1',
				interval: speed,
				color: 'rgb(' + linecolor.r + ',' + linecolor.g + ',' + linecolor.b + ')'
			});
		}
	});
	jQuery( ".qfy_bg_canvas_13:not(.loaded)" ).each(function(){
		  jQuery(this).addClass("loaded");
		  $this = this;
		 
			  jQuery(this).qfy_bg_canvas_13();
		 
		 
	});
};

/* qfe_scrollTo_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/scrollTo/jquery.scrollTo.min.js) */
/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.11
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));
;

/* qfe_php_js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/qfy_editor/assets/lib/php.default/php.default.min.js) */
/* 
 * More info at: http://phpjs.org
 * 
 * This is version: 3.26
 * php.js is copyright 2011 Kevin van Zonneveld.
 * 
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
 * Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
 * Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
 * Rafał Kukawski (http://blog.kukawski.pl), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
 * Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
 * L. Rodrigues (http://www.jsfromhell.com), Ash Searle
 * (http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
 * Erkekjetter, Michael Grier, Rafał Kukawski (http://kukawski.pl), Johnny
 * Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * Rafał Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
 * (http://webdevhobo.blogspot.com/), marrtins, GeekFG
 * (http://geekfg.blogspot.com), Andrea Giammarchi
 * (http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
 * gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
 * Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/), Martin
 * (http://www.erlenwiese.de/), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Chris, Mirek Slugen, saulius, Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
 * Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
 * Ariede (http://caioariede.com), Robin, Kankrelune
 * (http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
 * (http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
 * Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
 * David, Aman Gupta, Michael White, Public Domain
 * (http://www.json.org/json2.js), Steven Levithan
 * (http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
 * Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
 * Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
 * (http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
 * Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
 * Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
 * (http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
 * (http://javascript.crockford.com), madipta, Slawomir Kaniecki,
 * ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
 * (http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
 * Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
 * (https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
 * Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
 * josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
 * Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
 * (http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
 * Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
 * (http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Olivier Louvignes
 * (http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
 * Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
 * vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
 * Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
 * (http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
 * B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
 * Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
 * Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
 * (http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
 * Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
 * Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
 * sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
 * (http://www.premasolutions.com/), Philippe Jausions
 * (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, Arnout Kazemier
 * (http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
 * FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
 * Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
 * daniel airton wermann (http://wermann.com.br), Atli Þór, Maximusya, Ryan
 * W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
 * (http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
 * Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
 * (http://www.frontierwebdev.com/), Rafał Kukawski, FremyCompany, Matt
 * Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
 * Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
 * (http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), setcookie, Michael, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
 * http://hacks.bluesmoon.info/strftime/strftime.js, Ben
 * (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
 * meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
 * (http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
 * Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
 * Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
 * Bryan
 * 
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */ 


// Compression: minified


function abs(mixed_number){return Math.abs(mixed_number)||0;}
function acos(arg){return Math.acos(arg);}
function acosh(arg){return Math.log(arg+Math.sqrt(arg*arg-1));}
function addslashes(str){return(str+'').replace(/[\\"']/g,'\\$&').replace(/\u0000/g,'\\0');}
function array_change_key_case(array,cs){var case_fn,key,tmp_ar={};if(Object.prototype.toString.call(array)==='[object Array]'){return array;}
if(array&&typeof array==='object'&&array.change_key_case){return array.change_key_case(cs);}
if(array&&typeof array==='object'){case_fn=(!cs||cs==='CASE_LOWER')?'toLowerCase':'toUpperCase';for(key in array){tmp_ar[key[case_fn]()]=array[key];}
return tmp_ar;}
return false;}
function array_chunk(input,size,preserve_keys){var x,p='',i=0,c=-1,l=input.length||0,n=[];if(size<1){return null;}
if(Object.prototype.toString.call(input)==='[object Array]'){if(preserve_keys){while(i<l){(x=i%size)?n[c][i]=input[i]:n[++c]={},n[c][i]=input[i];i++;}}
else{while(i<l){(x=i%size)?n[c][x]=input[i]:n[++c]=[input[i]];i++;}}}
else{if(preserve_keys){for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][p]=input[p]:n[++c]={},n[c][p]=input[p];i++;}}}
else{for(p in input){if(input.hasOwnProperty(p)){(x=i%size)?n[c][x]=input[p]:n[++c]=[input[p]];i++;}}}}
return n;}
function array_combine(keys,values){var new_array={},keycount=keys&&keys.length,i=0;if(typeof keys!=='object'||typeof values!=='object'||typeof keycount!=='number'||typeof values.length!=='number'||!keycount){return false;}
if(keycount!=values.length){return false;}
for(i=0;i<keycount;i++){new_array[keys[i]]=values[i];}
return new_array;}
function array_count_values(array){var tmp_arr={},key='',t='';var __getType=function(obj){var t=typeof obj;t=t.toLowerCase();if(t==="object"){t="array";}
return t;};var __countValue=function(value){switch(typeof(value)){case"number":if(Math.floor(value)!==value){return;}
case"string":if(value in this&&this.hasOwnProperty(value)){++this[value];}else{this[value]=1;}}};t=__getType(array);if(t==='array'){for(key in array){if(array.hasOwnProperty(key)){__countValue.call(tmp_arr,array[key]);}}}
return tmp_arr;}
function array_diff(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_assoc(arr1){var retArr={},argl=arguments.length,k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_key(arr1){var argl=arguments.length,retArr={},k1='',i=1,k='',arr={};arr1keys:for(k1 in arr1){for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_diff_ukey(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_fill(start_index,num,mixed_val){var key,tmp_arr={};if(!isNaN(start_index)&&!isNaN(num)){for(key=0;key<num;key++){tmp_arr[(key+start_index)]=mixed_val;}}
return tmp_arr;}
function array_fill_keys(keys,value){var retObj={},key='';for(key in keys){retObj[keys[key]]=value;}
return retObj;}
function array_filter(arr,func){var retObj={},k;for(k in arr){if(func(arr[k])){retObj[k]=arr[k];}}
return retObj;}
function array_flip(trans){var key,tmp_ar={};for(key in trans){if(!trans.hasOwnProperty(key)){continue;}
tmp_ar[trans[key]]=key;}
return tmp_ar;}
function array_intersect(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_assoc(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_key(arr1){var retArr={},argl=arguments.length,arglm1=argl-1,k1='',arr={},i=0,k='';arr1keys:for(k1 in arr1){arrs:for(i=1;i<argl;i++){arr=arguments[i];for(k in arr){if(k===k1){if(i===arglm1){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(arr[k]===arr1[k1]&&cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_intersect_ukey(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(k,k1)===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_key_exists(key,search){if(!search||(search.constructor!==Array&&search.constructor!==Object)){return false;}
return key in search;}
function array_keys(input,search_value,argStrict){var search=typeof search_value!=='undefined',tmp_arr=[],strict=!!argStrict,include=true,key='';if(input&&typeof input==='object'&&input.change_key_case){return input.keys(search_value,argStrict);}
for(key in input){if(input.hasOwnProperty(key)){include=true;if(search){if(strict&&input[key]!==search_value){include=false;}
else if(input[key]!=search_value){include=false;}}
if(include){tmp_arr[tmp_arr.length]=key;}}}
return tmp_arr;}
function array_map(callback){var argc=arguments.length,argv=arguments;var j=argv[1].length,i=0,k=1,m=0;var tmp=[],tmp_ar=[];while(i<j){while(k<argc){tmp[m++]=argv[k++][i];}
m=0;k=1;if(callback){if(typeof callback==='string'){callback=this.window[callback];}
tmp_ar[i++]=callback.apply(null,tmp);}else{tmp_ar[i++]=tmp;}
tmp=[];}
return tmp_ar;}
function array_merge(){var args=Array.prototype.slice.call(arguments),argl=args.length,arg,retObj={},k='',argil=0,j=0,i=0,ct=0,toStr=Object.prototype.toString,retArr=true;for(i=0;i<argl;i++){if(toStr.call(args[i])!=='[object Array]'){retArr=false;break;}}
if(retArr){retArr=[];for(i=0;i<argl;i++){retArr=retArr.concat(args[i]);}
return retArr;}
for(i=0,ct=0;i<argl;i++){arg=args[i];if(toStr.call(arg)==='[object Array]'){for(j=0,argil=arg.length;j<argil;j++){retObj[ct++]=arg[j];}}
else{for(k in arg){if(arg.hasOwnProperty(k)){if(parseInt(k,10)+''===k){retObj[ct++]=arg[k];}
else{retObj[k]=arg[k];}}}}}
return retObj;}
function array_merge_recursive(arr1,arr2){var idx='';if(arr1&&Object.prototype.toString.call(arr1)==='[object Array]'&&arr2&&Object.prototype.toString.call(arr2)==='[object Array]'){for(idx in arr2){arr1.push(arr2[idx]);}}else if((arr1&&(arr1 instanceof Object))&&(arr2&&(arr2 instanceof Object))){for(idx in arr2){if(idx in arr1){if(typeof arr1[idx]=='object'&&typeof arr2=='object'){arr1[idx]=this.array_merge(arr1[idx],arr2[idx]);}else{arr1[idx]=arr2[idx];}}else{arr1[idx]=arr2[idx];}}}
return arr1;}
function array_pad(input,pad_size,pad_value){var pad=[],newArray=[],newLength,diff=0,i=0;if(Object.prototype.toString.call(input)==='[object Array]'&&!isNaN(pad_size)){newLength=((pad_size<0)?(pad_size*-1):pad_size);diff=newLength-input.length;if(diff>0){for(i=0;i<diff;i++){newArray[i]=pad_value;}
pad=((pad_size<0)?newArray.concat(input):input.concat(newArray));}else{pad=input;}}
return pad;}
function array_pop(inputArr){var key='',lastKey='';if(inputArr.hasOwnProperty('length')){if(!inputArr.length){return null;}
return inputArr.pop();}else{for(key in inputArr){if(inputArr.hasOwnProperty(key)){lastKey=key;}}
if(lastKey){var tmp=inputArr[lastKey];delete(inputArr[lastKey]);return tmp;}else{return null;}}}
function array_product(input){var idx=0,product=1,il=0;if(Object.prototype.toString.call(input)!=='[object Array]'){return null;}
il=input.length;while(idx<il){product*=(!isNaN(input[idx])?input[idx]:0);idx++;}
return product;}
function array_push(inputArr){var i=0,pr='',argv=arguments,argc=argv.length,allDigits=/^\d$/,size=0,highestIdx=0,len=0;if(inputArr.hasOwnProperty('length')){for(i=1;i<argc;i++){inputArr[inputArr.length]=argv[i];}
return inputArr.length;}
for(pr in inputArr){if(inputArr.hasOwnProperty(pr)){++len;if(pr.search(allDigits)!==-1){size=parseInt(pr,10);highestIdx=size>highestIdx?size:highestIdx;}}}
for(i=1;i<argc;i++){inputArr[++highestIdx]=argv[i];}
return len+i-1;}
function array_rand(input,num_req){var indexes=[];var ticks=num_req||1;var checkDuplicate=function(input,value){var exist=false,index=0,il=input.length;while(index<il){if(input[index]===value){exist=true;break;}
index++;}
return exist;};if(Object.prototype.toString.call(input)==='[object Array]'&&ticks<=input.length){while(true){var rand=Math.floor((Math.random()*input.length));if(indexes.length===ticks){break;}
if(!checkDuplicate(indexes,rand)){indexes.push(rand);}}}else{indexes=null;}
return((ticks==1)?indexes.join():indexes);}
function array_reduce(a_input,callback){var lon=a_input.length;var res=0,i=0;var tmp=[];for(i=0;i<lon;i+=2){tmp[0]=a_input[i];if(a_input[(i+1)]){tmp[1]=a_input[(i+1)];}else{tmp[1]=0;}
res+=callback.apply(null,tmp);tmp=[];}
return res;}
function array_reverse(array,preserve_keys){var isArray=Object.prototype.toString.call(array)==="[object Array]",tmp_arr=preserve_keys?{}:[],key;if(isArray&&!preserve_keys){return array.slice(0).reverse();}
if(preserve_keys){var keys=[];for(key in array){keys.push(key);}
var i=keys.length;while(i--){key=keys[i];tmp_arr[key]=array[key];}}else{for(key in array){tmp_arr.unshift(array[key]);}}
return tmp_arr;}
function array_search(needle,haystack,argStrict){var strict=!!argStrict,key='';if(haystack&&typeof haystack==='object'&&haystack.change_key_case){return haystack.search(needle,argStrict);}
if(typeof needle==='object'&&needle.exec){if(!strict){var flags='i'+(needle.global?'g':'')+
(needle.multiline?'m':'')+
(needle.sticky?'y':'');needle=new RegExp(needle.source,flags);}
for(key in haystack){if(needle.test(haystack[key])){return key;}}
return false;}
for(key in haystack){if((strict&&haystack[key]===needle)||(!strict&&haystack[key]==needle)){return key;}}
return false;}
function array_shift(inputArr){var props=false,shift=undefined,pr='',allDigits=/^\d$/,int_ct=-1,_checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(inputArr.length===0){return null;}
if(inputArr.length>0){return inputArr.shift();}}
function array_slice(arr,offst,lgth,preserve_keys){var key='';if(Object.prototype.toString.call(arr)!=='[object Array]'||(preserve_keys&&offst!==0)){var lgt=0,newAssoc={};for(key in arr){lgt+=1;newAssoc[key]=arr[key];}
arr=newAssoc;offst=(offst<0)?lgt+offst:offst;lgth=lgth===undefined?lgt:(lgth<0)?lgt+lgth-offst:lgth;var assoc={};var start=false,it=-1,arrlgth=0,no_pk_idx=0;for(key in arr){++it;if(arrlgth>=lgth){break;}
if(it==offst){start=true;}
if(!start){continue;}++arrlgth;if(this.is_int(key)&&!preserve_keys){assoc[no_pk_idx++]=arr[key];}else{assoc[key]=arr[key];}}
return assoc;}
if(lgth===undefined){return arr.slice(offst);}else if(lgth>=0){return arr.slice(offst,offst+lgth);}else{return arr.slice(offst,lgth);}}
function array_splice(arr,offst,lgth,replacement){var _checkToUpIndices=function(arr,ct,key){if(arr[ct]!==undefined){var tmp=ct;ct+=1;if(ct===key){ct+=1;}
ct=_checkToUpIndices(arr,ct,key);arr[ct]=arr[tmp];delete arr[tmp];}
return ct;};if(replacement&&typeof replacement!=='object'){replacement=[replacement];}
if(lgth===undefined){lgth=offst>=0?arr.length-offst:-offst;}else if(lgth<0){lgth=(offst>=0?arr.length-offst:-offst)+lgth;}
if(Object.prototype.toString.call(arr)!=='[object Array]'){var lgt=0,ct=-1,rmvd=[],rmvdObj={},repl_ct=-1,int_ct=-1;var returnArr=true,rmvd_ct=0,rmvd_lgth=0,key='';for(key in arr){lgt+=1;}
offst=(offst>=0)?offst:lgt+offst;for(key in arr){ct+=1;if(ct<offst){if(this.is_int(key)){int_ct+=1;if(parseInt(key,10)===int_ct){continue;}
_checkToUpIndices(arr,int_ct,key);arr[int_ct]=arr[key];delete arr[key];}
continue;}
if(returnArr&&this.is_int(key)){rmvd.push(arr[key]);rmvdObj[rmvd_ct++]=arr[key];}else{rmvdObj[key]=arr[key];returnArr=false;}
rmvd_lgth+=1;if(replacement&&replacement[++repl_ct]){arr[key]=replacement[repl_ct];}else{delete arr[key];}}
return returnArr?rmvd:rmvdObj;}
if(replacement){replacement.unshift(offst,lgth);return Array.prototype.splice.apply(arr,replacement);}
return arr.splice(offst,lgth);}
function array_sum(array){var key,sum=0;if(typeof array!=='object'){return null;}
for(key in array){sum+=(array[key]*1);}
return sum;}
function array_udiff(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr='',i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_assoc(arr1){var retArr={},arglm1=arguments.length-1,cb=arguments[arglm1],arr={},i=1,k1='',k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0&&k===k1){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_udiff_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){continue arr1keys;}}
retArr[k1]=arr1[k1];}}
return retArr;}
function array_uintersect(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[argm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_assoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-2,cb=arguments[arglm1],k1='',i=1,arr={},k='';cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm1;i++){arr=arguments[i];for(k in arr){if(k===k1&&cb(arr[k],arr1[k1])===0){if(i===arglm2){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_uintersect_uassoc(arr1){var retArr={},arglm1=arguments.length-1,arglm2=arglm1-1,cb=arguments[arglm1],cb0=arguments[arglm2],k1='',i=1,k='',arr={};cb=(typeof cb==='string')?this.window[cb]:(Object.prototype.toString.call(cb)==='[object Array]')?this.window[cb[0]][cb[1]]:cb;cb0=(typeof cb0==='string')?this.window[cb0]:(Object.prototype.toString.call(cb0)==='[object Array]')?this.window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1){arrs:for(i=1;i<arglm2;i++){arr=arguments[i];for(k in arr){if(cb0(arr[k],arr1[k1])===0&&cb(k,k1)===0){if(i===arguments.length-3){retArr[k1]=arr1[k1];}
continue arrs;}}
continue arr1keys;}}
return retArr;}
function array_unique(inputArr){var key='',tmp_arr2={},val='';var __array_search=function(needle,haystack){var fkey='';for(fkey in haystack){if(haystack.hasOwnProperty(fkey)){if((haystack[fkey]+'')===(needle+'')){return fkey;}}}
return false;};for(key in inputArr){if(inputArr.hasOwnProperty(key)){val=inputArr[key];if(false===__array_search(val,tmp_arr2)){tmp_arr2[key]=val;}}}
return tmp_arr2;}
function array_unshift(array){var i=arguments.length;while(--i!==0){arguments[0].unshift(arguments[i]);}
return arguments[0].length;}
function array_values(input){var tmp_arr=[],key='';if(input&&typeof input==='object'&&input.change_key_case){return input.values();}
for(key in input){tmp_arr[tmp_arr.length]=input[key];}
return tmp_arr;}
function array_walk(array,funcname,userdata){var key;if(typeof array!=='object'||array===null){return false;}
for(key in array){if(typeof(userdata)!=='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function array_walk_recursive(array,funcname,userdata){var key;if(typeof array!='object'){return false;}
for(key in array){if(typeof array[key]=='object'){return this.array_walk_recursive(array[key],funcname,userdata);}
if(typeof(userdata)!='undefined'){eval(funcname+'( array [key] , key , userdata  )');}else{eval(funcname+'(  userdata ) ');}}
return true;}
function arsort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function asin(arg){return Math.asin(arg);}
function asinh(arg){return Math.log(arg+Math.sqrt(arg*arg+1));}
function asort(inputArr,sort_flags){var valArr=[],valArrLen=0,k,i,ret,sorter,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0,valArrLen=valArr.length;i<valArrLen;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function atan(arg){return Math.atan(arg);}
function atan2(y,x){return Math.atan2(y,x);}
function atanh(arg){return 0.5*Math.log((1+arg)/(1-arg));}
function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data){return data;}
data+='';do{h1=b64.indexOf(data.charAt(i++));h2=b64.indexOf(data.charAt(i++));h3=b64.indexOf(data.charAt(i++));h4=b64.indexOf(data.charAt(i++));bits=h1<<18|h2<<12|h3<<6|h4;o1=bits>>16&0xff;o2=bits>>8&0xff;o3=bits&0xff;if(h3==64){tmp_arr[ac++]=String.fromCharCode(o1);}else if(h4==64){tmp_arr[ac++]=String.fromCharCode(o1,o2);}else{tmp_arr[ac++]=String.fromCharCode(o1,o2,o3);}}while(i<data.length);dec=tmp_arr.join('');dec=this.utf8_decode(dec);return dec;}
function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data){return data;}
data=this.utf8_encode(data+'');do{o1=data.charCodeAt(i++);o2=data.charCodeAt(i++);o3=data.charCodeAt(i++);bits=o1<<16|o2<<8|o3;h1=bits>>18&0x3f;h2=bits>>12&0x3f;h3=bits>>6&0x3f;h4=bits&0x3f;tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4);}while(i<data.length);enc=tmp_arr.join('');var r=data.length%3;return(r?enc.slice(0,r-3):enc)+'==='.slice(r||3);}
function base_convert(number,frombase,tobase){return parseInt(number+'',frombase|0).toString(tobase|0);}
function bin2hex(s){var i,f=0,a=[];s+='';f=s.length;for(i=0;i<f;i++){a[i]=s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");}
return a.join('');}
function bindec(binary_string){binary_string=(binary_string+'').replace(/[^01]/gi,'');return parseInt(binary_string,2);}
function ceil(value){return Math.ceil(value);}
function checkdate(m,d,y){return m>0&&m<13&&y>0&&y<32768&&d>0&&d<=(new Date(y,m,0)).getDate();}
function chop(str,charlist){return this.rtrim(str,charlist);}
function chr(codePt){if(codePt>0xFFFF){codePt-=0x10000;return String.fromCharCode(0xD800+(codePt>>10),0xDC00+(codePt&0x3FF));}
return String.fromCharCode(codePt);}
function chunk_split(body,chunklen,end){chunklen=parseInt(chunklen,10)||76;end=end||'\r\n';if(chunklen<1){return false;}
return body.match(new RegExp(".{0,"+chunklen+"}","g")).join(end);}
function class_exists(cls){var i='';cls=this.window[cls];if(typeof cls!=='function'){return false;}
for(i in cls.prototype){return true;}
for(i in cls){if(i!=='prototype'){return true;}}
if(cls.toSource&&cls.toSource().match(/this\./)){return true;}
return false;}
function compact(){var matrix={},that=this;var process=function(value){var i=0,l=value.length,key_value='';for(i=0;i<l;i++){key_value=value[i];if(Object.prototype.toString.call(key_value)==='[object Array]'){process(key_value);}else{if(typeof that.window[key_value]!=='undefined'){matrix[key_value]=that.window[key_value];}}}
return true;};process(arguments);return matrix;}
function cos(arg){return Math.cos(arg);}
function cosh(arg){return(Math.exp(arg)+Math.exp(-arg))/2;}
function count(mixed_var,mode){var key,cnt=0;if(mixed_var===null||typeof mixed_var==='undefined'){return 0;}else if(mixed_var.constructor!==Array&&mixed_var.constructor!==Object){return 1;}
if(mode==='COUNT_RECURSIVE'){mode=1;}
if(mode!=1){mode=0;}
for(key in mixed_var){if(mixed_var.hasOwnProperty(key)){cnt++;if(mode==1&&mixed_var[key]&&(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){cnt+=this.count(mixed_var[key],1);}}}
return cnt;}
function count_chars(str,mode){var result={},resultArr=[],i;str=(''+str).split('').sort().join('').match(/(.)\1*/g);if((mode&1)==0){for(i=0;i!=256;i++){result[i]=0;}}
if(mode===2||mode===4){for(i=0;i!=str.length;i+=1){delete result[str[i].charCodeAt(0)];}
for(i in result){result[i]=(mode===4)?String.fromCharCode(i):0;}}else if(mode===3){for(i=0;i!=str.length;i+=1){result[i]=str[i].slice(0,1);}}else{for(i=0;i!=str.length;i+=1){result[str[i].charCodeAt(0)]=str[i].length;}}
if(mode<3){return result;}
for(i in result){resultArr.push(result[i]);}
return resultArr.join('');}
function crc32(str){str=this.utf8_encode(str);var table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";var crc=0;var x=0;var y=0;crc=crc^(-1);for(var i=0,iTop=str.length;i<iTop;i++){y=(crc^str.charCodeAt(i))&0xFF;x="0x"+table.substr(y*9,8);crc=(crc>>>8)^x;}
return crc^(-1);}
function date(format,timestamp){var that=this,jsdate,f,formatChr=/\\?([a-z])/gi,formatChrCb,_pad=function(n,c){if((n=n+'').length<c){return new Array((++c)-n.length).join('0')+n;}
return n;},txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];formatChrCb=function(t,s){return f[t]?f[t]():s;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j();return j>4&&j<21?'th':{1:'st',2:'nd',3:'rd'}[j%10]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5)+1;},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){return new Date(f.Y(),1,29).getMonth()===1|0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?-1:n===1&&W>9);},Y:function(){return jsdate.getFullYear();},y:function(){return(f.Y()+"").slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return 0+((a-c)!==(b-d));},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\Th:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate.getTime()/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=((typeof timestamp==='undefined')?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}
function decbin(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(2);}
function dechex(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(16);}
function decoct(number){if(number<0){number=0xFFFFFFFF+number+1;}
return parseInt(number,10).toString(8);}
function deg2rad(angle){return(angle/180)*Math.PI;}
function doubleval(mixed_var){return this.floatval(mixed_var);}
function echo(){var arg='',argc=arguments.length,argv=arguments,i=0,holder,win=this.window,d=win.document,ns_xhtml='http://www.w3.org/1999/xhtml',ns_xul='http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';var stringToDOM=function(str,parent,ns,container){var extraNSs='';if(ns===ns_xul){extraNSs=' xmlns:html="'+ns_xhtml+'"';}
var stringContainer='<'+container+' xmlns="'+ns+'"'+extraNSs+'>'+str+'</'+container+'>';var dils=win.DOMImplementationLS,dp=win.DOMParser,ax=win.ActiveXObject;if(dils&&dils.createLSInput&&dils.createLSParser){var lsInput=dils.createLSInput();lsInput.stringData=stringContainer;var lsParser=dils.createLSParser(1,null);return lsParser.parse(lsInput).firstChild;}else if(dp){try{var fc=new dp().parseFromString(stringContainer,'text/xml');if(fc&&fc.documentElement&&fc.documentElement.localName!=='parsererror'&&fc.documentElement.namespaceURI!=='http://www.mozilla.org/newlayout/xml/parsererror.xml'){return fc.documentElement.firstChild;}}catch(e){}}else if(ax){var axo=new ax('MSXML2.DOMDocument');axo.loadXML(str);return axo.documentElement;}
if(d.createElementNS&&(d.documentElement.namespaceURI||d.documentElement.nodeName.toLowerCase()!=='html'||(d.contentType&&d.contentType!=='text/html'))){holder=d.createElementNS(ns,container);}else{holder=d.createElement(container);}
holder.innerHTML=str;while(holder.firstChild){parent.appendChild(holder.firstChild);}
return false;};var ieFix=function(node){if(node.nodeType===1){var newNode=d.createElement(node.nodeName);var i,len;if(node.attributes&&node.attributes.length>0){for(i=0,len=node.attributes.length;i<len;i++){newNode.setAttribute(node.attributes[i].nodeName,node.getAttribute(node.attributes[i].nodeName));}}
if(node.childNodes&&node.childNodes.length>0){for(i=0,len=node.childNodes.length;i<len;i++){newNode.appendChild(ieFix(node.childNodes[i]));}}
return newNode;}else{return d.createTextNode(node.nodeValue);}};var replacer=function(s,m1,m2){if(m1!=='\\'){return m1+eval(m2);}else{return s;}};this.php_js=this.php_js||{};var phpjs=this.php_js,ini=phpjs.ini,obs=phpjs.obs;for(i=0;i<argc;i++){arg=argv[i];if(ini&&ini['phpjs.echo_embedded_vars']){arg=arg.replace(/(.?)\{?\$(\w*?\}|\w*)/g,replacer);}
if(!phpjs.flushing&&obs&&obs.length){obs[obs.length-1].buffer+=arg;continue;}
if(d.appendChild){if(d.body){if(win.navigator.appName==='Microsoft Internet Explorer'){d.body.appendChild(stringToDOM(ieFix(arg)));}else{var unappendedLeft=stringToDOM(arg,d.body,ns_xhtml,'div').cloneNode(true);if(unappendedLeft){d.body.appendChild(unappendedLeft);}}}else{d.documentElement.appendChild(stringToDOM(arg,d.documentElement,ns_xul,'description'));}}else if(d.write){d.write(arg);}}}
function end(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){var ct=0;for(var k in arr){ct++;var val=arr[k];}
if(ct===0){return false;}
pointers[arrpos+1]=ct-1;return val;}
if(arr.length===0){return false;}
pointers[arrpos+1]=arr.length-1;return arr[pointers[arrpos+1]];}
function exp(arg){return Math.exp(arg);}
function explode(delimiter,string,limit){var emptyArray={0:''};if(arguments.length<2||typeof arguments[0]=='undefined'||typeof arguments[1]=='undefined'){return null;}
if(delimiter===''||delimiter===false||delimiter===null){return false;}
if(typeof delimiter=='function'||typeof delimiter=='object'||typeof string=='function'||typeof string=='object'){return emptyArray;}
if(delimiter===true){delimiter='1';}
if(!limit){return string.toString().split(delimiter.toString());}
var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}
function expm1(x){var ret=0,n=50;var factorial=function factorial(n){if((n===0)||(n===1)){return 1;}else{var result=(n*factorial(n-1));return result;}};for(var i=1;i<n;i++){ret+=Math.pow(x,i)/factorial(i);}
return ret;}
function floatval(mixed_var){return(parseFloat(mixed_var)||0);}
function floor(value){return Math.floor(value);}
function fmod(x,y){var tmp,tmp2,p=0,pY=0,l=0.0,l2=0.0;tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/);p=parseInt(tmp[2],10)-(tmp[1]+'').length;tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/);pY=parseInt(tmp[2],10)-(tmp[1]+'').length;if(pY>p){p=pY;}
tmp2=(x%y);if(p<-100||p>20){l=Math.round(Math.log(tmp2)/Math.log(10));l2=Math.pow(10,l);return(tmp2/l2).toFixed(l-p)*l2;}else{return parseFloat(tmp2.toFixed(-p));}}
function get_class(obj){if(obj&&typeof obj==='object'&&Object.prototype.toString.call(obj)!=='[object Array]'&&obj.constructor&&obj!=this.window){var arr=obj.constructor.toString().match(/function\s*(\w+)/);if(arr&&arr.length==2){return arr[1];}}
return false;}
function get_defined_vars(){var i='',arr=[],already={};for(i in this.window){try{if(typeof this.window[i]==='object'){for(var j in this.window[i]){if(this.window[j]&&!already[j]){already[j]=1;arr.push(j);}}}else if(!already[i]){already[i]=1;arr.push(i);}}catch(e){if(!already[i]){already[i]=1;arr.push(i);}}}
return arr;}
function get_headers(url,format){var req=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(!req){throw new Error('XMLHttpRequest not supported');}
var tmp,headers,pair,i,j=0;req.open('HEAD',url,false);req.send(null);if(req.readyState<3){return false;}
tmp=req.getAllResponseHeaders();tmp=tmp.split('\n');tmp=this.array_filter(tmp,function(value){return value.substring(1)!=='';});headers=format?{}:[];for(i in tmp){if(format){pair=tmp[i].split(':');headers[pair.splice(0,1)]=pair.join(':').substring(1);}else{headers[j++]=tmp[i];}}
return headers;}
function get_html_translation_table(table,quote_style){var entities={},hash_map={},decimal;var constMappingTable={},constMappingQuoteStyle={};var useTable={},useQuoteStyle={};constMappingTable[0]='HTML_SPECIALCHARS';constMappingTable[1]='HTML_ENTITIES';constMappingQuoteStyle[0]='ENT_NOQUOTES';constMappingQuoteStyle[2]='ENT_COMPAT';constMappingQuoteStyle[3]='ENT_QUOTES';useTable=!isNaN(table)?constMappingTable[table]:table?table.toUpperCase():'HTML_SPECIALCHARS';useQuoteStyle=!isNaN(quote_style)?constMappingQuoteStyle[quote_style]:quote_style?quote_style.toUpperCase():'ENT_COMPAT';if(useTable!=='HTML_SPECIALCHARS'&&useTable!=='HTML_ENTITIES'){throw new Error("Table: "+useTable+' not supported');}
entities['38']='&amp;';if(useTable==='HTML_ENTITIES'){entities['160']='&nbsp;';entities['161']='&iexcl;';entities['162']='&cent;';entities['163']='&pound;';entities['164']='&curren;';entities['165']='&yen;';entities['166']='&brvbar;';entities['167']='&sect;';entities['168']='&uml;';entities['169']='&copy;';entities['170']='&ordf;';entities['171']='&laquo;';entities['172']='&not;';entities['173']='&shy;';entities['174']='&reg;';entities['175']='&macr;';entities['176']='&deg;';entities['177']='&plusmn;';entities['178']='&sup2;';entities['179']='&sup3;';entities['180']='&acute;';entities['181']='&micro;';entities['182']='&para;';entities['183']='&middot;';entities['184']='&cedil;';entities['185']='&sup1;';entities['186']='&ordm;';entities['187']='&raquo;';entities['188']='&frac14;';entities['189']='&frac12;';entities['190']='&frac34;';entities['191']='&iquest;';entities['192']='&Agrave;';entities['193']='&Aacute;';entities['194']='&Acirc;';entities['195']='&Atilde;';entities['196']='&Auml;';entities['197']='&Aring;';entities['198']='&AElig;';entities['199']='&Ccedil;';entities['200']='&Egrave;';entities['201']='&Eacute;';entities['202']='&Ecirc;';entities['203']='&Euml;';entities['204']='&Igrave;';entities['205']='&Iacute;';entities['206']='&Icirc;';entities['207']='&Iuml;';entities['208']='&ETH;';entities['209']='&Ntilde;';entities['210']='&Ograve;';entities['211']='&Oacute;';entities['212']='&Ocirc;';entities['213']='&Otilde;';entities['214']='&Ouml;';entities['215']='&times;';entities['216']='&Oslash;';entities['217']='&Ugrave;';entities['218']='&Uacute;';entities['219']='&Ucirc;';entities['220']='&Uuml;';entities['221']='&Yacute;';entities['222']='&THORN;';entities['223']='&szlig;';entities['224']='&agrave;';entities['225']='&aacute;';entities['226']='&acirc;';entities['227']='&atilde;';entities['228']='&auml;';entities['229']='&aring;';entities['230']='&aelig;';entities['231']='&ccedil;';entities['232']='&egrave;';entities['233']='&eacute;';entities['234']='&ecirc;';entities['235']='&euml;';entities['236']='&igrave;';entities['237']='&iacute;';entities['238']='&icirc;';entities['239']='&iuml;';entities['240']='&eth;';entities['241']='&ntilde;';entities['242']='&ograve;';entities['243']='&oacute;';entities['244']='&ocirc;';entities['245']='&otilde;';entities['246']='&ouml;';entities['247']='&divide;';entities['248']='&oslash;';entities['249']='&ugrave;';entities['250']='&uacute;';entities['251']='&ucirc;';entities['252']='&uuml;';entities['253']='&yacute;';entities['254']='&thorn;';entities['255']='&yuml;';}
if(useQuoteStyle!=='ENT_NOQUOTES'){entities['34']='&quot;';}
if(useQuoteStyle==='ENT_QUOTES'){entities['39']='&#39;';}
entities['60']='&lt;';entities['62']='&gt;';for(decimal in entities){if(entities.hasOwnProperty(decimal)){hash_map[String.fromCharCode(decimal)]=entities[decimal];}}
return hash_map;}
function getdate(timestamp){var _w=['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];var _m=['January','February','March','April','May','June','July','August','September','October','November','December'];var d=((typeof(timestamp)=='undefined')?new Date():(typeof(timestamp)=='object')?new Date(timestamp):new Date(timestamp*1000));var w=d.getDay();var m=d.getMonth();var y=d.getFullYear();var r={};r.seconds=d.getSeconds();r.minutes=d.getMinutes();r.hours=d.getHours();r.mday=d.getDate();r.wday=w;r.mon=m+1;r.year=y;r.yday=Math.floor((d-(new Date(y,0,1)))/86400000);r.weekday=_w[w]+'day';r.month=_m[m];r['0']=parseInt(d.getTime()/1000,10);return r;}
function getrandmax(){return 2147483647;}
function hexdec(hex_string){hex_string=(hex_string+'').replace(/[^a-f0-9]/gi,'');return parseInt(hex_string,16);}
function html_entity_decode(string,quote_style){var hash_map={},symbol='',tmp_str='',entity='';tmp_str=string.toString();if(false===(hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style))){return false;}
delete(hash_map['&']);hash_map['&']='&amp;';for(symbol in hash_map){entity=hash_map[symbol];tmp_str=tmp_str.split(entity).join(symbol);}
tmp_str=tmp_str.split('&#039;').join("'");return tmp_str;}
function htmlentities(string,quote_style,charset,double_encode){var hash_map=this.get_html_translation_table('HTML_ENTITIES',quote_style),symbol='';string=string==null?'':string+'';if(!hash_map){return false;}
if(quote_style&&quote_style==='ENT_QUOTES'){hash_map["'"]='&#039;';}
if(!!double_encode||double_encode==null){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){string=string.split(symbol).join(hash_map[symbol]);}}}else{string=string.replace(/([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g,function(ignore,text,entity){for(symbol in hash_map){if(hash_map.hasOwnProperty(symbol)){text=text.split(symbol).join(hash_map[symbol]);}}
return text+entity;});}
return string;}
function htmlspecialchars(string,quote_style,charset,double_encode){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'||quote_style===null){quote_style=2;}
string=string.toString();if(double_encode!==false){string=string.replace(/&/g,'&amp;');}
string=string.replace(/</g,'&lt;').replace(/>/g,'&gt;');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}
else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/'/g,'&#039;');}
if(!noquotes){string=string.replace(/"/g,'&quot;');}
return string;}
function htmlspecialchars_decode(string,quote_style){var optTemp=0,i=0,noquotes=false;if(typeof quote_style==='undefined'){quote_style=2;}
string=string.toString().replace(/&lt;/g,'<').replace(/&gt;/g,'>');var OPTS={'ENT_NOQUOTES':0,'ENT_HTML_QUOTE_SINGLE':1,'ENT_HTML_QUOTE_DOUBLE':2,'ENT_COMPAT':2,'ENT_QUOTES':3,'ENT_IGNORE':4};if(quote_style===0){noquotes=true;}
if(typeof quote_style!=='number'){quote_style=[].concat(quote_style);for(i=0;i<quote_style.length;i++){if(OPTS[quote_style[i]]===0){noquotes=true;}else if(OPTS[quote_style[i]]){optTemp=optTemp|OPTS[quote_style[i]];}}
quote_style=optTemp;}
if(quote_style&OPTS.ENT_HTML_QUOTE_SINGLE){string=string.replace(/&#0*39;/g,"'");}
if(!noquotes){string=string.replace(/&quot;/g,'"');}
string=string.replace(/&amp;/g,'&');return string;}
function http_build_query(formdata,numeric_prefix,arg_separator){var value,key,tmp=[],that=this;var _http_build_query_helper=function(key,val,arg_separator){var k,tmp=[];if(val===true){val="1";}else if(val===false){val="0";}
if(val!==null&&typeof(val)==="object"){for(k in val){if(val[k]!==null){tmp.push(_http_build_query_helper(key+"["+k+"]",val[k],arg_separator));}}
return tmp.join(arg_separator);}else if(typeof(val)!=="function"){return that.urlencode(key)+"="+that.urlencode(val);}else{throw new Error('There was an error processing for http_build_query().');}};if(!arg_separator){arg_separator="&";}
for(key in formdata){value=formdata[key];if(numeric_prefix&&!isNaN(key)){key=String(numeric_prefix)+key;}
tmp.push(_http_build_query_helper(key,value,arg_separator));}
return tmp.join(arg_separator);}
function hypot(x,y){return Math.sqrt(x*x+y*y)||0;}
function implode(glue,pieces){var i='',retVal='',tGlue='';if(arguments.length===1){pieces=glue;glue='';}
if(typeof(pieces)==='object'){if(Object.prototype.toString.call(pieces)==='[object Array]'){return pieces.join(glue);}
for(i in pieces){retVal+=tGlue+pieces[i];tGlue=glue;}
return retVal;}
return pieces;}
function in_array(needle,haystack,argStrict){var key='',strict=!!argStrict;if(strict){for(key in haystack){if(haystack[key]===needle){return true;}}}else{for(key in haystack){if(haystack[key]==needle){return true;}}}
return false;}
function intval(mixed_var,base){var tmp;var type=typeof(mixed_var);if(type==='boolean'){return+mixed_var;}else if(type==='string'){tmp=parseInt(mixed_var,base||10);return(isNaN(tmp)||!isFinite(tmp))?0:tmp;}else if(type==='number'&&isFinite(mixed_var)){return mixed_var|0;}else{return 0;}}
function ip2long(IP){var i=0;IP=IP.match(/^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i);if(!IP){return false;}
IP[0]=0;for(i=1;i<5;i+=1){IP[0]+=!!((IP[i]||'').length);IP[i]=parseInt(IP[i])||0;}
IP.push(256,256,256,256);IP[4+IP[0]]*=Math.pow(256,4-IP[0]);if(IP[1]>=IP[5]||IP[2]>=IP[6]||IP[3]>=IP[7]||IP[4]>=IP[8]){return false;}
return IP[1]*(IP[0]===1||16777216)+IP[2]*(IP[0]<=2||65536)+IP[3]*(IP[0]<=3||256)+IP[4]*1;}
function is_bool(mixed_var){return(typeof mixed_var==='boolean');}
function is_double(mixed_var){return this.is_float(mixed_var);}
function is_finite(val){var warningType='';if(val===Infinity||val===-Infinity){return false;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_finite() expects parameter 1 to be double, '+warningType+' given');}
return true;}
function is_float(mixed_var){return+mixed_var===mixed_var&&!!(mixed_var%1);}
function is_infinite(val){var warningType='';if(val===Infinity||val===-Infinity){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_infinite() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_int(mixed_var){return mixed_var===~~mixed_var;}
function is_integer(mixed_var){return this.is_int(mixed_var);}
function is_long(mixed_var){return this.is_float(mixed_var);}
function is_nan(val){var warningType='';if(typeof val=='number'&&isNaN(val)){return true;}
if(typeof val=='object'){warningType=(Object.prototype.toString.call(val)==='[object Array]'?'array':'object');}
else if(typeof val=='string'&&!val.match(/^[\+\-]?\d/)){warningType='string';}
if(warningType){throw new Error('Warning: is_nan() expects parameter 1 to be double, '+warningType+' given');}
return false;}
function is_null(mixed_var){return(mixed_var===null);}
function is_numeric(mixed_var){return(typeof(mixed_var)==='number'||typeof(mixed_var)==='string')&&mixed_var!==''&&!isNaN(mixed_var);}
function is_real(mixed_var){return this.is_float(mixed_var);}
function is_scalar(mixed_var){return(/boolean|number|string/).test(typeof mixed_var);}
function is_string(mixed_var){return(typeof(mixed_var)=='string');}
function join(glue,pieces){return this.implode(glue,pieces);}
function json_decode(str_json){var json=this.window.JSON;if(typeof json==='object'&&typeof json.parse==='function'){try{return json.parse(str_json);}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_decode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var j;var text=str_json;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return j;}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}
function json_encode(mixed_val){var retVal,json=this.window.JSON;try{if(typeof json==='object'&&typeof json.stringify==='function'){retVal=json.stringify(mixed_val);if(retVal===undefined){throw new SyntaxError('json_encode');}
return retVal;}
var value=mixed_val;var quote=function(string){var escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';};var str=function(key,holder){var gap='';var indent='    ';var i=0;var k='';var v='';var length=0;var mind=gap;var partial=[];var value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
if((this.PHPJS_Resource&&value instanceof this.PHPJS_Resource)||(window.PHPJS_Resource&&value instanceof window.PHPJS_Resource)){throw new SyntaxError('json_encode');}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;case'undefined':case'function':default:throw new SyntaxError('json_encode');}};return str('',{'':value});}catch(err){if(!(err instanceof SyntaxError)){throw new Error('Unexpected error type in json_encode()');}
this.php_js=this.php_js||{};this.php_js.last_error_json=4;return null;}}
function krsort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function ksort(inputArr,sort_flags){var tmp_arr={},keys=[],sorter,i,k,that=this,strictForIn=false,populateArr={};switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return((a+0)-(b+0));};break;default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
keys.sort(sorter);this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function lcfirst(str){str+='';var f=str.charAt(0).toLowerCase();return f+str.substr(1);}
function lcg_value(){return Math.random();}
function levenshtein(s1,s2){if(s1==s2){return 0;}
var s1_len=s1.length;var s2_len=s2.length;if(s1_len===0){return s2_len;}
if(s2_len===0){return s1_len;}
var split=false;try{split=!('0')[0];}catch(e){split=true;}
if(split){s1=s1.split('');s2=s2.split('');}
var v0=new Array(s1_len+1);var v1=new Array(s1_len+1);var s1_idx=0,s2_idx=0,cost=0;for(s1_idx=0;s1_idx<s1_len+1;s1_idx++){v0[s1_idx]=s1_idx;}
var char_s1='',char_s2='';for(s2_idx=1;s2_idx<=s2_len;s2_idx++){v1[0]=s2_idx;char_s2=s2[s2_idx-1];for(s1_idx=0;s1_idx<s1_len;s1_idx++){char_s1=s1[s1_idx];cost=(char_s1==char_s2)?0:1;var m_min=v0[s1_idx+1]+1;var b=v1[s1_idx]+1;var c=v0[s1_idx]+cost;if(b<m_min){m_min=b;}
if(c<m_min){m_min=c;}
v1[s1_idx+1]=m_min;}
var v_tmp=v0;v0=v1;v1=v_tmp;}
return v0[s1_len];}
function log(arg,base){return(typeof base==='undefined')?Math.log(arg):Math.log(arg)/Math.log(base);}
function log10(arg){return Math.log(arg)/2.302585092994046;}
function log1p(x){var ret=0,n=50;if(x<=-1){return'-INF';}
if(x<0||x>1){return Math.log(1+x);}
for(var i=1;i<n;i++){if((i%2)===0){ret-=Math.pow(x,i)/i;}else{ret+=Math.pow(x,i)/i;}}
return ret;}
function long2ip(proper_address){var output=false;if(!isNaN(proper_address)&&(proper_address>=0||proper_address<=4294967295)){output=Math.floor(proper_address/Math.pow(256,3))+'.'+Math.floor((proper_address%Math.pow(256,3))/Math.pow(256,2))+'.'+Math.floor(((proper_address%Math.pow(256,3))%Math.pow(256,2))/Math.pow(256,1))+'.'+Math.floor((((proper_address%Math.pow(256,3))%Math.pow(256,2))%Math.pow(256,1))/Math.pow(256,0));}
return output;}
function ltrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');var re=new RegExp('^['+charlist+']+','g');return(str+'').replace(re,'');}
function max(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
else{var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;}},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to max()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for max()');}
if(ar.length===0){throw new Error('Array must contain at least one element for max()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==1){retVal=ar[i];}}
return retVal;}
function md5(str){var xl;var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4){return(lResult^0x80000000^lX8^lY8);}
if(lX4|lY4){if(lResult&0x40000000){return(lResult^0xC0000000^lX8^lY8);}else{return(lResult^0x40000000^lX8^lY8);}}else{return(lResult^lX8^lY8);}};var _F=function(x,y,z){return(x&y)|((~x)&z);};var _G=function(x,y,z){return(x&z)|(y&(~z));};var _H=function(x,y,z){return(x^y^z);};var _I=function(x,y,z){return(y^(x|(~z)));};var _FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var _II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(_I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b);};var convertToWordArray=function(str){var lWordCount;var lMessageLength=str.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=new Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(str.charCodeAt(lByteCount)<<lBytePosition));lByteCount++;}
lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray;};var wordToHex=function(lValue){var wordToHexValue="",wordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;wordToHexValue_temp="0"+lByte.toString(16);wordToHexValue=wordToHexValue+wordToHexValue_temp.substr(wordToHexValue_temp.length-2,2);}
return wordToHexValue;};var x=[],k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21;str=this.utf8_encode(str);x=convertToWordArray(str);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;xl=x.length;for(k=0;k<xl;k+=16){AA=a;BB=b;CC=c;DD=d;a=_FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=_FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=_FF(c,d,a,b,x[k+2],S13,0x242070DB);b=_FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=_FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=_FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=_FF(c,d,a,b,x[k+6],S13,0xA8304613);b=_FF(b,c,d,a,x[k+7],S14,0xFD469501);a=_FF(a,b,c,d,x[k+8],S11,0x698098D8);d=_FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=_FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=_FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=_FF(a,b,c,d,x[k+12],S11,0x6B901122);d=_FF(d,a,b,c,x[k+13],S12,0xFD987193);c=_FF(c,d,a,b,x[k+14],S13,0xA679438E);b=_FF(b,c,d,a,x[k+15],S14,0x49B40821);a=_GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=_GG(d,a,b,c,x[k+6],S22,0xC040B340);c=_GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=_GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=_GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=_GG(d,a,b,c,x[k+10],S22,0x2441453);c=_GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=_GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=_GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=_GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=_GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=_GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=_GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=_GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=_GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=_GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=_HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=_HH(d,a,b,c,x[k+8],S32,0x8771F681);c=_HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=_HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=_HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=_HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=_HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=_HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=_HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=_HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=_HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=_HH(b,c,d,a,x[k+6],S34,0x4881D05);a=_HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=_HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=_HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=_HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=_II(a,b,c,d,x[k+0],S41,0xF4292244);d=_II(d,a,b,c,x[k+7],S42,0x432AFF97);c=_II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=_II(b,c,d,a,x[k+5],S44,0xFC93A039);a=_II(a,b,c,d,x[k+12],S41,0x655B59C3);d=_II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=_II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=_II(b,c,d,a,x[k+1],S44,0x85845DD1);a=_II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=_II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=_II(c,d,a,b,x[k+6],S43,0xA3014314);b=_II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=_II(a,b,c,d,x[k+4],S41,0xF7537E82);d=_II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=_II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=_II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD);}
var temp=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return temp.toLowerCase();}
function method_exists(obj,method){if(typeof obj==='string'){return this.window[obj]&&typeof this.window[obj][method]==='function';}
return typeof obj[method]==='function';}
function microtime(get_as_float){var now=new Date().getTime()/1000;var s=parseInt(now,10);return(get_as_float)?now:(Math.round((now-s)*1000)/1000)+' '+s;}
function min(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(Object.prototype.toString.call(obj)==='[object Array]'){return obj;}
var ar=[];for(var i in obj){if(obj.hasOwnProperty(i)){ar.push(obj[i]);}}
return ar;},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next){return 0;}
else if(typeof current==='object'){if(typeof next==='object'){current=_obj2Array(current);next=_obj2Array(next);cl=current.length;nl=next.length;if(nl>cl){return 1;}
else if(nl<cl){return-1;}
for(i=0,n=cl;i<n;++i){tmp=_compare(current[i],next[i]);if(tmp==1){return 1;}
else if(tmp==-1){return-1;}}
return 0;}
return-1;}
else if(typeof next=='object'){return 1;}
else if(isNaN(next)&&!isNaN(current)){if(current==0){return 0;}
return(current<0?1:-1);}
else if(isNaN(current)&&!isNaN(next)){if(next==0){return 0;}
return(next>0?1:-1);}
if(next==current){return 0;}
return(next>current?1:-1);};if(argc===0){throw new Error('At least one value should be passed to min()');}
else if(argc===1){if(typeof argv[0]==='object'){ar=_obj2Array(argv[0]);}
else{throw new Error('Wrong parameter count for min()');}
if(ar.length===0){throw new Error('Array must contain at least one element for min()');}}
else{ar=argv;}
retVal=ar[0];for(i=1,n=ar.length;i<n;++i){if(_compare(retVal,ar[i])==-1){retVal=ar[i];}}
return retVal;}
function mktime(){var d=new Date(),r=arguments,i=0,e=['Hours','Minutes','Seconds','Month','Date','FullYear'];for(i=0;i<e.length;i++){if(typeof r[i]==='undefined'){r[i]=d['get'+e[i]]();r[i]+=(i===3);}else{r[i]=parseInt(r[i],10);if(isNaN(r[i])){return false;}}}
r[5]+=(r[5]>=0?(r[5]<=69?2e3:(r[5]<=100?1900:0)):0);d.setFullYear(r[5],r[3]-1,r[4]);d.setHours(r[0],r[1],r[2]);return(d.getTime()/1e3>>0)-(d.getTime()<0);}
function mt_getrandmax(){return 2147483647;}
function mt_rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function natcasesort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcasecmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function natsort(inputArr){var valArr=[],k,i,ret,that=this,strictForIn=false,populateArr={};this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return that.strnatcmp(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function nl2br(str,is_xhtml){var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br />':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2');}
function number_format(number,decimals,dec_point,thousands_sep){number=(number+'').replace(/[^0-9+\-Ee.]/g,'');var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=(typeof thousands_sep==='undefined')?',':thousands_sep,dec=(typeof dec_point==='undefined')?'.':dec_point,s='',toFixedFix=function(n,prec){var k=Math.pow(10,prec);return''+Math.round(n*k)/k;};s=(prec?toFixedFix(n,prec):''+Math.round(n)).split('.');if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep);}
if((s[1]||'').length<prec){s[1]=s[1]||'';s[1]+=new Array(prec-s[1].length+1).join('0');}
return s.join(dec);}
function octdec(oct_string){oct_string=(oct_string+'').replace(/[^0-7]/gi,'');return parseInt(oct_string,8);}
function ord(string){var str=string+'',code=str.charCodeAt(0);if(0xD800<=code&&code<=0xDBFF){var hi=code;if(str.length===1){return code;}
var low=str.charCodeAt(1);return((hi-0xD800)*0x400)+(low-0xDC00)+0x10000;}
if(0xDC00<=code&&code<=0xDFFF){return code;}
return code;}
function parse_str(str,array){var glue1='=',glue2='&',array2=String(str).replace(/^&?([\s\S]*?)&?$/,'$1').split(glue2),i,j,chr,tmp,key,value,bracket,keys,evalStr,that=this,fixStr=function(str){return that.urldecode(str).replace(/([\\"'])/g,'\\$1').replace(/\n/g,'\\n').replace(/\r/g,'\\r');};if(!array){array=this.window;}
for(i=0;i<array2.length;i++){tmp=array2[i].split(glue1);if(tmp.length<2){tmp=[tmp,''];}
key=fixStr(tmp[0]);value=fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.substr(1);}
if(key.indexOf('\0')!==-1){key=key.substr(0,key.indexOf('\0'));}
if(key&&key.charAt(0)!=='['){keys=[];bracket=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!bracket){bracket=j+1;}else if(key.charAt(j)===']'){if(bracket){if(!keys.length){keys.push(key.substr(0,bracket-1));}
keys.push(key.substr(bracket,j-bracket));bracket=0;if(key.charAt(j+1)!=='['){break;}}}}
if(!keys.length){keys=[key];}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1);}
if(chr==='['){break;}}
evalStr='array';for(j=0;j<keys.length;j++){key=keys[j];if((key!==''&&key!==' ')||j===0){key="'"+key+"'";}else{key=eval(evalStr+'.push([]);')-1;}
evalStr+='['+key+']';if(j!==keys.length-1&&eval('typeof '+evalStr)==='undefined'){eval(evalStr+' = [];');}}
evalStr+=" = '"+value+"';\n";eval(evalStr);}}}
function parse_url(str,component){var key=['source','scheme','authority','userInfo','user','pass','host','port','relative','path','directory','file','query','fragment'],ini=(this.php_js&&this.php_js.ini)||{},mode=(ini['phpjs.parse_url.mode']&&ini['phpjs.parse_url.mode'].local_value)||'php',parser={php:/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};var m=parser[mode].exec(str),uri={},i=14;while(i--){if(m[i]){uri[key[i]]=m[i];}}
if(component){return uri[component.replace('PHP_URL_','').toLowerCase()];}
if(mode!=='php'){var name=(ini['phpjs.parse_url.queryKey']&&ini['phpjs.parse_url.queryKey'].local_value)||'queryKey';parser=/(?:^|&)([^&=]*)=?([^&]*)/g;uri[name]={};uri[key[12]].replace(parser,function($0,$1,$2){if($1){uri[name][$1]=$2;}});}
delete uri.source;return uri;}
function pi(){return 3.141592653589793;}
function pow(base,exp){return Math.pow(base,exp);}
function preg_grep(pattern,input,flags){var p='',retObj={};var invert=(flags===1||flags==='PREG_GREP_INVERT');if(typeof pattern==='string'){pattern=eval(pattern);}
if(invert){for(p in input){if(input[p].search(pattern)===-1){retObj[p]=input[p];}}}else{for(p in input){if(input[p].search(pattern)!==-1){retObj[p]=input[p];}}}
return retObj;}
function preg_quote(str,delimiter){return(str+'').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\'+(delimiter||'')+'-]','g'),'\\$&');}
function print_r(array,return_val){var output='',pad_char=' ',pad_val=4,d=this.window.document,getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];},repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;},formatArray=function(obj,cur_depth,pad_val,pad_char){if(cur_depth>0){cur_depth++;}
var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str='';if(typeof obj==='object'&&obj!==null&&obj.constructor&&getFuncName(obj.constructor)!=='PHPJS_Resource'){str+='Array\n'+base_pad+'(\n';for(var key in obj){if(Object.prototype.toString.call(obj[key])==='[object Array]'){str+=thick_pad+'['+key+'] => '+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}
else{str+=thick_pad+'['+key+'] => '+obj[key]+'\n';}}
str+=base_pad+')\n';}
else if(obj===null||obj===undefined){str='';}
else{str=obj.toString();}
return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){if(d.body){this.echo(output);}
else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}
return true;}
return output;}
function printf(){var body,elmt,d=this.window.document;var ret='';var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,arguments);elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function property_exists(cls,prop){cls=(typeof cls==='string')?this.window[cls]:cls;if(typeof cls==='function'&&cls.toSource&&cls.toSource().match(new RegExp('this\\.'+prop+'\\s'))){return true;}
return(cls[prop]!==undefined&&typeof cls[prop]!=='function')||(cls.prototype!==undefined&&cls.prototype[prop]!==undefined&&typeof cls.prototype[prop]!=='function')||(cls.constructor&&cls.constructor[prop]!==undefined&&typeof cls.constructor[prop]!=='function');}
function quotemeta(str){return(str+'').replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g,'\\$1');}
function rad2deg(angle){return angle*57.29577951308232;}
function rand(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random()*(max-min+1))+min;}
function range(low,high,step){var matrix=[];var inival,endval,plus;var walker=step||1;var chars=false;if(!isNaN(low)&&!isNaN(high)){inival=low;endval=high;}else if(isNaN(low)&&isNaN(high)){chars=true;inival=low.charCodeAt(0);endval=high.charCodeAt(0);}else{inival=(isNaN(low)?0:low);endval=(isNaN(high)?0:high);}
plus=((inival>endval)?false:true);if(plus){while(inival<=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival+=walker;}}else{while(inival>=endval){matrix.push(((chars)?String.fromCharCode(inival):inival));inival-=walker;}}
return matrix;}
function rawurldecode(str){return decodeURIComponent(str+'');}
function rawurlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A');}
function reset(arr){this.php_js=this.php_js||{};this.php_js.pointers=this.php_js.pointers||[];var indexOf=function(value){for(var i=0,length=this.length;i<length;i++){if(this[i]===value){return i;}}
return-1;};var pointers=this.php_js.pointers;if(!pointers.indexOf){pointers.indexOf=indexOf;}
if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}
var arrpos=pointers.indexOf(arr);if(Object.prototype.toString.call(arr)!=='[object Array]'){for(var k in arr){if(pointers.indexOf(arr)===-1){pointers.push(arr,0);}else{pointers[arrpos+1]=0;}
return arr[k];}
return false;}
if(arr.length===0){return false;}
pointers[arrpos+1]=0;return arr[pointers[arrpos+1]];}
function round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=(value>0)|-(value<0);isHalf=value%1===0.5*sgn;f=Math.floor(value);if(isHalf){switch(mode){case'PHP_ROUND_HALF_DOWN':value=f+(sgn<0);break;case'PHP_ROUND_HALF_EVEN':value=f+(f%2*sgn);break;case'PHP_ROUND_HALF_ODD':value=f+!(f%2);break;default:value=f+(sgn>0);}}
return(isHalf?value:Math.round(value))/m;}
function rsort(inputArr,sort_flags){var valArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(b,a);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(b-a);};break;case'SORT_REGULAR':default:sorter=function(b,a){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function rtrim(str,charlist){charlist=!charlist?' \\s\u00A0':(charlist+'').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'\\$1');var re=new RegExp('['+charlist+']+$','g');return(str+'').replace(re,'');}
function serialize(mixed_value){var _utf8Size=function(str){var size=0,i=0,l=str.length,code='';for(i=0;i<l;i++){code=str.charCodeAt(i);if(code<0x0080){size+=1;}else if(code<0x0800){size+=2;}else{size+=3;}}
return size;};var _getType=function(inp){var type=typeof inp,match;var key;if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(key in types){if(cons==types[key]){type=types[key];break;}}}
return type;};var type=_getType(mixed_value);var val,ktype='';switch(type){case"function":val="";break;case"boolean":val="b:"+(mixed_value?"1":"0");break;case"number":val=(Math.round(mixed_value)==mixed_value?"i":"d")+":"+mixed_value;break;case"string":val="s:"+_utf8Size(mixed_value)+":\""+mixed_value+"\"";break;case"array":case"object":val="a";var count=0;var vals="";var okey;var key;for(key in mixed_value){if(mixed_value.hasOwnProperty(key)){ktype=_getType(mixed_value[key]);if(ktype==="function"){continue;}
okey=(key.match(/^[0-9]+$/)?parseInt(key,10):key);vals+=this.serialize(okey)+this.serialize(mixed_value[key]);count++;}}
val+=":"+count+":{"+vals+"}";break;case"undefined":default:val="N";break;}
if(type!=="object"&&type!=="array"){val+=";";}
return val;}
function setcookie(name,value,expires,path,domain,secure){return this.setrawcookie(name,encodeURIComponent(value),expires,path,domain,secure);}
function setrawcookie(name,value,expires,path,domain,secure){if(typeof expires==='string'&&(/^\d+$/).test(expires)){expires=parseInt(expires,10);}
if(expires instanceof Date){expires=expires.toGMTString();}else if(typeof(expires)==='number'){expires=(new Date(expires*1e3)).toGMTString();}
var r=[name+'='+value],s={},i='';s={expires:expires,path:path,domain:domain};for(i in s){if(s.hasOwnProperty(i)){s[i]&&r.push(i+'='+s[i]);}}
return secure&&r.push('secure'),this.window.document.cookie=r.join(";"),true;}
function settype(vr,type){var is_array=function(arr){return typeof arr==='object'&&typeof arr.length==='number'&&!(arr.propertyIsEnumerable('length'))&&typeof arr.splice==='function';};var v,mtch,i,obj;v=this[vr]?this[vr]:vr;try{switch(type){case'boolean':if(is_array(v)&&v.length===0){this[vr]=false;}else if(v==='0'){this[vr]=false;}else if(typeof v==='object'&&!is_array(v)){var lgth=false;for(i in v){lgth=true;}
this[vr]=lgth;}else{this[vr]=!!v;}
break;case'integer':if(typeof v==='number'){this[vr]=parseInt(v,10);}else if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+)/);if(!mtch){this[vr]=0;}else{this[vr]=parseInt(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'float':if(typeof v==='string'){mtch=v.match(/^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/);if(!mtch){this[vr]=0;}else{this[vr]=parseFloat(v,10);}}else if(v===true){this[vr]=1;}else if(v===false||v===null){this[vr]=0;}else if(is_array(v)&&v.length===0){this[vr]=0;}else if(typeof v==='object'){this[vr]=1;}
break;case'string':if(v===null||v===false){this[vr]='';}else if(is_array(v)){this[vr]='Array';}else if(typeof v==='object'){this[vr]='Object';}else if(v===true){this[vr]='1';}else{this[vr]+='';}
break;case'array':if(v===null){this[vr]=[];}else if(typeof v!=='object'){this[vr]=[v];}
break;case'object':if(v===null){this[vr]={};}else if(is_array(v)){for(i=0,obj={};i<v.length;i++){obj[i]=v;}
this[vr]=obj;}else if(typeof v!=='object'){this[vr]={scalar:v};}
break;case'null':delete this[vr];break;}
return true;}catch(e){return false;}}
function sha1(str){var rotate_left=function(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};var cvt_hex=function(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;str=this.utf8_encode(str);var str_len=str.length;var word_array=[];for(i=0;i<str_len-3;i+=4){j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3);word_array.push(j);}
switch(str_len%4){case 0:i=0x080000000;break;case 1:i=str.charCodeAt(str_len-1)<<24|0x0800000;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|0x08000;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14){word_array.push(0);}
word_array.push(str_len>>>29);word_array.push((str_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}
function shuffle(inputArr){var valArr=[],k='',i=0,strictForIn=false,populateArr=[];for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(){return 0.5-Math.random();});this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function sin(arg){return Math.sin(arg);}
function sinh(arg){return(Math.exp(arg)-Math.exp(-arg))/2;}
function sizeof(mixed_var,mode){return this.count(mixed_var,mode);}
function sort(inputArr,sort_flags){var valArr=[],keyArr=[],k='',i=0,sorter=false,that=this,strictForIn=false,populateArr=[];switch(sort_flags){case'SORT_STRING':sorter=function(a,b){return that.strnatcmp(a,b);};break;case'SORT_LOCALE_STRING':var loc=this.i18n_loc_get_default();sorter=this.php_js.i18nLocales[loc].sorting;break;case'SORT_NUMERIC':sorter=function(a,b){return(a-b);};break;case'SORT_REGULAR':default:sorter=function(a,b){var aFloat=parseFloat(a),bFloat=parseFloat(b),aNumeric=aFloat+''===a,bNumeric=bFloat+''===b;if(aNumeric&&bNumeric){return aFloat>bFloat?1:aFloat<bFloat?-1:0;}else if(aNumeric&&!bNumeric){return 1;}else if(!aNumeric&&bNumeric){return-1;}
return a>b?1:a<b?-1:0;};break;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(sorter);for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function soundex(str){str=(str+'').toUpperCase();if(!str){return'';}
var sdx=[0,0,0,0],m={B:1,F:1,P:1,V:1,C:2,G:2,J:2,K:2,Q:2,S:2,X:2,Z:2,D:3,T:3,L:4,M:5,N:5,R:6},i=0,j,s=0,c,p;while((c=str.charAt(i++))&&s<4){if(j=m[c]){if(j!==p){sdx[s++]=p=j;}}else{s+=i===1;p=0;}}
sdx[0]=str.charAt(0);return sdx.join('');}
function split(delimiter,string){return this.explode(delimiter,string);}
function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;var a=arguments,i=0,format=a[i++];var pad=function(str,len,chr,leftJustify){if(!chr){chr=' ';}
var padding=(str.length>=len)?'':Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str;};var justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;if(diff>0){if(leftJustify||!zeroPad){value=pad(value,minWidth,customPadChar,leftJustify);}else{value=value.slice(0,prefix.length)+pad('',diff,'0',true)+value.slice(prefix.length);}}
return value;};var formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;prefix=prefix&&number&&{'2':'0b','8':'0','16':'0x'}[base]||'';value=prefix+pad(number.toString(base),precision||0,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);};var formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){if(precision!=null){value=value.slice(0,precision);}
return justify(value,'',leftJustify,minWidth,zeroPad,customPadChar);};var doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number;var prefix;var method;var textTransform;var value;if(substring=='%%'){return'%';}
var leftJustify=false,positivePrefix='',zeroPad=false,prefixBaseX=false,customPadChar=' ';var flagsl=flags.length;for(var j=0;flags&&j<flagsl;j++){switch(flags.charAt(j)){case' ':positivePrefix=' ';break;case'+':positivePrefix='+';break;case'-':leftJustify=true;break;case"'":customPadChar=flags.charAt(j+1);break;case'0':zeroPad=true;break;case'#':prefixBaseX=true;break;}}
if(!minWidth){minWidth=0;}else if(minWidth=='*'){minWidth=+a[i++];}else if(minWidth.charAt(0)=='*'){minWidth=+a[minWidth.slice(1,-1)];}else{minWidth=+minWidth;}
if(minWidth<0){minWidth=-minWidth;leftJustify=true;}
if(!isFinite(minWidth)){throw new Error('sprintf: (minimum-)width must be finite');}
if(!precision){precision='fFeE'.indexOf(type)>-1?6:(type=='d')?0:undefined;}else if(precision=='*'){precision=+a[i++];}else if(precision.charAt(0)=='*'){precision=+a[precision.slice(1,-1)];}else{precision=+precision;}
value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++];switch(type){case's':return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case'c':return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case'b':return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'o':return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'x':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'X':return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case'u':return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case'i':case'd':number=(+value)|0;prefix=number<0?'-':positivePrefix;value=prefix+pad(String(Math.abs(number)),precision,'0',false);return justify(value,prefix,leftJustify,minWidth,zeroPad);case'e':case'E':case'f':case'F':case'g':case'G':number=+value;prefix=number<0?'-':positivePrefix;method=['toExponential','toFixed','toPrecision']['efg'.indexOf(type.toLowerCase())];textTransform=['toString','toUpperCase']['eEfFgG'.indexOf(type)%2];value=prefix+Math.abs(number)[method](precision);return justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring;}};return format.replace(regex,doFormat);}
function sql_regcase(str){this.setlocale('LC_ALL',0);var i=0,upper='',lower='',pos=0,retStr='';upper=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.upper;lower=this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.lower;for(i=0;i<str.length;i++){if(((pos=upper.indexOf(str.charAt(i)))!==-1)||((pos=lower.indexOf(str.charAt(i)))!==-1)){retStr+='['+upper.charAt(pos)+lower.charAt(pos)+']';}else{retStr+=str.charAt(i);}}
return retStr;}
function sqrt(arg){return Math.sqrt(arg);}
function str_getcsv(input,delimiter,enclosure,escape){var output=[];var backwards=function(str){return str.split('').reverse().join('');};var pq=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1");};delimiter=delimiter||',';enclosure=enclosure||'"';escape=escape||'\\';input=input.replace(new RegExp('^\\s*'+pq(enclosure)),'').replace(new RegExp(pq(enclosure)+'\\s*$'),'');input=backwards(input).split(new RegExp(pq(enclosure)+'\\s*'+pq(delimiter)+'\\s*'+pq(enclosure)+'(?!'+pq(escape)+')','g')).reverse();for(var i=0;i<input.length;i++){output.push(backwards(input[i]).replace(new RegExp(pq(escape)+pq(enclosure),'g'),enclosure));}
return output;}
function str_ireplace(search,replace,subject){var i,k='';var searchl=0;var reg;var escapeRegex=function(s){return s.replace(/([\\\^\$*+\[\]?{}.=!:(|)])/g,'\\$1');};search+='';searchl=search.length;if(Object.prototype.toString.call(replace)!=='[object Array]'){replace=[replace];if(Object.prototype.toString.call(search)==='[object Array]'){while(searchl>replace.length){replace[replace.length]=replace[0];}}}
if(Object.prototype.toString.call(search)!=='[object Array]'){search=[search];}
while(search.length>replace.length){replace[replace.length]='';}
if(Object.prototype.toString.call(subject)==='[object Array]'){for(k in subject){if(subject.hasOwnProperty(k)){subject[k]=str_ireplace(search,replace,subject[k]);}}
return subject;}
searchl=search.length;for(i=0;i<searchl;i++){reg=new RegExp(escapeRegex(search[i]),'gi');subject=subject.replace(reg,replace[i]);}
return subject;}
function str_pad(input,pad_length,pad_string,pad_type){var half='',pad_to_go;var str_pad_repeater=function(s,len){var collect='',i;while(collect.length<len){collect+=s;}
collect=collect.substr(0,len);return collect;};input+='';pad_string=pad_string!==undefined?pad_string:' ';if(pad_type!='STR_PAD_LEFT'&&pad_type!='STR_PAD_RIGHT'&&pad_type!='STR_PAD_BOTH'){pad_type='STR_PAD_RIGHT';}
if((pad_to_go=pad_length-input.length)>0){if(pad_type=='STR_PAD_LEFT'){input=str_pad_repeater(pad_string,pad_to_go)+input;}else if(pad_type=='STR_PAD_RIGHT'){input=input+str_pad_repeater(pad_string,pad_to_go);}else if(pad_type=='STR_PAD_BOTH'){half=str_pad_repeater(pad_string,Math.ceil(pad_to_go/2));input=half+input+half;input=input.substr(0,pad_length);}}
return input;}
function str_repeat(input,multiplier){return new Array(multiplier+1).join(input);}
function str_replace(search,replace,subject,count){var i=0,j=0,temp='',repl='',sl=0,fl=0,f=[].concat(search),r=[].concat(replace),s=subject,ra=Object.prototype.toString.call(r)==='[object Array]',sa=Object.prototype.toString.call(s)==='[object Array]';s=[].concat(s);if(count){this.window[count]=0;}
for(i=0,sl=s.length;i<sl;i++){if(s[i]===''){continue;}
for(j=0,fl=f.length;j<fl;j++){temp=s[i]+'';repl=ra?(r[j]!==undefined?r[j]:''):r[0];s[i]=(temp).split(f[j]).join(repl);if(count&&s[i]!==temp){this.window[count]+=(temp.length-s[i].length)/f[j].length;}}}
return sa?s:s[0];}
function str_rot13(str){return(str+'').replace(/[a-z]/gi,function(s){return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13));});}
function str_shuffle(str){if(str==undefined){throw'Wrong parameter count for str_shuffle()';}
var getRandomInt=function(max){return Math.floor(Math.random()*(max+1));};var newStr='',rand=0;while(str.length){rand=getRandomInt(str.length-1);newStr+=str.charAt(rand);str=str.substring(0,rand)+str.substr(rand+1);}
return newStr;}
function str_split(string,split_length){if(split_length===null){split_length=1;}
if(string===null||split_length<1){return false;}
string+='';var chunks=[],pos=0,len=string.length;while(pos<len){chunks.push(string.slice(pos,pos+=split_length));}
return chunks;}
function str_word_count(str,format,charlist){var len=str.length,cl=charlist&&charlist.length,chr='',tmpStr='',i=0,c='',wArr=[],wC=0,assoc={},aC=0,reg='',match=false;var _preg_quote=function(str){return(str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g,'\\$1');},_getWholeChar=function(str,i){var code=str.charCodeAt(i);if(code<0xD800||code>0xDFFF){return str.charAt(i);}
if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
var next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}
if(i===0){throw'Low surrogate without preceding high surrogate';}
var prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;};if(cl){reg='^('+_preg_quote(_getWholeChar(charlist,0));for(i=1;i<cl;i++){if((chr=_getWholeChar(charlist,i))===false){continue;}
reg+='|'+_preg_quote(chr);}
reg+=')$';reg=new RegExp(reg);}
for(i=0;i<len;i++){if((c=_getWholeChar(str,i))===false){continue;}
match=this.ctype_alpha(c)||(reg&&c.search(reg)!==-1)||((i!==0&&i!==len-1)&&c==='-')||(i!==0&&c==="'");if(match){if(tmpStr===''&&format===2){aC=i;}
tmpStr=tmpStr+c;}
if(i===len-1||!match&&tmpStr!==''){if(format!==2){wArr[wArr.length]=tmpStr;}else{assoc[aC]=tmpStr;}
tmpStr='';wC++;}}
if(!format){return wC;}else if(format===1){return wArr;}else if(format===2){return assoc;}
throw'You have supplied an incorrect format';}
function strcasecmp(f_string1,f_string2){var string1=(f_string1+'').toLowerCase();var string2=(f_string2+'').toLowerCase();if(string1>string2){return 1;}else if(string1==string2){return 0;}
return-1;}
function strchr(haystack,needle,bool){return this.strstr(haystack,needle,bool);}
function strcmp(str1,str2){return((str1==str2)?0:((str1>str2)?1:-1));}
function strcspn(str,mask,start,length){start=start?start:0;var count=(length&&((start+length)<str.length))?start+length:str.length;strct:for(var i=start,lgth=0;i<count;i++){for(var j=0;j<mask.length;j++){if(str.charAt(i).indexOf(mask[j])!==-1){continue strct;}}++lgth;}
return lgth;}
function strip_tags(input,allowed){allowed=(((allowed||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});}
function stripos(f_haystack,f_needle,f_offset){var haystack=(f_haystack+'').toLowerCase();var needle=(f_needle+'').toLowerCase();var index=0;if((index=haystack.indexOf(needle,f_offset))!==-1){return index;}
return false;}
function stripslashes(str){return(str+'').replace(/\\(.?)/g,function(s,n1){switch(n1){case'\\':return'\\';case'0':return'\u0000';case'':return'';default:return n1;}});}
function stristr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.toLowerCase().indexOf((needle+'').toLowerCase());if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strlen(string){var str=string+'';var i=0,chr='',lgth=0;if(!this.php_js||!this.php_js.ini||!this.php_js.ini['unicode.semantics']||this.php_js.ini['unicode.semantics'].local_value.toLowerCase()!=='on'){return string.length;}
var getWholeChar=function(str,i){var code=str.charCodeAt(i);var next='',prev='';if(0xD800<=code&&code<=0xDBFF){if(str.length<=(i+1)){throw'High surrogate without following low surrogate';}
next=str.charCodeAt(i+1);if(0xDC00>next||next>0xDFFF){throw'High surrogate without following low surrogate';}
return str.charAt(i)+str.charAt(i+1);}else if(0xDC00<=code&&code<=0xDFFF){if(i===0){throw'Low surrogate without preceding high surrogate';}
prev=str.charCodeAt(i-1);if(0xD800>prev||prev>0xDBFF){throw'Low surrogate without preceding high surrogate';}
return false;}
return str.charAt(i);};for(i=0,lgth=0;i<str.length;i++){if((chr=getWholeChar(str,i))===false){continue;}
lgth++;}
return lgth;}
function strnatcasecmp(str1,str2){var a=(str1+'').toLowerCase();var b=(str2+'').toLowerCase();var isWhitespaceChar=function(a){return a.charCodeAt(0)<=32;};var isDigitChar=function(a){var charCode=a.charCodeAt(0);return(charCode>=48&&charCode<=57);};var compareRight=function(a,b){var bias=0;var ia=0;var ib=0;var ca;var cb;for(var cnt=0;true;ia++,ib++){ca=a.charAt(ia);cb=b.charAt(ib);if(!isDigitChar(ca)&&!isDigitChar(cb)){return bias;}else if(!isDigitChar(ca)){return-1;}else if(!isDigitChar(cb)){return 1;}else if(ca<cb){if(bias===0){bias=-1;}}else if(ca>cb){if(bias===0){bias=1;}}else if(ca==='0'&&cb==='0'){return bias;}}};var ia=0,ib=0;var nza=0,nzb=0;var ca,cb;var result;while(true){nza=nzb=0;ca=a.charAt(ia);cb=b.charAt(ib);while(isWhitespaceChar(ca)||ca==='0'){if(ca==='0'){nza++;}else{nza=0;}
ca=a.charAt(++ia);}
while(isWhitespaceChar(cb)||cb==='0'){if(cb==='0'){nzb++;}else{nzb=0;}
cb=b.charAt(++ib);}
if(isDigitChar(ca)&&isDigitChar(cb)){if((result=compareRight(a.substring(ia),b.substring(ib)))!==0){return result;}}
if(ca==='0'&&cb==='0'){return nza-nzb;}
if(ca<cb){return-1;}else if(ca>cb){return+1;}
++ia;++ib;}}
function strnatcmp(f_string1,f_string2,f_version){var i=0;if(f_version==undefined){f_version=false;}
var __strnatcmp_split=function(f_string){var result=[];var buffer='';var chr='';var i=0,f_stringl=0;var text=true;f_stringl=f_string.length;for(i=0;i<f_stringl;i++){chr=f_string.substring(i,i+1);if(chr.match(/\d/)){if(text){if(buffer.length>0){result[result.length]=buffer;buffer='';}
text=false;}
buffer+=chr;}else if((text==false)&&(chr=='.')&&(i<(f_string.length-1))&&(f_string.substring(i+1,i+2).match(/\d/))){result[result.length]=buffer;buffer='';}else{if(text==false){if(buffer.length>0){result[result.length]=parseInt(buffer,10);buffer='';}
text=true;}
buffer+=chr;}}
if(buffer.length>0){if(text){result[result.length]=buffer;}else{result[result.length]=parseInt(buffer,10);}}
return result;};var array1=__strnatcmp_split(f_string1+'');var array2=__strnatcmp_split(f_string2+'');var len=array1.length;var text=true;var result=-1;var r=0;if(len>array2.length){len=array2.length;result=1;}
for(i=0;i<len;i++){if(isNaN(array1[i])){if(isNaN(array2[i])){text=true;if((r=this.strcmp(array1[i],array2[i]))!=0){return r;}}else if(text){return 1;}else{return-1;}}else if(isNaN(array2[i])){if(text){return-1;}else{return 1;}}else{if(text||f_version){if((r=(array1[i]-array2[i]))!=0){return r;}}else{if((r=this.strcmp(array1[i].toString(),array2[i].toString()))!=0){return r;}}
text=false;}}
return result;}
function strncasecmp(argStr1,argStr2,len){var diff,i=0;var str1=(argStr1+'').toLowerCase().substr(0,len);var str2=(argStr2+'').toLowerCase().substr(0,len);if(str1.length!==str2.length){if(str1.length<str2.length){len=str1.length;if(str2.substr(0,str1.length)==str1){return str1.length-str2.length;}}else{len=str2.length;if(str1.substr(0,str2.length)==str2){return str1.length-str2.length;}}}else{len=str1.length;}
for(diff=0,i=0;i<len;i++){diff=str1.charCodeAt(i)-str2.charCodeAt(i);if(diff!==0){return diff;}}
return 0;}
function strncmp(str1,str2,lgth){var s1=(str1+'').substr(0,lgth);var s2=(str2+'').substr(0,lgth);return((s1==s2)?0:((s1>s2)?1:-1));}
function strpbrk(haystack,char_list){for(var i=0,len=haystack.length;i<len;++i){if(char_list.indexOf(haystack.charAt(i))>=0){return haystack.slice(i);}}
return false;}
function strpos(haystack,needle,offset){var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:i;}
function strrchr(haystack,needle){var pos=0;if(typeof needle!=='string'){needle=String.fromCharCode(parseInt(needle,10));}
needle=needle.charAt(0);pos=haystack.lastIndexOf(needle);if(pos===-1){return false;}
return haystack.substr(pos);}
function strrev(string){string=string+'';var grapheme_extend=/(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;string=string.replace(grapheme_extend,'$2$1');return string.split('').reverse().join('');}
function strripos(haystack,needle,offset){haystack=(haystack+'').toLowerCase();needle=(needle+'').toLowerCase();var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strrpos(haystack,needle,offset){var i=-1;if(offset){i=(haystack+'').slice(offset).lastIndexOf(needle);if(i!==-1){i+=offset;}}else{i=(haystack+'').lastIndexOf(needle);}
return i>=0?i:false;}
function strspn(str1,str2,start,lgth){var found;var stri;var strj;var j=0;var i=0;start=start?(start<0?(str1.length+start):start):0;lgth=lgth?((lgth<0)?(str1.length+lgth-start):lgth):str1.length-start;str1=str1.substr(start,lgth);for(i=0;i<str1.length;i++){found=0;stri=str1.substring(i,i+1);for(j=0;j<=str2.length;j++){strj=str2.substring(j,j+1);if(stri==strj){found=1;break;}}
if(found!=1){return i;}}
return i;}
function strstr(haystack,needle,bool){var pos=0;haystack+='';pos=haystack.indexOf(needle);if(pos==-1){return false;}else{if(bool){return haystack.substr(0,pos);}else{return haystack.slice(pos);}}}
function strtok(str,tokens){this.php_js=this.php_js||{};if(tokens===undefined){tokens=str;str=this.php_js.strtokleftOver;}
if(str.length===0){return false;}
if(tokens.indexOf(str.charAt(0))!==-1){return this.strtok(str.substr(1),tokens);}
for(var i=0;i<str.length;i++){if(tokens.indexOf(str.charAt(i))!==-1){break;}}
this.php_js.strtokleftOver=str.substr(i+1);return str.substring(0,i);}
function strtolower(str){return(str+'').toLowerCase();}
function strtotime(str,now){var i,match,s,strTmp='',parse='';strTmp=str;strTmp=strTmp.replace(/\s{2,}|^\s|\s$/g,' ');strTmp=strTmp.replace(/[\t\r\n]/g,'');if(strTmp=='now'){return(new Date()).getTime()/1000;}else if(!isNaN(parse=Date.parse(strTmp))){return(parse/1000);}else if(now){now=new Date(now*1000);}else{now=new Date();}
strTmp=strTmp.toLowerCase();var __is={day:{'sun':0,'mon':1,'tue':2,'wed':3,'thu':4,'fri':5,'sat':6},mon:{'jan':0,'feb':1,'mar':2,'apr':3,'may':4,'jun':5,'jul':6,'aug':7,'sep':8,'oct':9,'nov':10,'dec':11}};var process=function(m){var ago=(m[2]&&m[2]=='ago');var num=(num=m[0]=='last'?-1:1)*(ago?-1:1);switch(m[0]){case'last':case'next':switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;default:var day;if(typeof(day=__is.day[m[1].substring(0,3)])!='undefined'){var diff=day-now.getDay();if(diff==0){diff=7*num;}else if(diff>0){if(m[0]=='last'){diff-=7;}}else{if(m[0]=='next'){diff+=7;}}
now.setDate(now.getDate()+diff);}}
break;default:if(/\d+/.test(m[0])){num*=parseInt(m[0],10);switch(m[1].substring(0,3)){case'yea':now.setFullYear(now.getFullYear()+num);break;case'mon':now.setMonth(now.getMonth()+num);break;case'wee':now.setDate(now.getDate()+(num*7));break;case'day':now.setDate(now.getDate()+num);break;case'hou':now.setHours(now.getHours()+num);break;case'min':now.setMinutes(now.getMinutes()+num);break;case'sec':now.setSeconds(now.getSeconds()+num);break;}}else{return false;}
break;}
return true;};match=strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);if(match!=null){if(!match[2]){match[2]='00:00:00';}else if(!match[3]){match[2]+=':00';}
s=match[1].split(/-/g);for(i in __is.mon){if(__is.mon[i]==s[1]-1){s[1]=i;}}
s[0]=parseInt(s[0],10);s[0]=(s[0]>=0&&s[0]<=69)?'20'+(s[0]<10?'0'+s[0]:s[0]+''):(s[0]>=70&&s[0]<=99)?'19'+s[0]:s[0]+'';return parseInt(this.strtotime(s[2]+' '+s[1]+' '+s[0]+' '+match[2])+(match[4]?match[4]/1000:''),10);}
var regex='([+-]?\\d+\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)'+'|(last|next)\\s'+'(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?'+'|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday'+'|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))'+'(\\sago)?';match=strTmp.match(new RegExp(regex,'gi'));if(match==null){return false;}
for(i=0;i<match.length;i++){if(!process(match[i].split(' '))){return false;}}
return(now.getTime()/1000);}
function strtoupper(str){return(str+'').toUpperCase();}
function strtr(str,from,to){var fr='',i=0,j=0,lenStr=0,lenFrom=0,tmpStrictForIn=false,fromTypeStr='',toTypeStr='',istr='';var tmpFrom=[];var tmpTo=[];var ret='';var match=false;if(typeof from==='object'){tmpStrictForIn=this.ini_set('phpjs.strictForIn',false);from=this.krsort(from);this.ini_set('phpjs.strictForIn',tmpStrictForIn);for(fr in from){if(from.hasOwnProperty(fr)){tmpFrom.push(fr);tmpTo.push(from[fr]);}}
from=tmpFrom;to=tmpTo;}
lenStr=str.length;lenFrom=from.length;fromTypeStr=typeof from==='string';toTypeStr=typeof to==='string';for(i=0;i<lenStr;i++){match=false;if(fromTypeStr){istr=str.charAt(i);for(j=0;j<lenFrom;j++){if(istr==from.charAt(j)){match=true;break;}}}else{for(j=0;j<lenFrom;j++){if(str.substr(i,from[j].length)==from[j]){match=true;i=(i+from[j].length)-1;break;}}}
if(match){ret+=toTypeStr?to.charAt(j):to[j];}else{ret+=str.charAt(i);}}
return ret;}
function substr(str,start,len){var i=0,allBMP=true,es=0,el=0,se=0,ret='';str+='';var end=str.length;this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};switch((this.php_js.ini['unicode.semantics']&&this.php_js.ini['unicode.semantics'].local_value.toLowerCase())){case'on':for(i=0;i<str.length;i++){if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){allBMP=false;break;}}
if(!allBMP){if(start<0){for(i=end-1,es=(start+=end);i>=es;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){start--;es--;}}}else{var surrogatePairs=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;while((surrogatePairs.exec(str))!=null){var li=surrogatePairs.lastIndex;if(li-2<start){start++;}else{break;}}}
if(start>=end||start<0){return false;}
if(len<0){for(i=end-1,el=(end+=len);i>=el;i--){if(/[\uDC00-\uDFFF]/.test(str.charAt(i))&&/[\uD800-\uDBFF]/.test(str.charAt(i-1))){end--;el--;}}
if(start>end){return false;}
return str.slice(start,end);}else{se=start+len;for(i=start;i<se;i++){ret+=str.charAt(i);if(/[\uD800-\uDBFF]/.test(str.charAt(i))&&/[\uDC00-\uDFFF]/.test(str.charAt(i+1))){se++;}}
return ret;}
break;}
case'off':default:if(start<0){start+=end;}
end=typeof len==='undefined'?end:(len<0?len+end:len+start);return start>=str.length||start<0||start>end?!1:str.slice(start,end);}
return undefined;}
function substr_compare(main_str,str,offset,length,case_insensitivity){if(!offset&&offset!==0){throw'Missing offset for substr_compare()';}
if(offset<0){offset=main_str.length+offset;}
if(length&&length>(main_str.length-offset)){return false;}
length=length||main_str.length-offset;main_str=main_str.substr(offset,length);str=str.substr(0,length);if(case_insensitivity){main_str=(main_str+'').toLowerCase();str=(str+'').toLowerCase();if(main_str==str){return 0;}
return(main_str>str)?1:-1;}
return((main_str==str)?0:((main_str>str)?1:-1));}
function substr_count(haystack,needle,offset,length){var pos=0,cnt=0;haystack+='';needle+='';if(isNaN(offset)){offset=0;}
if(isNaN(length)){length=0;}
offset--;while((offset=haystack.indexOf(needle,offset+1))!=-1){if(length>0&&(offset+needle.length)>length){return false;}else{cnt++;}}
return cnt;}
function substr_replace(str,replace,start,length){if(start<0){start=start+str.length;}
length=length!==undefined?length:str.length;if(length<0){length=length+str.length-start;}
return str.slice(0,start)+replace.substr(0,length)+replace.slice(length)+str.slice(start+length);}
function tan(arg){return Math.tan(arg);}
function tanh(arg){return(Math.exp(arg)-Math.exp(-arg))/(Math.exp(arg)+Math.exp(-arg));}
function time(){return Math.floor(new Date().getTime()/1000);}
function trim(str,charlist){var whitespace,l=0,i=0;str+='';if(!charlist){whitespace=" \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";}else{charlist+='';whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,'$1');}
l=str.length;for(i=0;i<l;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}
l=str.length;for(i=l-1;i>=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}
return whitespace.indexOf(str.charAt(0))===-1?str:'';}
function uasort(inputArr,sorter){var valArr=[],tempKeyVal,tempValue,ret,k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push([k,inputArr[k]]);if(strictForIn){delete inputArr[k];}}}
valArr.sort(function(a,b){return sorter(a[1],b[1]);});for(i=0;i<valArr.length;i++){populateArr[valArr[i][0]]=valArr[i][1];}
return strictForIn||populateArr;}
function ucfirst(str){str+='';var f=str.charAt(0).toUpperCase();return f+str.substr(1);}
function ucwords(str){return(str+'').replace(/^([a-z])|\s+([a-z])/g,function($1){return $1.toUpperCase();});}
function uksort(inputArr,sorter){var tmp_arr={},keys=[],i=0,k='',strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this.window[sorter];}
for(k in inputArr){if(inputArr.hasOwnProperty(k)){keys.push(k);}}
try{if(sorter){keys.sort(sorter);}else{keys.sort();}}catch(e){return false;}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(i=0;i<keys.length;i++){k=keys[i];tmp_arr[k]=inputArr[k];if(strictForIn){delete inputArr[k];}}
for(i in tmp_arr){if(tmp_arr.hasOwnProperty(i)){populateArr[i]=tmp_arr[i];}}
return strictForIn||populateArr;}
function unserialize(data){var that=this;var utf8Overhead=function(chr){var code=chr.charCodeAt(0);if(code<0x0080){return 0;}
if(code<0x0800){return 1;}
return 2;};var error=function(type,msg,filename,line){throw new that.window[type](msg,filename,line);};var read_until=function(data,offset,stopchr){var buf=[];var chr=data.slice(offset,offset+1);var i=2;while(chr!=stopchr){if((i+offset)>data.length){error('Error','Invalid');}
buf.push(chr);chr=data.slice(offset+(i-1),offset+i);i+=1;}
return[buf.length,buf.join('')];};var read_chrs=function(data,offset,length){var buf;buf=[];for(var i=0;i<length;i++){var chr=data.slice(offset+(i-1),offset+i);buf.push(chr);length-=utf8Overhead(chr);}
return[buf.length,buf.join('')];};var _unserialize=function(data,offset){var readdata;var readData;var chrs=0;var ccount;var stringlength;var keyandchrs;var keys;if(!offset){offset=0;}
var dtype=(data.slice(offset,offset+1)).toLowerCase();var dataoffset=offset+2;var typeconvert=function(x){return x;};switch(dtype){case'i':typeconvert=function(x){return parseInt(x,10);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'b':typeconvert=function(x){return parseInt(x,10)!==0;};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'd':typeconvert=function(x){return parseFloat(x);};readData=read_until(data,dataoffset,';');chrs=readData[0];readdata=readData[1];dataoffset+=chrs+1;break;case'n':readdata=null;break;case's':ccount=read_until(data,dataoffset,':');chrs=ccount[0];stringlength=ccount[1];dataoffset+=chrs+2;readData=read_chrs(data,dataoffset+1,parseInt(stringlength,10));chrs=readData[0];readdata=readData[1];dataoffset+=chrs+2;if(chrs!=parseInt(stringlength,10)&&chrs!=readdata.length){error('SyntaxError','String length mismatch');}
readdata=that.utf8_decode(readdata);break;case'a':readdata={};keyandchrs=read_until(data,dataoffset,':');chrs=keyandchrs[0];keys=keyandchrs[1];dataoffset+=chrs+2;for(var i=0;i<parseInt(keys,10);i++){var kprops=_unserialize(data,dataoffset);var kchrs=kprops[1];var key=kprops[2];dataoffset+=kchrs;var vprops=_unserialize(data,dataoffset);var vchrs=vprops[1];var value=vprops[2];dataoffset+=vchrs;readdata[key]=value;}
dataoffset+=1;break;default:error('SyntaxError','Unknown / Unhandled data type(s): '+dtype);break;}
return[dtype,dataoffset-offset,typeconvert(readdata)];};return _unserialize((data+''),0)[2];}
function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'));}
function urlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
function usort(inputArr,sorter){var valArr=[],k='',i=0,strictForIn=false,populateArr={};if(typeof sorter==='string'){sorter=this[sorter];}else if(Object.prototype.toString.call(sorter)==='[object Array]'){sorter=this[sorter[0]][sorter[1]];}
this.php_js=this.php_js||{};this.php_js.ini=this.php_js.ini||{};strictForIn=this.php_js.ini['phpjs.strictForIn']&&this.php_js.ini['phpjs.strictForIn'].local_value&&this.php_js.ini['phpjs.strictForIn'].local_value!=='off';populateArr=strictForIn?inputArr:populateArr;for(k in inputArr){if(inputArr.hasOwnProperty(k)){valArr.push(inputArr[k]);if(strictForIn){delete inputArr[k];}}}
try{valArr.sort(sorter);}catch(e){return false;}
for(i=0;i<valArr.length;i++){populateArr[i]=valArr[i];}
return strictForIn||populateArr;}
function utf8_decode(str_data){var tmp_arr=[],i=0,ac=0,c1=0,c2=0,c3=0;str_data+='';while(i<str_data.length){c1=str_data.charCodeAt(i);if(c1<128){tmp_arr[ac++]=String.fromCharCode(c1);i++;}else if(c1>191&&c1<224){c2=str_data.charCodeAt(i+1);tmp_arr[ac++]=String.fromCharCode(((c1&31)<<6)|(c2&63));i+=2;}else{c2=str_data.charCodeAt(i+1);c3=str_data.charCodeAt(i+2);tmp_arr[ac++]=String.fromCharCode(((c1&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return tmp_arr.join('');}
function utf8_encode(argString){if(argString===null||typeof argString==="undefined"){return"";}
var string=(argString+'');var utftext="",start,end,stringl=0;start=end=0;stringl=string.length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n);var enc=null;if(c1<128){end++;}else if(c1>127&&c1<2048){enc=String.fromCharCode((c1>>6)|192)+String.fromCharCode((c1&63)|128);}else{enc=String.fromCharCode((c1>>12)|224)+String.fromCharCode(((c1>>6)&63)|128)+String.fromCharCode((c1&63)|128);}
if(enc!==null){if(end>start){utftext+=string.slice(start,end);}
utftext+=enc;start=end=n+1;}}
if(end>start){utftext+=string.slice(start,stringl);}
return utftext;}
function var_dump(){var output='',pad_char=' ',pad_val=4,lgth=0,i=0,d=this.window.document;var _getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _repeat_char=function(len,pad_char){var str='';for(var i=0;i<len;i++){str+=pad_char;}
return str;};var _getInnerVal=function(val,thick_pad){var ret='';if(val===null){ret='NULL';}else if(typeof val==='boolean'){ret='bool('+val+')';}else if(typeof val==='string'){ret='string('+val.length+') "'+val+'"';}else if(typeof val==='number'){if(parseFloat(val)==parseInt(val,10)){ret='int('+val+')';}else{ret='float('+val+')';}}
else if(typeof val==='undefined'){ret='undefined';}else if(typeof val==='function'){var funcLines=val.toString().split('\n');ret='';for(var i=0,fll=funcLines.length;i<fll;i++){ret+=(i!==0?'\n'+thick_pad:'')+funcLines[i];}}else if(val instanceof Date){ret='Date('+val+')';}else if(val instanceof RegExp){ret='RegExp('+val+')';}else if(val.nodeName){switch(val.nodeType){case 1:if(typeof val.namespaceURI==='undefined'||val.namespaceURI==='http://www.w3.org/1999/xhtml'){ret='HTMLElement("'+val.nodeName+'")';}else{ret='XML Element("'+val.nodeName+'")';}
break;case 2:ret='ATTRIBUTE_NODE('+val.nodeName+')';break;case 3:ret='TEXT_NODE('+val.nodeValue+')';break;case 4:ret='CDATA_SECTION_NODE('+val.nodeValue+')';break;case 5:ret='ENTITY_REFERENCE_NODE';break;case 6:ret='ENTITY_NODE';break;case 7:ret='PROCESSING_INSTRUCTION_NODE('+val.nodeName+':'+val.nodeValue+')';break;case 8:ret='COMMENT_NODE('+val.nodeValue+')';break;case 9:ret='DOCUMENT_NODE';break;case 10:ret='DOCUMENT_TYPE_NODE';break;case 11:ret='DOCUMENT_FRAGMENT_NODE';break;case 12:ret='NOTATION_NODE';break;}}
return ret;};var _formatArray=function(obj,cur_depth,pad_val,pad_char){var someProp='';if(cur_depth>0){cur_depth++;}
var base_pad=_repeat_char(pad_val*(cur_depth-1),pad_char);var thick_pad=_repeat_char(pad_val*(cur_depth+1),pad_char);var str='';var val='';if(typeof obj==='object'&&obj!==null){if(obj.constructor&&_getFuncName(obj.constructor)==='PHPJS_Resource'){return obj.var_dump();}
lgth=0;for(someProp in obj){lgth++;}
str+='array('+lgth+') {\n';for(var key in obj){var objVal=obj[key];if(typeof objVal==='object'&&objVal!==null&&!(objVal instanceof Date)&&!(objVal instanceof RegExp)&&!objVal.nodeName){str+=thick_pad+'['+key+'] =>\n'+thick_pad+_formatArray(objVal,cur_depth+1,pad_val,pad_char);}else{val=_getInnerVal(objVal,thick_pad);str+=thick_pad+'['+key+'] =>\n'+thick_pad+val+'\n';}}
str+=base_pad+'}\n';}else{str=_getInnerVal(obj,thick_pad);}
return str;};output=_formatArray(arguments[0],0,pad_val,pad_char);for(i=1;i<arguments.length;i++){output+='\n'+_formatArray(arguments[i],0,pad_val,pad_char);}
if(d.body){this.echo(output);}else{try{d=XULDocument;this.echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+'</pre>');}catch(e){this.echo(output);}}}
function var_export(mixed_expression,bool_return){var retstr='',iret='',cnt=0,x=[],i=0,funcParts=[],idtLevel=arguments[2]||2,innerIndent='',outerIndent='';var getFuncName=function(fn){var name=(/\W*function\s+([\w\$]+)\s*\(/).exec(fn);if(!name){return'(Anonymous)';}
return name[1];};var _makeIndent=function(idtLevel){return(new Array(idtLevel+1)).join(' ');};var __getType=function(inp){var i=0;var match,type=typeof inp;if(type==='object'&&inp.constructor&&getFuncName(inp.constructor)==='PHPJS_Resource'){return'resource';}
if(type==='function'){return'function';}
if(type==='object'&&!inp){return'null';}
if(type==="object"){if(!inp.constructor){return'object';}
var cons=inp.constructor.toString();match=cons.match(/(\w+)\(/);if(match){cons=match[1].toLowerCase();}
var types=["boolean","number","string","array"];for(i=0;i<types.length;i++){if(cons===types[i]){type=types[i];break;}}}
return type;};var type=__getType(mixed_expression);if(type===null){retstr="NULL";}else if(type==='array'||type==='object'){outerIndent=_makeIndent(idtLevel-2);innerIndent=_makeIndent(idtLevel);for(i in mixed_expression){var value=this.var_export(mixed_expression[i],true,idtLevel+2);value=typeof value==='string'?value.replace(/</g,'&lt;').replace(/>/g,'&gt;'):value;x[cnt++]=innerIndent+i+' => '+(__getType(mixed_expression[i])==='array'?'\n':'')+value;}
iret=x.join(',\n');retstr=outerIndent+"array (\n"+iret+'\n'+outerIndent+')';}else if(type==='function'){funcParts=mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);retstr="create_function ('"+funcParts[1]+"', '"+funcParts[2].replace(new RegExp("'",'g'),"\\'")+"')";}else if(type==='resource'){retstr='NULL';}else{retstr=(typeof(mixed_expression)!=='string')?mixed_expression:"'"+mixed_expression.replace(/(["'])/g,"\\$1").replace(/\0/g,"\\0")+"'";}
if(bool_return!==true){this.echo(retstr);return null;}else{return retstr;}}
function vprintf(format,args){var body,elmt;var ret='',d=this.window.document;var HTMLNS='http://www.w3.org/1999/xhtml';body=d.getElementsByTagNameNS?(d.getElementsByTagNameNS(HTMLNS,'body')[0]?d.getElementsByTagNameNS(HTMLNS,'body')[0]:d.documentElement.lastChild):d.getElementsByTagName('body')[0];if(!body){return false;}
ret=this.sprintf.apply(this,[format].concat(args));elmt=d.createTextNode(ret);body.appendChild(elmt);return ret.length;}
function vsprintf(format,args){return this.sprintf.apply(this,[format].concat(args));}
function wordwrap(str,int_width,str_break,cut){var m=((arguments.length>=2)?arguments[1]:75);var b=((arguments.length>=3)?arguments[2]:"\n");var c=((arguments.length>=4)?arguments[3]:false);var i,j,l,s,r;str+='';if(m<1){return str;}
for(i=-1,l=(r=str.split(/\r\n|\n|\r/)).length;++i<l;r[i]+=s){for(s=r[i],r[i]="";s.length>m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:"")){j=c==2||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||c==1&&m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;}}
return r.join("\n");};

/* jquery-blockui: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js) */
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */(function(){"use strict";function e(e){function a(i,a){var l,h,m=i==window,g=a&&a.message!==undefined?a.message:undefined;a=e.extend({},e.blockUI.defaults,a||{});if(a.ignoreIfBlocked&&e(i).data("blockUI.isBlocked"))return;a.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,a.overlayCSS||{});l=e.extend({},e.blockUI.defaults.css,a.css||{});a.onOverlayClick&&(a.overlayCSS.cursor="pointer");h=e.extend({},e.blockUI.defaults.themedCSS,a.themedCSS||{});g=g===undefined?a.message:g;m&&o&&f(window,{fadeOut:0});if(g&&typeof g!="string"&&(g.parentNode||g.jquery)){var y=g.jquery?g[0]:g,b={};e(i).data("blockUI.history",b);b.el=y;b.parent=y.parentNode;b.display=y.style.display;b.position=y.style.position;b.parent&&b.parent.removeChild(y)}e(i).data("blockUI.onUnblock",a.onUnblock);var w=a.baseZ,E,S,x,T;n||a.forceIframe?E=e('<iframe class="blockUI" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+a.iframeSrc+'"></iframe>'):E=e('<div class="blockUI" style="display:none"></div>');a.theme?S=e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+w++ +';display:none"></div>'):S=e('<div class="blockUI blockOverlay" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');if(a.theme&&m){T='<div class="blockUI '+a.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:fixed">';a.title&&(T+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(a.title||"&nbsp;")+"</div>");T+='<div class="ui-widget-content ui-dialog-content"></div>';T+="</div>"}else if(a.theme){T='<div class="blockUI '+a.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:absolute">';a.title&&(T+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(a.title||"&nbsp;")+"</div>");T+='<div class="ui-widget-content ui-dialog-content"></div>';T+="</div>"}else m?T='<div class="blockUI '+a.blockMsgClass+' blockPage" style="z-index:'+(w+10)+';display:none;position:fixed"></div>':T='<div class="blockUI '+a.blockMsgClass+' blockElement" style="z-index:'+(w+10)+';display:none;position:absolute"></div>';x=e(T);if(g)if(a.theme){x.css(h);x.addClass("ui-widget-content")}else x.css(l);a.theme||S.css(a.overlayCSS);S.css("position",m?"fixed":"absolute");(n||a.forceIframe)&&E.css("opacity",0);var N=[E,S,x],C=m?e("body"):e(i);e.each(N,function(){this.appendTo(C)});a.theme&&a.draggable&&e.fn.draggable&&x.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var k=s&&(!e.support.boxModel||e("object,embed",m?null:i).length>0);if(r||k){m&&a.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%");if((r||!e.support.boxModel)&&!m)var L=v(i,"borderTopWidth"),A=v(i,"borderLeftWidth"),O=L?"(0 - "+L+")":0,M=A?"(0 - "+A+")":0;e.each(N,function(e,t){var n=t[0].style;n.position="absolute";if(e<2){m?n.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+a.quirksmodeOffsetHack+') + "px"'):n.setExpression("height",'this.parentNode.offsetHeight + "px"');m?n.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):n.setExpression("width",'this.parentNode.offsetWidth + "px"');M&&n.setExpression("left",M);O&&n.setExpression("top",O)}else if(a.centerY){m&&n.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');n.marginTop=0}else if(!a.centerY&&m){var r=a.css&&a.css.top?parseInt(a.css.top,10):0,i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+r+') + "px"';n.setExpression("top",i)}})}if(g){a.theme?x.find(".ui-widget-content").append(g):x.append(g);(g.jquery||g.nodeType)&&e(g).show()}(n||a.forceIframe)&&a.showOverlay&&E.show();if(a.fadeIn){var _=a.onBlock?a.onBlock:t,D=a.showOverlay&&!g?_:t,P=g?_:t;a.showOverlay&&S._fadeIn(a.fadeIn,D);g&&x._fadeIn(a.fadeIn,P)}else{a.showOverlay&&S.show();g&&x.show();a.onBlock&&a.onBlock()}c(1,i,a);if(m){o=x[0];u=e(a.focusableElements,o);a.focusInput&&setTimeout(p,20)}else d(x[0],a.centerX,a.centerY);if(a.timeout){var H=setTimeout(function(){m?e.unblockUI(a):e(i).unblock(a)},a.timeout);e(i).data("blockUI.timeout",H)}}function f(t,n){var r,i=t==window,s=e(t),a=s.data("blockUI.history"),f=s.data("blockUI.timeout");if(f){clearTimeout(f);s.removeData("blockUI.timeout")}n=e.extend({},e.blockUI.defaults,n||{});c(0,t,n);if(n.onUnblock===null){n.onUnblock=s.data("blockUI.onUnblock");s.removeData("blockUI.onUnblock")}var h;i?h=e("body").children().filter(".blockUI").add("body > .blockUI"):h=s.find(">.blockUI");if(n.cursorReset){h.length>1&&(h[1].style.cursor=n.cursorReset);h.length>2&&(h[2].style.cursor=n.cursorReset)}i&&(o=u=null);if(n.fadeOut){r=h.length;h.stop().fadeOut(n.fadeOut,function(){--r===0&&l(h,a,n,t)})}else l(h,a,n,t)}function l(t,n,r,i){var s=e(i);if(s.data("blockUI.isBlocked"))return;t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)});if(n&&n.el){n.el.style.display=n.display;n.el.style.position=n.position;n.parent&&n.parent.appendChild(n.el);s.removeData("blockUI.history")}s.data("blockUI.static")&&s.css("position","static");typeof r.onUnblock=="function"&&r.onUnblock(i,r);var o=e(document.body),u=o.width(),a=o[0].style.width;o.width(u-1).width(u);o[0].style.width=a}function c(t,n,r){var i=n==window,s=e(n);if(!t&&(i&&!o||!i&&!s.data("blockUI.isBlocked")))return;s.data("blockUI.isBlocked",t);if(!i||!r.bindEvents||t&&!r.showOverlay)return;var u="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(u,r,h):e(document).unbind(u,h)}function h(t){if(t.type==="keydown"&&t.keyCode&&t.keyCode==9&&o&&t.data.constrainTabKey){var n=u,r=!t.shiftKey&&t.target===n[n.length-1],i=t.shiftKey&&t.target===n[0];if(r||i){setTimeout(function(){p(i)},10);return!1}}var s=t.data,a=e(t.target);a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t);return a.parents("div."+s.blockMsgClass).length>0?!0:a.parents().children().filter("div.blockUI").length===0}function p(e){if(!u)return;var t=u[e===!0?u.length-1:0];t&&t.focus()}function d(e,t,n){var r=e.parentNode,i=e.style,s=(r.offsetWidth-e.offsetWidth)/2-v(r,"borderLeftWidth"),o=(r.offsetHeight-e.offsetHeight)/2-v(r,"borderTopWidth");t&&(i.left=s>0?s+"px":"0");n&&(i.top=o>0?o+"px":"0")}function v(t,n){return parseInt(e.css(t,n),10)||0}e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},n=/MSIE/.test(navigator.userAgent),r=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=document.documentMode||0,s=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){a(window,e)};e.unblockUI=function(e){f(window,e)};e.growlUI=function(t,n,r,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>");n&&s.append("<h2>"+n+"</h2>");r===undefined&&(r=3e3);var o=function(t){t=t||{};e.blockUI({message:s,fadeIn:typeof t.fadeIn!="undefined"?t.fadeIn:700,fadeOut:typeof t.fadeOut!="undefined"?t.fadeOut:1e3,timeout:typeof t.timeout!="undefined"?t.timeout:r,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};o();var u=s.css("opacity");s.mouseover(function(){o({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop();t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})};e.fn.block=function(t){if(this[0]===window){e.blockUI(t);return this}var n=e.extend({},e.blockUI.defaults,t||{});this.each(function(){var t=e(this);if(n.ignoreIfBlocked&&t.data("blockUI.isBlocked"))return;t.unblock({fadeOut:0})});return this.each(function(){if(e.css(this,"position")=="static"){this.style.position="relative";e(this).data("blockUI.static",!0)}this.style.zoom=1;a(this,t)})};e.fn.unblock=function(t){if(this[0]===window){e.unblockUI(t);return this}return this.each(function(){f(this,t)})};e.blockUI.version=2.66;e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var o=null,u=[]}typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();;

/* dt-plugins: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/themes/qfy-01/js/plugins.js) */
/*jquery-parallax*/
/*scroll 用到*/
if(typeof jQuery.easing["jswing"]=="undefined"){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})}

/**
 * jquery.dlmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {

	// global
	var Modernizr = window.Modernizr, $body = $( 'body' );

	$.DLMenu = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	// the options
	$.DLMenu.defaults = {
		// classes for the animation effects
		animationClasses : { animIn : 'dl-animate-in-2', animOut : 'dl-animate-out-2' }
	};

	$.DLMenu.prototype = {
		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.DLMenu.defaults, options );
			// cache some elements and initialize some variables
			this._config();
			
			var animEndEventNames = {
					'WebkitAnimation' : 'webkitAnimationEnd',
					'OAnimation' : 'oAnimationEnd',
					'msAnimation' : 'MSAnimationEnd',
					'animation' : 'animationend'
				},
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};
			// animation end event name
			this.animEndEventName = animEndEventNames[  'animation' ] + '.dlmenu';
			// transition end event name
			this.transEndEventName = transEndEventNames[  'transition' ] + '.dlmenu',
			// support for css animations and css transitions
			this.supportAnimations = true,
			this.supportTransitions = true;

			this._initEvents();

		},
		_config : function() {
			this.open = false;
			this.$trigger = this.$el.find( '#mobile-menu' );
/* ! !changed */
			this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">'+this.$el.find( '.menu-open' ).html()+"</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";
			this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">'+this.$el.find( '.menu-close' ).html()+"</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";
/* !changed: end */
			
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){
				this.$menu = jQuery( '.floatwarpper ul.dl-menu' );
			}else{
				this.$menu = this.$el.find( 'ul.dl-menu' );
			}
			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );
			
		

			this.$back = this.$menu.find( 'li.dl-back' );
			this.$menuitems.each(function(){
				var $item_new = $(this),
						$submenu_new = $item_new.children( 'ul.dl-submenu' );
						 $item_new.siblings(".new-column").find("> a").remove();
					var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();
						new_col_sub.find("> a, > .dl-back").remove();
					new_col_sub.children().unwrap().appendTo($submenu_new);
					$item_new.siblings(".new-column").remove();
					if( $item_new.find("> a").attr("href")=="#"){
						$item_new.find("> a").removeAttr("href");
					}
			});
		},
		_initEvents : function() {

			var self = this;
			
			this.$trigger.unbind().on( 'click.dlmenu', function() {
				
				if( self.open ) {
					self._closeMenu();
				} 
				else {
					self._openMenu();
					// clicking somewhere else makes the menu close

					if(self.$trigger.hasClass("leftbtnmenu")){
						if(jQuery("body >.dl-menu-film").length==0){
							jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
						}
						jQuery("body >.dl-menu-film").off( 'click' ).on( 'click.dlmenu', function() {
							self._closeMenu() ;
						} );
					}else{
						$body.off( 'click' ).on( 'click.dlmenu', function() {
							self._closeMenu() ;
						} );
					}
					
				}
				return false;

			} );
			
			this.$menuitems.on( 'click.dlmenu', function( event ) {
				if($(this).closest(".dl-menuwrapper").css("visibility")=="hidden"){
					return;
				}
				event.stopPropagation();

				var $item = $(this),$submenu = $item.children( 'ul.dl-submenu' );
				
				
				if( $submenu.length > 0 ) {
					
					var xx=event.pageX;
					var width = $submenu.width();
				
					var isclick = width-xx>35;

					if($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")){
						var textw = $item.find(">a>span").width()*1+$item.find(">a>span").offset().left*1;
						isclick = xx<textw;
					}
					if(!$item.find(">a").attr("href")){
						//无链接
						isclick = false;
					}
					if(isclick){
						if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1){
							//self._closeMenu();
						}
					}else{
						//...
						if(	$(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu")){
							if($submenu.css("display")!="block"){
								var h  = $submenu.height();
								$submenu.show().css("height",0).animate({ height: h }, 150,function(){
									$submenu.attr("style","display:block;");
								});
								$item.addClass( 'dl-subviewopen' );
							}else{
								$submenu.animate({ height: 0 }, 150,function(){
									$submenu.hide();
								});
								
								$item.removeClass( 'dl-subviewopen' )
							}
						}else{
							$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

							var $flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animIn ),
								onAnimationEndFn = function() {
									self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animOut ).addClass( 'dl-subview' );
									$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );
									$item.addClass( 'qfy-subviewopen' );
									$flyin.remove();
								};

							self.$menu.addClass( self.options.animationClasses.animOut );


							if( self.supportAnimations ) {
								self.$menu.on( self.animEndEventName, onAnimationEndFn );
							}
							else {
								onAnimationEndFn.call();
							}
							
							
						}

					
						
						return false;
					}

				}else{
	
					if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1){
						self._closeMenu();
					}
					
				}
			} );

			this.$back.on( 'click.dlmenu', function( event ) {

				$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);

				var $this = $( this ),
					$submenu = $this.parents( 'ul.dl-submenu:first' ),
					$item = $submenu.parent(),


					$flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animOut );

				var onAnimationEndFn = function() {
					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animIn );
					$flyin.remove();
				};

				self.$menu.addClass( self.options.animationClasses.animIn );

				if( self.supportAnimations ) {
					self.$menu.on( self.animEndEventName, onAnimationEndFn );
				}
				else {
					onAnimationEndFn.call();
				}

				$item.removeClass( 'dl-subviewopen' ).removeClass("qfy-subviewopen");
				
				var $subview = $this.parents( '.dl-subview:first' );
				if( $subview.is( 'li' ) ) {
					$subview.addClass( 'dl-subviewopen' ).addClass("qfy-subviewopen");
				}
				$subview.removeClass( 'dl-subview' );

				return false;

			} );
			
		},
		_closeMenu : function() {
			var self = this,
				onTransitionEndFn = function() {
					self.$menu.off( self.transEndEventName );
					self._resetMenu();
				};
			
			this.$menu.removeClass( 'dl-menuopen' );
			this.$menu.parent().removeClass("dl-menuopen-parent");
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){
				$(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");
				$(".dl-menu-open .floatwarpper").removeAttr("style");
				$(".floatwarpper .dl-container").removeAttr("style");
				$("#page #dl-menu").removeAttr("style");
				$("body > #dl-menu").remove();
				var element_right = $("#mobile-menu").attr("data-right");
				if(element_right){
					$("#dl-menu").css("right",element_right+"px");
				}
				var element_top = $("#mobile-menu").attr("data-top");
				if(element_top){
					$("#dl-menu").css("top",element_top+"px");
				}
			}
			$("body").removeClass("dl-menu-open");
			this.$menu.addClass( 'dl-menu-toggle' );
			if(this.$menu.closest("section.section").length>0){
				var style = this.$menu.closest("section.section").attr("style");
				style = style.replace(/min-height:\s*\d+px;*/g,"");
				this.$menu.closest("section.section").attr("style",style);
			}
			this.$trigger.removeClass( 'dl-active' ).html(this.openCap);
			
			if( this.supportTransitions ) {
				this.$menu.on( this.transEndEventName, onTransitionEndFn );
			}
			else {
				onTransitionEndFn.call();
			}

			this.open = false;

/*
			this.$el.css({
				position : "fixed",
				top : ""
			});
*/
		},
		_openMenu : function() {
			this.$menu.parent().addClass("dl-menuopen-parent");
			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {
				$( this ).removeClass( 'dl-menu-toggle' );
			} );
			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$menu.closest(".qfy-listcatecontrols").length==0){
				
				var $this = this;
				$("body").addClass("dl-menu-open");
				var width =  $('html').width();
				if($("#mobile-menu").hasClass("fullfloatmenu")){
					var w= width;
				}else{
					var w = width - 60;
				}
				
				if(!$(".floatwarpper").hasClass("leftbtnmenu")){
					$(".mobilefloatmenu.dl-menu-open #page").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');
					$(".dl-menu-open .floatwarpper").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');
					$(".floatwarpper").width(w).css("right","-"+w+"px");
				}
				$(".floatwarpper .dl-container").css("max-width","100%");
				var element_top = $("#mobile-menu").attr("data-top");
				var element_right = $("#mobile-menu").attr("data-right");
				if(element_top){
					$("#page #dl-menu").css("top",element_top+"px");
					$("body > #dl-menu").css("top",element_top+"px");
				}
				setTimeout(function(){
					if(!$(".floatwarpper").hasClass("leftbtnmenu")){
						$("#page #dl-menu").removeClass("dl-menu-hidden");
						var menu_html =$("#page #dl-menu").prop("outerHTML");
						$("body").prepend(menu_html);
						if(element_top){
							$("body > #dl-menu").css("top",element_top+"px");
						}
						$("#page #dl-menu").addClass("dl-menu-hidden");
						
						if($("#mobile-menu").hasClass("fullfloatmenu")){
							$("body > #dl-menu").css("right",element_right+"px");
						}else{
							$("body > #dl-menu").css("right",(1*w+8)+"px");
						}
					}
					$("body > #dl-menu").unbind().bind("click",function(e){
						 e.stopPropagation();
						$this.$trigger.click();
						return false;
					});
				
				},200)

			}
			this.$trigger.addClass( 'dl-active' ).html(this.closeCap);
			this.open = true;
			if(this.$menu.closest("section.section").length>0){
				var minheight = this.$menu.height();
				this.$menu.closest("section.section").css("min-height",minheight+"px");
			}
			if(!$(".floatwarpper").hasClass("leftbtnmenu")){
				$("html, body").animate({ scrollTop: this.$el.offset().top - 20 }, 150);
			}
		},
		// resets the menu to its original state (first level of options)
		_resetMenu : function() {
			if(!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu")){
				this.$menu.removeClass( 'dl-subview' );
				this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );
			}
		}
	};

	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );
		}
	};

	$.fn.dlmenu = function( options ) {
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				var instance = $.data( this, 'dlmenu' );
				if ( !instance ) {
					logError( "cannot call methods on dlmenu prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for dlmenu instance" );
					return;
				}
				instance[ options ].apply( instance, args );
			});
		} 
		else {
			this.each(function() {	
				var instance = $.data( this, 'dlmenu' );
				if ( instance ) {
					instance._init();
				}
				else {
					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );
				}
			});
		}
		return this;
	};

} )( jQuery, window );
/****************************************************************************************************************************/
 /* !- Tooltip*/  
 function simple_tooltip(e,t){jQuery(e).each(function(e){jQuery("body").append("<div class='"+t+"' id='"+t+e+"'>"+jQuery(this).find("span.tooltip-c").html()+"</div>");var n=jQuery("#"+t+e);jQuery(this).removeAttr("title").mouseover(function(){n.css({opacity:1,display:"none"}).fadeIn(400)}).mousemove(function(e){var t=jQuery(window).scrollTop();var r=jQuery(window).width();var i;var s;var o=15;if(r-o*2>=n.width()+e.pageX){i=e.pageX+o}else{i=r-n.width()-o}if(t+o*2>=e.pageY-n.height()){s=t+o}else{s=e.pageY-n.height()-2.2*o}n.css({left:i,top:s})}).mouseout(function(){n.css({left:"-9999px"})})})}
 
/* !Sandbox */

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */
jQuery(document).ready(function(a) {a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup."+b("Open"))},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("update",function(){f(g,h);var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup",function(j){if(!h.hasClass(b("Open"))){g.blur();g.focus()}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown",function(j){h.removeClass(b("Changed"))}).on("mouseup",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.focus()}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup."+b("Open"),function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.blur()}else{f(g,h)}})}}}).focus(function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).blur(function(){h.removeClass(b("Focus")+" "+b("Open"))}).hover(function(){h.addClass(b("Hover"))},function(){h.removeClass(b("Hover"))}).trigger("update")})}})});


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'div.rollover-content, div.fs-entry-content' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options=$.extend({},options);options.expires=-1;}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}expires='; expires='+date.toUTCString();}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}return cookieValue;}};

/* Sandbox: end */;

/* dt-main-op-jquery: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip,firstAdapter,i,mouseMoved,mousePosition,mousePositionObservers,position,vendors,_i,_len,_ref,__slice=[].slice,__indexOf=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1},__hasProp={}.hasOwnProperty;for(Opentip=function(){function t(e,i,o,s){var n,r,a,h,p,d,l,u,c,g,f,m,v,b,w=this;if(this.id=++t.lastId,this.debug("Creating Opentip."),t.tips.push(this),this.adapter=t.adapter,n=this.adapter.data(e,"opentips")||[],n.push(this),this.adapter.data(e,"opentips",n),this.triggerElement=this.adapter.wrap(e),this.triggerElement.length>1)throw Error("You can't call Opentip on multiple elements.");if(1>this.triggerElement.length)throw Error("Invalid element.");this.loaded=!1,this.loading=!1,this.visible=!1,this.waitingToShow=!1,this.waitingToHide=!1,this.currentPosition={left:0,top:0},this.dimensions={width:100,height:50},this.content="",this.redraw=!0,this.currentObservers={showing:!1,visible:!1,hiding:!1,hidden:!1},s=this.adapter.clone(s),typeof i=="object"?(s=i,i=o=void 0):typeof o=="object"&&(s=o,o=void 0),o!=null&&(s.title=o),i!=null&&this.setContent(i),s["extends"]==null&&(s["extends"]=s.style!=null?s.style:t.defaultStyle),h=[s],b=s;while(b["extends"]){if(d=b["extends"],b=t.styles[d],b==null)throw Error("Invalid style: "+d);h.unshift(b),b["extends"]==null&&d!=="standard"&&(b["extends"]="standard")}for(s=(f=this.adapter).extend.apply(f,[{}].concat(__slice.call(h))),s.hideTriggers=function(){var t,e,i,o;for(i=s.hideTriggers,o=[],t=0,e=i.length;e>t;t++)r=i[t],o.push(r);return o}(),s.hideTrigger&&s.hideTriggers.length===0&&s.hideTriggers.push(s.hideTrigger),m=["tipJoint","targetJoint","stem"],l=0,c=m.length;c>l;l++)p=m[l],s[p]&&typeof s[p]=="string"&&(s[p]=new t.Joint(s[p]));for(!s.ajax||s.ajax!==!0&&s.ajax||(s.ajax=this.adapter.tagName(this.triggerElement)==="A"?this.adapter.attr(this.triggerElement,"href"):!1),s.showOn==="click"&&this.adapter.tagName(this.triggerElement)==="A"&&this.adapter.observe(this.triggerElement,"click",function(t){return t.preventDefault(),t.stopPropagation(),t.stopped=!0}),s.target&&(s.fixed=!0),s.stem===!0&&(s.stem=new t.Joint(s.tipJoint)),s.target===!0?s.target=this.triggerElement:s.target&&(s.target=this.adapter.wrap(s.target)),this.currentStem=s.stem,s.delay==null&&(s.delay=s.showOn==="mouseover"?.2:0),s.targetJoint==null&&(s.targetJoint=new t.Joint(s.tipJoint).flip()),this.showTriggers=[],this.showTriggersWhenVisible=[],this.hideTriggers=[],s.showOn&&s.showOn!=="creation"&&this.showTriggers.push({element:this.triggerElement,event:s.showOn}),s.ajaxCache!=null&&(s.cache=s.ajaxCache,delete s.ajaxCache),this.options=s,this.bound={},v=["prepareToShow","prepareToHide","show","hide","reposition"],u=0,g=v.length;g>u;u++)a=v[u],this.bound[a]=function(t){return function(){return w[t].apply(w,arguments)}}(a);this.adapter.domReady(function(){return w.activate(),w.options.showOn==="creation"?w.prepareToShow():void 0})}return t.prototype.STICKS_OUT_TOP=1,t.prototype.STICKS_OUT_BOTTOM=2,t.prototype.STICKS_OUT_LEFT=1,t.prototype.STICKS_OUT_RIGHT=2,t.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"},t.prototype._setup=function(){var t,e,i,o,s,n,r,a,h,p,d;for(this.debug("Setting up the tooltip."),this._buildContainer(),this.hideTriggers=[],h=this.options.hideTriggers,o=s=0,r=h.length;r>s;o=++s){if(e=h[o],i=null,t=this.options.hideOn instanceof Array?this.options.hideOn[o]:this.options.hideOn,typeof e=="string")switch(e){case"trigger":t=t||"mouseout",i=this.triggerElement;break;case"tip":t=t||"mouseover",i=this.container;break;case"target":t=t||"mouseover",i=this.options.target;break;case"closeButton":break;default:throw Error("Unknown hide trigger: "+e+".")}else t=t||"mouseover",i=this.adapter.wrap(e);i&&this.hideTriggers.push({element:i,event:t,original:e})}for(p=this.hideTriggers,d=[],n=0,a=p.length;a>n;n++)e=p[n],d.push(this.showTriggersWhenVisible.push({element:e.element,event:"mouseover"}));return d},t.prototype._buildContainer=function(){return this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>'),this.adapter.css(this.container,{position:"absolute"}),this.options.ajax&&this.adapter.addClass(this.container,this["class"].loading),this.options.fixed&&this.adapter.addClass(this.container,this["class"].fixed),this.options.showEffect&&this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect),this.options.hideEffect?this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect):void 0},t.prototype._buildElements=function(){var t,e;return this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>'),this.backgroundCanvas=this.adapter.wrap(document.createElement("canvas")),this.adapter.css(this.backgroundCanvas,{position:"absolute"}),typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager!==null&&G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)),t=this.adapter.find(this.tooltipElement,"."+this["class"].header),this.options.title&&(e=this.adapter.create("<h1></h1>"),this.adapter.update(e,this.options.title,this.options.escapeTitle),this.adapter.append(t,e)),this.options.ajax&&!this.loaded&&this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>')),__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>'),this.adapter.append(t,this.closeButtonElement)),this.adapter.append(this.container,this.backgroundCanvas),this.adapter.append(this.container,this.tooltipElement),this.adapter.append(document.body,this.container),this._newContent=!0,this.redraw=!0},t.prototype.setContent=function(t){return this.content=t,this._newContent=!0,typeof this.content=="function"?(this._contentFunction=this.content,this.content=""):this._contentFunction=null,this.visible?this._updateElementContent():void 0},t.prototype._updateElementContent=function(){var t;return(this._newContent||!this.options.cache&&this._contentFunction)&&(t=this.adapter.find(this.container,"."+this["class"].content),t!=null&&(this._contentFunction&&(this.debug("Executing content function."),this.content=this._contentFunction(this)),this.adapter.update(t,this.content,this.options.escapeContent)),this._newContent=!1),this._storeAndLockDimensions(),this.reposition()},t.prototype._storeAndLockDimensions=function(){var t;if(this.container)return t=this.dimensions,this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"}),this.dimensions=this.adapter.dimensions(this.container),this.dimensions.width+=1,this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"}),this._dimensionsEqual(this.dimensions,t)?void 0:(this.redraw=!0,this._draw())},t.prototype.activate=function(){return this._setupObservers("hidden","hiding")},t.prototype.deactivate=function(){return this.debug("Deactivating tooltip."),this.hide(),this._setupObservers("-showing","-visible","-hidden","-hiding")},t.prototype._setupObservers=function(){var t,e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m=this;for(o=arguments.length>=1?__slice.call(arguments,0):[],n=0,p=o.length;p>n;n++)if(i=o[n],e=!1,i.charAt(0)==="-"&&(e=!0,i=i.substr(1)),this.currentObservers[i]!==!e)switch(this.currentObservers[i]=!e,t=function(){var t,i,o;return t=arguments.length>=1?__slice.call(arguments,0):[],e?(i=m.adapter).stopObserving.apply(i,t):(o=m.adapter).observe.apply(o,t)},i){case"showing":for(c=this.hideTriggers,r=0,d=c.length;d>r;r++)s=c[r],t(s.element,s.event,this.bound.prepareToHide);t(document.onresize!=null?document:window,"resize",this.bound.reposition),t(window,"scroll",this.bound.reposition);break;case"visible":for(g=this.showTriggersWhenVisible,a=0,l=g.length;l>a;a++)s=g[a],t(s.element,s.event,this.bound.prepareToShow);break;case"hiding":for(f=this.showTriggers,h=0,u=f.length;u>h;h++)s=f[h],t(s.element,s.event,this.bound.prepareToShow);break;case"hidden":break;default:throw Error("Unknown state: "+i)}return null},t.prototype.prepareToShow=function(){return this._abortHiding(),this._abortShowing(),this.visible?void 0:(this.debug("Showing in "+this.options.delay+"s."),this.container==null&&this._setup(),this.options.group&&t._abortShowingGroup(this.options.group,this),this.preparingToShow=!0,this._setupObservers("-hidden","-hiding","showing"),this._followMousePosition(),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0))},t.prototype.show=function(){var e=this;return this._abortHiding(),this.visible?void 0:(this._clearTimeouts(),this._triggerElementExists()?(this.debug("Showing now."),this.container==null&&this._setup(),this.options.group&&t._hideGroup(this.options.group,this),this.visible=!0,this.preparingToShow=!1,this.tooltipElement==null&&this._buildElements(),this._updateElementContent(),!this.options.ajax||this.loaded&&this.options.cache||this._loadAjax(),this._searchAndActivateCloseButtons(),this._startEnsureTriggerElement(),this.adapter.css(this.container,{zIndex:t.lastZIndex++}),this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible"),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this.adapter.removeClass(this.container,this["class"].hiding),this.adapter.removeClass(this.container,this["class"].hidden),this.adapter.addClass(this.container,this["class"].goingToShow),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var t;if(e.visible&&!e.preparingToHide)return e.adapter.removeClass(e.container,e["class"].goingToShow),e.adapter.addClass(e.container,e["class"].showing),t=0,e.options.showEffect&&e.options.showEffectDuration&&(t=e.options.showEffectDuration),e.setCss3Style(e.container,{transitionDuration:""+t+"s"}),e._visibilityStateTimeoutId=e.setTimeout(function(){return e.adapter.removeClass(e.container,e["class"].showing),e.adapter.addClass(e.container,e["class"].visible)},t),e._activateFirstInput()}),this._draw()):this.deactivate())},t.prototype._abortShowing=function(){return this.preparingToShow?(this.debug("Aborting showing."),this._clearTimeouts(),this._stopFollowingMousePosition(),this.preparingToShow=!1,this._setupObservers("-showing","-visible","hiding","hidden")):void 0},t.prototype.prepareToHide=function(){return this._abortShowing(),this._abortHiding(),this.visible?(this.debug("Hiding in "+this.options.hideDelay+"s"),this.preparingToHide=!0,this._setupObservers("-showing","visible","-hidden","hiding"),this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)):void 0},t.prototype.hide=function(){var t=this;return this._abortShowing(),this.visible&&(this._clearTimeouts(),this.debug("Hiding!"),this.visible=!1,this.preparingToHide=!1,this._stopEnsureTriggerElement(),this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden"),this.options.fixed||this._stopFollowingMousePosition(),this.container)?(this.adapter.removeClass(this.container,this["class"].visible),this.adapter.removeClass(this.container,this["class"].showing),this.adapter.addClass(this.container,this["class"].goingToHide),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var e;return t.adapter.removeClass(t.container,t["class"].goingToHide),t.adapter.addClass(t.container,t["class"].hiding),e=0,t.options.hideEffect&&t.options.hideEffectDuration&&(e=t.options.hideEffectDuration),t.setCss3Style(t.container,{transitionDuration:""+e+"s"}),t._visibilityStateTimeoutId=t.setTimeout(function(){return t.adapter.removeClass(t.container,t["class"].hiding),t.adapter.addClass(t.container,t["class"].hidden),t.setCss3Style(t.container,{transitionDuration:"0s"}),t.options.removeElementsOnHide?(t.debug("Removing HTML elements."),t.adapter.remove(t.container),delete t.container,delete t.tooltipElement):void 0},e)})):void 0},t.prototype._abortHiding=function(){return this.preparingToHide?(this.debug("Aborting hiding."),this._clearTimeouts(),this.preparingToHide=!1,this._setupObservers("-hiding","showing","visible")):void 0},t.prototype.reposition=function(){var t,e,i,o=this;return t=this.getPosition(),t==null||(e=this.options.stem,this.options.containInViewport&&(i=this._ensureViewportContainment(t),t=i.position,e=i.stem),this._positionsEqual(t,this.currentPosition))?void 0:(this.options.stem&&!e.eql(this.currentStem)&&(this.redraw=!0),this.currentPosition=t,this.currentStem=e,this._draw(),this.adapter.css(this.container,{left:""+t.left+"px",top:""+t.top+"px"}),this.defer(function(){var t,e;return t=o.adapter.unwrap(o.container),t.style.visibility="hidden",e=t.offsetHeight,t.style.visibility="visible"}))},t.prototype.getPosition=function(t,e,i){var o,s,n,r,a,h,p,d,l;if(this.container)return t==null&&(t=this.options.tipJoint),e==null&&(e=this.options.targetJoint),r={},this.options.target?(p=this.adapter.offset(this.options.target),h=this.adapter.dimensions(this.options.target),r=p,e.right?(d=this.adapter.unwrap(this.options.target),d.getBoundingClientRect!=null?r.left=d.getBoundingClientRect().right+((l=window.pageXOffset)!=null?l:document.body.scrollLeft):r.left+=h.width):e.center&&(r.left+=Math.round(h.width/2)),e.bottom?r.top+=h.height:e.middle&&(r.top+=Math.round(h.height/2)),this.options.borderWidth&&(this.options.tipJoint.left&&(r.left+=this.options.borderWidth),this.options.tipJoint.right&&(r.left-=this.options.borderWidth),this.options.tipJoint.top?r.top+=this.options.borderWidth:this.options.tipJoint.bottom&&(r.top-=this.options.borderWidth))):r=this.initialMousePosition?{top:this.initialMousePosition.y,left:this.initialMousePosition.x}:{top:mousePosition.y,left:mousePosition.x},this.options.autoOffset&&(a=this.options.stem?this.options.stemLength:0,n=a&&this.options.fixed?2:10,o=t.middle&&!this.options.fixed?15:0,s=t.center&&!this.options.fixed?15:0,t.right?r.left-=n+o:t.left&&(r.left+=n+o),t.bottom?r.top-=n+s:t.top&&(r.top+=n+s),a&&(i==null&&(i=this.options.stem),i.right?r.left-=a:i.left&&(r.left+=a),i.bottom?r.top-=a:i.top&&(r.top+=a))),r.left+=this.options.offset[0],r.top+=this.options.offset[1],t.right?r.left-=this.dimensions.width:t.center&&(r.left-=Math.round(this.dimensions.width/2)),t.bottom?r.top-=this.dimensions.height:t.middle&&(r.top-=Math.round(this.dimensions.height/2)),r},t.prototype._ensureViewportContainment=function(e){var i,o,s,n,r,a,h,p,d,l,u,c;if(h=this.options.stem,s={position:e,stem:h},!this.visible||!e)return s;if(p=this._sticksOut(e),!p[0]&&!p[1])return s;if(l=new t.Joint(this.options.tipJoint),this.options.targetJoint&&(d=new t.Joint(this.options.targetJoint)),a=this.adapter.scrollOffset(),u=this.adapter.viewportDimensions(),c=[e.left-a[0],e.top-a[1]],i=!1,u.width>=this.dimensions.width&&p[0])switch(i=!0,p[0]){case this.STICKS_OUT_LEFT:l.setHorizontal("left"),this.options.targetJoint&&d.setHorizontal("right");break;case this.STICKS_OUT_RIGHT:l.setHorizontal("right"),this.options.targetJoint&&d.setHorizontal("left")}if(u.height>=this.dimensions.height&&p[1])switch(i=!0,p[1]){case this.STICKS_OUT_TOP:l.setVertical("top"),this.options.targetJoint&&d.setVertical("bottom");break;case this.STICKS_OUT_BOTTOM:l.setVertical("bottom"),this.options.targetJoint&&d.setVertical("top")}return i?(this.options.stem&&(h=l),e=this.getPosition(l,d,h),o=this._sticksOut(e),n=!1,r=!1,o[0]&&o[0]!==p[0]&&(n=!0,l.setHorizontal(this.options.tipJoint.horizontal),this.options.targetJoint&&d.setHorizontal(this.options.targetJoint.horizontal)),o[1]&&o[1]!==p[1]&&(r=!0,l.setVertical(this.options.tipJoint.vertical),this.options.targetJoint&&d.setVertical(this.options.targetJoint.vertical)),n&&r?s:((n||r)&&(this.options.stem&&(h=l),e=this.getPosition(l,d,h)),{position:e,stem:h})):s},t.prototype._sticksOut=function(t){var e,i,o,s;return i=this.adapter.scrollOffset(),s=this.adapter.viewportDimensions(),e=[t.left-i[0],t.top-i[1]],o=[!1,!1],0>e[0]?o[0]=this.STICKS_OUT_LEFT:e[0]+this.dimensions.width>s.width&&(o[0]=this.STICKS_OUT_RIGHT),0>e[1]?o[1]=this.STICKS_OUT_TOP:e[1]+this.dimensions.height>s.height&&(o[1]=this.STICKS_OUT_BOTTOM),o},t.prototype._draw=function(){var e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m,v,b,w,_=this;if(this.backgroundCanvas&&this.redraw){if(this.debug("Drawing background."),this.redraw=!1,this.currentStem){for(v=["top","right","bottom","left"],f=0,m=v.length;m>f;f++)u=v[f],this.adapter.removeClass(this.container,"stem-"+u);this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal),this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}return r=[0,0],a=[0,0],__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(n=new t.Joint(((b=this.currentStem)!=null?b+"":void 0)==="top right"?"top left":"top right"),r=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]],a=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]),o=this.adapter.clone(this.dimensions),s=[0,0],this.options.borderWidth&&(o.width+=this.options.borderWidth*2,o.height+=this.options.borderWidth*2,s[0]-=this.options.borderWidth,s[1]-=this.options.borderWidth),this.options.shadow&&(o.width+=this.options.shadowBlur*2,o.width+=Math.max(0,this.options.shadowOffset[0]-this.options.shadowBlur*2),o.height+=this.options.shadowBlur*2,o.height+=Math.max(0,this.options.shadowOffset[1]-this.options.shadowBlur*2),s[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]),s[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1])),i={left:0,right:0,top:0,bottom:0},this.currentStem&&(this.currentStem.left?i.left=this.options.stemLength:this.currentStem.right&&(i.right=this.options.stemLength),this.currentStem.top?i.top=this.options.stemLength:this.currentStem.bottom&&(i.bottom=this.options.stemLength)),n&&(n.left?i.left=Math.max(i.left,a[0]):n.right&&(i.right=Math.max(i.right,a[0])),n.top?i.top=Math.max(i.top,a[1]):n.bottom&&(i.bottom=Math.max(i.bottom,a[1]))),o.width+=i.left+i.right,o.height+=i.top+i.bottom,s[0]-=i.left,s[1]-=i.top,this.currentStem&&this.options.borderWidth&&(w=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),g=w.stemLength,c=w.stemBase),e=this.adapter.unwrap(this.backgroundCanvas),e.width=o.width,e.height=o.height,this.adapter.css(this.backgroundCanvas,{width:""+e.width+"px",height:""+e.height+"px",left:""+s[0]+"px",top:""+s[1]+"px"}),h=e.getContext("2d"),h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,e.width,e.height),h.beginPath(),h.fillStyle=this._getColor(h,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal),h.lineJoin="miter",h.miterLimit=500,l=this.options.borderWidth/2,this.options.borderWidth?(h.strokeStyle=this.options.borderColor,h.lineWidth=this.options.borderWidth):(g=this.options.stemLength,c=this.options.stemBase),c==null&&(c=0),d=function(t,e,i){return i&&h.moveTo(Math.max(c,_.options.borderRadius,r[0])+1-l,-l),e?(h.lineTo(t/2-c/2,-l),h.lineTo(t/2,-g-l),h.lineTo(t/2+c/2,-l)):void 0},p=function(t,e,i){var o,s,n,a;return t?(h.lineTo(-c+l,0-l),h.lineTo(g+l,-g-l),h.lineTo(l,c-l)):e?(a=_.options.closeButtonOffset,n=r[0],i%2!==0&&(a=[a[1],a[0]],n=r[1]),o=Math.acos(a[1]/_.options.closeButtonRadius),s=Math.acos(a[0]/_.options.closeButtonRadius),h.lineTo(-n+l,-l),h.arc(l-a[0],-l+a[1],_.options.closeButtonRadius,-(Math.PI/2+o),s,!1)):(h.lineTo(-_.options.borderRadius+l,-l),h.quadraticCurveTo(l,-l,l,_.options.borderRadius-l))},h.translate(-s[0],-s[1]),h.save(),function(){var e,i,o,s,r,a,l,u,c,g,f;for(f=[],i=c=0,g=t.positions.length/2;g>=0?g>c:c>g;i=g>=0?++c:--c)r=i*2,a=i===0||i===3?0:_.dimensions.width,l=2>i?0:_.dimensions.height,u=Math.PI/2*i,o=i%2===0?_.dimensions.width:_.dimensions.height,s=new t.Joint(t.positions[r]),e=new t.Joint(t.positions[r+1]),h.save(),h.translate(a,l),h.rotate(u),d(o,s.eql(_.currentStem),i===0),h.translate(o,0),p(e.eql(_.currentStem),e.eql(n),i),f.push(h.restore());return f}(),h.closePath(),h.save(),this.options.shadow&&(h.shadowColor=this.options.shadowColor,h.shadowBlur=this.options.shadowBlur,h.shadowOffsetX=this.options.shadowOffset[0],h.shadowOffsetY=this.options.shadowOffset[1]),h.fill(),h.restore(),this.options.borderWidth&&h.stroke(),h.restore(),n?function(){var t,e,i,o,s;return i=e=_.options.closeButtonRadius*2,n+""=="top right"?(s=[_.dimensions.width-_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]+l,s[1]-l]):(s=[_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]-l,s[1]-l]),h.translate(t[0],t[1]),o=_.options.closeButtonCrossSize/2,h.save(),h.beginPath(),h.strokeStyle=_.options.closeButtonCrossColor,h.lineWidth=_.options.closeButtonCrossLineWidth,h.lineCap="round",h.moveTo(-o,-o),h.lineTo(o,o),h.stroke(),h.beginPath(),h.moveTo(o,-o),h.lineTo(-o,o),h.stroke(),h.restore(),_.adapter.css(_.closeButtonElement,{left:""+(s[0]-o-_.options.closeButtonLinkOverscan)+"px",top:""+(s[1]-o-_.options.closeButtonLinkOverscan)+"px",width:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px",height:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px"})}():void 0}},t.prototype._getPathStemMeasures=function(t,e,i){var o,s,n,r,a,h,p;if(r=i/2,n=Math.atan(t/2/e),o=n*2,a=r/Math.sin(o),s=2*a*Math.cos(n),p=r+e-s,0>p)throw Error("Sorry but your stemLength / stemBase ratio is strange.");return h=Math.tan(n)*p*2,{stemLength:p,stemBase:h}},t.prototype._getColor=function(t,e,i,o){var s,n,r,a,h;if(o==null&&(o=!1),typeof i=="string")return i;for(n=o?t.createLinearGradient(0,0,e.width,0):t.createLinearGradient(0,0,0,e.height),r=a=0,h=i.length;h>a;r=++a)s=i[r],n.addColorStop(s[0],s[1]);return n},t.prototype._searchAndActivateCloseButtons=function(){var t,e,i,o;for(o=this.adapter.findAll(this.container,"."+this["class"].close),e=0,i=o.length;i>e;e++)t=o[e],this.hideTriggers.push({element:this.adapter.wrap(t),event:"click"});return this.currentObservers.showing&&this._setupObservers("-showing","showing"),this.currentObservers.visible?this._setupObservers("-visible","visible"):void 0},t.prototype._activateFirstInput=function(){var t;return t=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea")),t!=null?typeof t.focus=="function"?t.focus():void 0:void 0},t.prototype._followMousePosition=function(){return this.options.fixed?void 0:t._observeMousePosition(this.bound.reposition)},t.prototype._stopFollowingMousePosition=function(){return this.options.fixed?void 0:t._stopObservingMousePosition(this.bound.reposition)},t.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)},t.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)},t.prototype._clearTimeouts=function(){return clearTimeout(this._visibilityStateTimeoutId),this._clearShowTimeout(),this._clearHideTimeout()},t.prototype._triggerElementExists=function(){var t;t=this.adapter.unwrap(this.triggerElement);while(t.parentNode){if(t.parentNode.tagName==="BODY")return!0;t=t.parentNode}return!1},t.prototype._loadAjax=function(){var t=this;if(!this.loading)return this.loaded=!1,this.loading=!0,this.adapter.addClass(this.container,this["class"].loading),this.setContent(""),this.debug("Loading content from "+this.options.ajax),this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(e){return t.debug("Loading successful."),t.adapter.removeClass(t.container,t["class"].loading),t.setContent(e)},onError:function(e){var i;return i=t.options.ajaxErrorMessage,t.debug(i,e),t.setContent(i),t.adapter.addClass(t.container,t["class"].ajaxError)},onComplete:function(){return t.adapter.removeClass(t.container,t["class"].loading),t.loading=!1,t.loaded=!0,t._searchAndActivateCloseButtons(),t._activateFirstInput(),t.reposition()}})},t.prototype._ensureTriggerElement=function(){return this._triggerElementExists()?void 0:(this.deactivate(),this._stopEnsureTriggerElement())},t.prototype._ensureTriggerElementInterval=1e3,t.prototype._startEnsureTriggerElement=function(){var t=this;return this._ensureTriggerElementTimeoutId=setInterval(function(){return t._ensureTriggerElement()},this._ensureTriggerElementInterval)},t.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)},t}(),vendors=["khtml","ms","o","moz","webkit"],Opentip.prototype.setCss3Style=function(t,e){var i,o,s,n,r;t=this.adapter.unwrap(t),r=[];for(i in e)__hasProp.call(e,i)&&(o=e[i],t.style[i]!=null?r.push(t.style[i]=o):r.push(function(){var e,r,a;for(a=[],e=0,r=vendors.length;r>e;e++)s=vendors[e],n=""+this.ucfirst(s)+this.ucfirst(i),t.style[n]!=null?a.push(t.style[n]=o):a.push(void 0);return a}.call(this)));return r},Opentip.prototype.defer=function(t){return setTimeout(t,0)},Opentip.prototype.setTimeout=function(t,e){return setTimeout(t,e?e*1e3:0)},Opentip.prototype.ucfirst=function(t){return t==null?"":t.charAt(0).toUpperCase()+t.slice(1)},Opentip.prototype.dasherize=function(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})},mousePositionObservers=[],mousePosition={x:0,y:0},mouseMoved=function(t){var e,i,o,s;for(mousePosition=Opentip.adapter.mousePosition(t),s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],s.push(e());return s},Opentip.followMousePosition=function(){return Opentip.adapter.observe(document.body,"mousemove",mouseMoved)},Opentip._observeMousePosition=function(t){return mousePositionObservers.push(t)},Opentip._stopObservingMousePosition=function(t){var e;return mousePositionObservers=function(){var i,o,s;for(s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],e!==t&&s.push(e);return s}()},Opentip.Joint=function(){function t(t){t!=null&&(t instanceof Opentip.Joint&&(t+=""),this.set(t))}return t.prototype.set=function(t){return t=t.toLowerCase(),this.setHorizontal(t),this.setVertical(t),this},t.prototype.setHorizontal=function(t){var e,i,o,s,n,r,a;for(i=["left","center","right"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.horizontal=e.toLowerCase());for(this.horizontal==null&&(this.horizontal="center"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.horizontal===e?e:void 0);return a},t.prototype.setVertical=function(t){var e,i,o,s,n,r,a;for(i=["top","middle","bottom"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.vertical=e.toLowerCase());for(this.vertical==null&&(this.vertical="middle"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.vertical===e?e:void 0);return a},t.prototype.eql=function(t){return t!=null&&this.horizontal===t.horizontal&&this.vertical===t.vertical},t.prototype.flip=function(){var t,e;return e=Opentip.position[this.toString(!0)],t=(e+4)%8,this.set(Opentip.positions[t]),this},t.prototype.toString=function(t){var e,i;return t==null&&(t=!1),i=this.vertical==="middle"?"":this.vertical,e=this.horizontal==="center"?"":this.horizontal,i&&e&&(e=t?Opentip.prototype.ucfirst(e):" "+e),""+i+e},t}(),Opentip.prototype._positionsEqual=function(t,e){return t!=null&&e!=null&&t.left===e.left&&t.top===e.top},Opentip.prototype._dimensionsEqual=function(t,e){return t!=null&&e!=null&&t.width===e.width&&t.height===e.height},Opentip.prototype.debug=function(){var t;return t=arguments.length>=1?__slice.call(arguments,0):[],Opentip.debug&&(typeof console!="undefined"&&console!==null?console.debug:void 0)!=null?(t.unshift("#"+this.id+" |"),console.debug.apply(console,t)):void 0},Opentip.findElements=function(){var t,e,i,o,s,n,r,a,h,p;for(t=Opentip.adapter,h=t.findAll(document.body,"[data-ot]"),p=[],r=0,a=h.length;a>r;r++){i=h[r],n={},e=t.data(i,"ot"),(e===""||e==="true"||e==="yes")&&(e=t.attr(i,"title"),t.attr(i,"title","")),e=e||"";for(o in Opentip.styles.standard)s=t.data(i,"ot"+Opentip.prototype.ucfirst(o)),s!=null&&(s==="yes"||s==="true"||s==="on"?s=!0:(s==="no"||s==="false"||s==="off")&&(s=!1),n[o]=s);p.push(new Opentip(i,e,n))}return p},Opentip.version="2.4.6",Opentip.debug=!1,Opentip.lastId=0,Opentip.lastZIndex=100,Opentip.tips=[],Opentip._abortShowingGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i._abortShowing()):r.push(void 0);return r},Opentip._hideGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i.hide()):r.push(void 0);return r},Opentip.adapters={},Opentip.adapter=null,firstAdapter=!0,Opentip.addAdapter=function(t){return Opentip.adapters[t.name]=t,firstAdapter?(Opentip.adapter=t,t.domReady(Opentip.findElements),t.domReady(Opentip.followMousePosition),firstAdapter=!1):void 0},Opentip.positions=["top","topRight","right","bottomRight","bottom","bottomLeft","left","topLeft"],Opentip.position={},_ref=Opentip.positions,i=_i=0,_len=_ref.length;_len>_i;i=++_i)position=_ref[i],Opentip.position[position]=i;Opentip.styles={standard:{"extends":null,title:void 0,escapeTitle:!0,escapeContent:!1,className:"standard",stem:!0,delay:null,hideDelay:.1,fixed:!1,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:!1,offset:[0,0],containInViewport:!0,autoOffset:!0,showEffect:"appear",hideEffect:"fade",showEffectDuration:.3,hideEffectDuration:.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:!0,ajax:!1,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,style:null,background:"#fff18f",backgroundGradientHorizontal:!1,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:!0,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[.5,"rgba(255, 255, 255, 0.8)"],[.5,"rgba(250, 250, 250, 0.9)"],[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[.5,"rgba(30, 30, 30, 0.8)"],[.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[.5,"rgba(203, 15, 19, 0.8)"],[.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}},Opentip.defaultStyle="standard",typeof module!="undefined"&&module!==null?module.exports=Opentip:window.Opentip=Opentip;var __slice=[].slice;(function(t){var e;return t.fn.opentip=function(t,e,i){return new Opentip(this,t,e,i)},e=function(){function e(){}return e.prototype.name="jquery",e.prototype.domReady=function(e){return t(e)},e.prototype.create=function(e){return t(e)},e.prototype.wrap=function(e){if(e=t(e),e.length>1)throw Error("Multiple elements provided.");return e},e.prototype.unwrap=function(e){return t(e)[0]
},e.prototype.tagName=function(t){return this.unwrap(t).tagName},e.prototype.attr=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).attr.apply(o,e)},e.prototype.data=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).data.apply(o,e)},e.prototype.find=function(e,i){return t(e).find(i).get(0)},e.prototype.findAll=function(e,i){return t(e).find(i)},e.prototype.update=function(e,i,o){return e=t(e),o?e.text(i):e.html(i)},e.prototype.append=function(e,i){return t(e).append(i)},e.prototype.remove=function(e){return t(e).remove()},e.prototype.addClass=function(e,i){return t(e).addClass(i)},e.prototype.removeClass=function(e,i){return t(e).removeClass(i)},e.prototype.css=function(e,i){return t(e).css(i)},e.prototype.dimensions=function(e){return{width:t(e).outerWidth(),height:t(e).outerHeight()}},e.prototype.scrollOffset=function(){return[window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop]},e.prototype.viewportDimensions=function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},e.prototype.mousePosition=function(t){return t==null?null:{x:t.pageX,y:t.pageY}},e.prototype.offset=function(e){var i;return i=t(e).offset(),{left:i.left,top:i.top}},e.prototype.observe=function(e,i,o){return t(e).bind(i,o)},e.prototype.stopObserving=function(e,i,o){return t(e).unbind(i,o)},e.prototype.ajax=function(e){var i,o;if(e.url==null)throw Error("No url provided");return t.ajax({url:e.url,type:(i=(o=e.method)!=null?o.toUpperCase():void 0)!=null?i:"GET"}).done(function(t){return typeof e.onSuccess=="function"?e.onSuccess(t):void 0}).fail(function(t){return typeof e.onError=="function"?e.onError("Server responded with status "+t.status):void 0}).always(function(){return typeof e.onComplete=="function"?e.onComplete():void 0})},e.prototype.clone=function(e){return t.extend({},e)},e.prototype.extend=function(){var e,i;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],t.extend.apply(t,[i].concat(__slice.call(e)))},e}(),Opentip.addAdapter(new e)})(jQuery);

/* dt-language: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/themes/qfy-01/js/language.js) */
jQuery(function(){
	 if(jQuery.datepicker){
		 jQuery.datepicker.regional['zh-CN'] = {
			 closeText: '关闭',
			 prevText: '&#x3c;上月',
			 nextText: '下月&#x3e;',
			 currentText: '今天',
			 monthNames: ['一月','二月','三月','四月','五月','六月',
				 '七月','八月','九月','十月','十一月','十二月'],
			 monthNamesShort: ['一月','二月','三月','四月','五月','六月',
				 '七月','八月','九月','十月','十一月','十二月'],
			 dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			 dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
			 dayNamesMin: ['日','一','二','三','四','五','六'],
			 weekHeader: '周',
			 dateFormat: 'yy-mm-dd',
			 firstDay: 1,
			 isRTL: false,
			 showMonthAfterYear: true,
			 yearSuffix: '年'};

		 jQuery.datepicker.regional['zh-TW'] = {
		        clearText: '清除',
		        clearStatus: '清除已選日期',
		        closeText: '關閉',
		        closeStatus: '不改變當前選擇',
		        prevText: '<上月',
		        prevStatus: '顯示上月',
		        prevBigText: '<<',
		        prevBigStatus: '顯示上壹年',
		        nextText: '下月>',
		        nextStatus: '顯示下月',
		        nextBigText: '>>',
		        nextBigStatus: '顯示下壹年',
		        currentText: '今天',
		        currentStatus: '顯示本月',
		        monthNames: ['壹月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十壹月','十二月'],
		        monthNamesShort: ['壹','二','三','四','五','六', '七','八','九','十','十壹','十二'],
		        monthStatus: '選擇月份',
		        yearStatus: '選擇年份',
		        weekHeader: '周',
		        weekStatus: '年內周次',
		        dayNames: ['星期日','星期壹','星期二','星期三','星期四','星期五','星期六'],
		        dayNamesShort: ['周日','周壹','周二','周三','周四','周五','周六'],
		        dayNamesMin: ['日','壹','二','三','四','五','六'],
		        dayStatus: '設置 DD 為壹周起始',
		        dateStatus: '選擇 m月 d日, DD',
		        dateFormat: 'yy-mm-dd',
		        firstDay: 1,
		        initStatus: '請選擇日期',
		        isRTL: false};

		if(dtGlobals.language==""){
			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']);
		}else if(dtGlobals.language=="2"){
			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-TW']); 
		}
	 }
	 if(jQuery.timepicker){
		jQuery.timepicker.regional['zh-CN'] = {
				currentText: '当前时间',
				closeText: '确认',
				timeOnlyTitle: '选择时间',
				timeText: '时间',
				hourText: '小时',
				minuteText: '分钟',
				secondText: '秒',
				millisecText: '毫秒',
				timezoneText: '时区',
		        isRTL: false}; 
		 jQuery.timepicker.regional['zh-TW'] = {
				currentText: '當前時間',
				closeText: '確認',
				timeOnlyTitle: '選擇時間',
				timeText: '時間',
				hourText: '小時',
				minuteText: '分鐘',
				secondText: '秒',
				millisecText: '毫秒',
				timezoneText: '時區',
		        isRTL: false}; 
		if(dtGlobals.language==""){
			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-CN']); 
		}else if(dtGlobals.language=="2"){
			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-TW']); 
		}
	 }
	
})
;

/* dt-main-roya-js: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/FeiEditor/bitSite/js/jquery.royalslider.min.js) */
// jQuery RoyalSlider plugin. Copyright Dmitry Semenov http://dimsemenov.com 
// jquery.royalslider v9.5.7
(function(n){function v(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,q;for(c=0;c<h.length;c++)q=h[c],!k&&q+"Transform"in d&&(k=q),q=q.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[q+"RequestAnimationFrame"],window.cancelAnimationFrame=window[q+"CancelAnimationFrame"]||window[q+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var r=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=
n(b.target).attr("class");if(-1!==n.inArray(c,r)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});v.prototype={constructor:v,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;
b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),
e=b.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),
g.customClass=d.eq(0).attr("data-class"),g.customStyle=d.eq(0).attr("data-style"),		
d.each(function(){var a=
n(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){if(!b.st.keyboardNavEnabled)return!0;if(!(b._l2||(c=
e.keyCode,37!==c&&39!==c||f))){if(document.activeElement&&/(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))return!0;b.isFullscreen&&e.preventDefault();a(c);f=setInterval(function(){a(c)},700)}}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+
" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=
!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>q-1)return g(a-q);if(0>a)return g(q+a)}return a}var d=this,h,k,l=d._z,q=d.numSlides;if(!isNaN(f))return g(f);var m=d.currSlideId,p,r=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,t=Math.min(2,r),w=!1,v=!1,u;for(k=m;k<m+1+t;k++)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){w=!0;break}for(k=m-1;k>m-1-t;k--)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){v=!0;break}if(w)for(k=
m;k<m+r+1;k++)u=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[u])&&c(h,u);if(v)for(k=m-1;k>m-1-r;k--)u=g(k),p=Math.floor((d._u-(m-k))/q)*q,(h=d.slides[u])&&c(h,u);if(!b)for(t=g(m-r),m=g(m+r),r=t>m?0:t,k=0;k<q;k++)t>m&&k>t-1||!(k<r||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,
f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){
	var srcset = "";
	var a=n(this),
		srcset=a.attr("data-srcset")?"srcset='"+a.attr("data-srcset")+"'":"",c='<img data-class="'+a.attr("data-class")+'"  '+srcset+' data-style="'+a.attr("data-style")+'" class="rsImg '+a.attr("data-class")+'" src="'+(a.is("a")?a.attr("href"):a.text())+'" style="'+a.attr("data-style")+'" />';f?b.content=n(c):a.replaceWith(c)});a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");

b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");
b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");b.numStartedLoad++;h.on("load.rs error.rs",a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=
e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);
b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},h=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=
!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&
(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===
d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=
b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),
c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),
e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var q=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?
b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var r=e.currSlideId,t=e.numSlides,w=d?e._f3:e._g3,v=e._z;Math.abs(m-p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===w||1>=t)a(!0,d);else{if(!v&&!f)if(0>=r){if(0<w){a(!0,d);return}}else if(r>=t-1&&0>w){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/
.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>q&&b++;return b},p+q<m?0>w?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-q>m?0<w?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:
0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=this.st.autoScaleSliderWidth,e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),
c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,
(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",
[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=
0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?
this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===
b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),r=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,
r):Math.min(p,r))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display",
"block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout",
"")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout",
"");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",
zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:
b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,a=(-c._u-c._d1)*c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",
e,g=n.isFunction(this.st.imageAlignCenter)?this.st.imageAlignCenter(b):this.st.imageAlignCenter,d=n.isFunction(this.st.imageScaleMode)?this.st.imageScaleMode(b):this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));c.hasClass(a)||(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var q=this._c4-2*a,m,p,r={};"fit-if-smaller"===
d&&(k>h||l>q)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=q/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(r.width=k,r.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(r.marginLeft=Math.floor((h-k)/2)+a,r.marginTop=Math.floor((q-l)/2)+a);c.css(r).css("marginLeft","0").css("marginTop","0");c.parent().css(r);}}}}};n.rsProto=v.prototype;n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,
Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new v(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,
addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,
f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.thumbnails v1.0.8
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,b,c){b=f(b);c.thumbnail=b.find(".rsTmb").remove();c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html():(c.thumbnail=b.attr("data-rsTmb"),c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")),c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,b,c){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";a._e&&a._s3.css(a._g+"transition-duration","0ms");c>=a.numSlides?a._s3.append(e):a._l5.eq(c).before(e);a._l5=a._s3.children();a.updateThumbsSize(!0)}),a.ev.on("rsOnRemoveSlide",function(e,b){var c=a._l5.eq(b);c&&(a._e&&a._s3.css(a._g+"transition-duration","0ms"),c.remove(),
a._l5=a._s3.children(),a.updateThumbsSize(!0))}))},_k6:function(){var a=this,e="rsThumbs",b=a.st.thumbs,c="",g,d,h=b.spacing;a._j5=!0;a._e3="vertical"===b.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=b.arrows&&b.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=b.appendSpan?'<span class="thumbIco"></span>':
"";for(var k=0;k<a.numSlides;k++)d=a.slides[k],c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";c=f(c+"</div></div>");g={};b.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=b.paddingTop);b.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=b.paddingBottom);c.css(g);a._s3=f(c).find("."+e+"Container");a._q6&&(e+="Arrow",b.arrowLeft?a._r6=b.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),c.append(a._r6)),b.arrowRight?a._s6=b.arrowRight:
(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),c.append(a._s6)),a._r6.click(function(){var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b<a._o3?a._o3:b)}),b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),c.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),
c.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=c;a._l5=a._s3.children();a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(c);a._w3=!0;a._v6=h;b.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)});a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(b,c){a.updateThumbsSize(!0,c)})},updateThumbsSize:function(a,e){var b=this,c=b._l5.first(),f={},d=b._l5.length;b._t6=(b._e3?c.outerWidth():c.outerHeight())+b._v6;b._y3=d*b._t6-b._v6;f[b._e3?"width":"height"]=b._y3+b._v6;b._z3=b._e3?b._k5.width():void 0!==e?e:b._k5.height();b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight():
b._b4=b._w6-b._k5.outerWidth());b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin,b._n3=b.st.thumbs.firstMargin,b._u6=Math.floor(b._z3/b._t6),b._y3<b._z3?(b.st.thumbs.autoCenter?b._q3((b._z3-b._y3)/2):b._q3(b._n3),b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"),b._s6.addClass("rsThumbsArrowDisabled")),b._l6=!1,b._m5=!1,b._k5.off(b._j1)):b.st.thumbs.navigation&&!b._l6&&(b._l6=!0,!b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0,b._k5.on(b._j1,function(a){b._g2(a,
!0)})),b._s3.css(f),a&&e&&b._m6(b.currSlideId,!0))},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,b,c,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);
d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),b=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,e,b?"easeOutCubic":d.st.easeInOut));c&&(d._i3=c);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(c,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):
this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var b=0,c,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(b=1),d=-a+this._u6-2+b,c=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+
this._n3):c=this._n3,c!==this._i3&&(b=void 0===c?this._i3:c,b>this._n3?this._q3(this._n3):b<this._o3?this._q3(this._o3):void 0!==c&&(e?this._q3(c):this._a4(c))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.fullscreen v1.0.6
var scrollTop_fullscreen=false;
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){  if(scrollTop_fullscreen===false){scrollTop_fullscreen =  jQuery("html").scrollTop();if(scrollTop_fullscreen==0) scrollTop_fullscreen =  jQuery("body").scrollTop();};var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");jQuery("body").addClass("rsBodyFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){	var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");jQuery("body").removeClass("rsBodyFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen");if(scrollTop_fullscreen!==false){ jQuery("html,body").scrollTop(scrollTop_fullscreen);scrollTop_fullscreen=false};}},_c6:function(a,b){

var d=a.isLoaded||a.isLoading?'<img data-class="'+a.customClass+'"  data-style="'+a.customStyle+'"  class="rsImg rsMainSlideImage '+a.customClass+'" style="'+a.customStyle+'" src="'+a.image+'"/>':'<a data-class="'+a.customClass+'"  data-style="'+a.customStyle+'" class="rsImg rsMainSlideImage '+a.customClass+'" style="'+a.customStyle+'" href="'+a.image+'"></a>';

a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;a._f5||a._e5||(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;a._z||a.st.loopRewind||(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),
this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.video v1.1.3
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._a7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var d=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,c,e){b=f(c);if(e.videoURL){a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);c=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?
e.content=c.append(b).append(g):e.content.find(".rsImg").wrap(c).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var d=a.currSlide;if(!d.videoURL)return!1;a._d7=d;var b=a._e7=d.content,d=d.videoURL,c,e;d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,(e=d.match(e))&&11==e[7].length&&
(c=e[7]),void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%",c))):d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/,(e=d.match(e))&&(c=e[2]),void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%",c)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[d]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?
b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);var d=a._c7.find("iframe");if(d.length)try{d.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_f7:function(a,d){var b=[],c=this.st.video;c.autoHideArrows&&(this._c2&&(b.push(this._c2,this._d2),this._e2=!a),this._v5&&b.push(this._v5));c.autoHideControlNav&&this._k5&&b.push(this._k5);c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);this.slider[a?"removeClass":
"addClass"]("rsVideoPlaying");if(b.length)for(c=0;c<b.length;c++)a?b[c].removeClass("rsHidden"):b[c].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l){l.extend(l.rsProto,{_p4:function(){function m(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=l.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){m()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=l(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display","none"):d.animBlocks=!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){m()},a.st.fadeinLoadedSlide?
300:0)});a.ev.on("rsAfterSlideChange",function(){m()})},_v4:function(l,a){setTimeout(function(){l.css(a)},6)},_u4:function(m){var a=this,b,g,f,d,h,e,n;a._s4=[];m.each(function(m){b=l(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var p;p="right"===
e||"left"===e?!0:!1;var k;n=!1;a._e?(k=0,h=a._x1):(p?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",n=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",n=!0),h="margin-"+h,n&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),isNaN(k)&&(k=0),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,p);g[h]=a._m4(k,p)}c=b.attr("data-fade-effect");if(!c)c=a.st.block.fadeEffect;else if("none"===c.toLowerCase()||
"false"===c.toLowerCase())c=!1;c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=l.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*m);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,
f);a._s4.push(setTimeout(function(b,d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,m),6>=d.delay?12:d.delay))})}});l.rsModules.animatedBlocks=l.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,c,e,f=!0,d=function(d){e=a.slides[a.currSlideId];(b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c,a._e||!d?a._e1.css("height",c):a._e1.stop(!0,!0).animate({height:c},a.st.transitionSpeed),a.ev.trigger("rsAutoHeightChange",c),f&&(a._e&&setTimeout(function(){a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16),f=!1))};a.ev.on("rsMaybeSizeReady.rsAutoHeight",
function(a,b){e===b&&d()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&d()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){d(!1);setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});a.ev.on("rsBeforeAnimStart",function(){d(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){d(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.global-caption v1.0.1
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption||"")}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption||"")}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,h,d,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var g=a.st.deeplinking.change,e=a.st.deeplinking.prefix,c="#"+e,k=function(){var a=window.location.hash;return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length),10),0<=a)?a-1:-1},p=k();-1!==p&&(a.st.startSlideId=p);g&&(b(window).on("hashchange"+a.ns,function(b){h||(b=k(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){d&&clearTimeout(d);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){d&&clearTimeout(d);f&&clearTimeout(f);f=setTimeout(function(){h=!0;window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));d=setTimeout(function(){h=!1;d=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){d=f=null;g&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,h){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f=document,g,e=b.event.special,c=f.documentMode,k="onhashchange"in a&&(c===h||7<c);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;e.hashchange=b.extend(e.hashchange,{setup:function(){if(k)return!1;b(g.start)},teardown:function(){if(k)return!1;b(g.stop)}});g=function(){function g(){var f=d(),e=q(l);f!==l?(m(l=f,e),b(a).trigger("hashchange")):
e!==l&&(location.href=location.href.replace(/#.*/,"")+e);c=setTimeout(g,b.fn.hashchange.delay)}var e={},c,l=d(),n=function(a){return a},m=n,q=n;e.start=function(){c||g()};e.stop=function(){c&&clearTimeout(c);c=h};a.attachEvent&&!a.addEventListener&&!k&&function(){var a,c;e.start=function(){a||(c=(c=b.fn.hashchange.src)&&c+d(),a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||m(d());g()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=
function(){try{"title"===event.propertyName&&(a.document.title=f.title)}catch(b){}})};e.stop=n;q=function(){return d(a.location.href)};m=function(c,e){var d=a.document,g=b.fn.hashchange.domain;c!==e&&(d.title=f.title,d.open(),g&&d.write('<script>document.domain="'+g+'"\x3c/script>'),d.close(),a.location.hash=c)}}();return e}()})(jQuery,this);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:.6,center:!0,breakpoint:0,breakpointCenterArea:.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);

function _bit_newgallery(obj){
	obj.each(function(){
		var imageScaleMode = jQuery(this).attr("imageScaleMode")?jQuery(this).attr("imageScaleMode"):"fit-if-smaller";
		var slidesOrientation = jQuery(this).attr("slidesOrientation")?jQuery(this).attr("slidesOrientation"):"horizontal";
		// var autoScaleSlider =
		// jQuery(this).attr("autoScaleSlider")==""?true:false;
		var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide")=="true"?true:false;
		// var showfullscreen =
		// jQuery(this).attr("showfullscreen")=="true"?true:false;
		var g_width = jQuery(this).attr("g_width")?jQuery(this).attr("g_width"):"";
		var g_height = jQuery(this).attr("g_height")?jQuery(this).attr("g_height"):"";
		var transitionSpeed = jQuery(this).attr("transitionSpeed");
		var loop = jQuery(this).attr("g_loop")=="true"?true:false;
		var visiblenearby = jQuery(this).attr("visiblenearby")=="true"?true:false;
		var autoPlay  = jQuery(this).attr("auto_Play")=="true"?true:false;
		var arrowsNav = jQuery(this).attr("arrowsNav")=="true"?true:false;

		var controlNavigation = jQuery(this).attr("controlNavigation");
		if(controlNavigation=="thumbnails") controlNavigation="thumbnails";
		else if(controlNavigation=="none") controlNavigation="none";
		else controlNavigation = "bullets";
		var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation")?jQuery(this).attr("thumbnails_orientation"):"horizontal";
		var disabledclick = jQuery(this).attr("disabledclick")=="true"?false:true;
		jQuery(this).removeClass("royalSlidering");

		jQuery(this).royalSlider({
			fullscreen: {
				enabled: true,
				nativeFS: true
			},
			controlNavigation: controlNavigation,
			slidesOrientation:slidesOrientation,
			autoScaleSlider: false,
			autoScaleSliderWidth: g_width,
			autoScaleSliderHeight: g_height,
			loop: loop,
			imageScaleMode: imageScaleMode,
			navigateByClick: disabledclick,
			numImagesToPreload:2,
			arrowsNav:arrowsNav,
			arrowsNavAutoHide: arrowsNavAutoHide,
			arrowsNavHideOnTouch: true,
			keyboardNavEnabled: true,
			fadeinLoadedSlide: true,
			globalCaption: false,
			globalCaptionInside: false,
			addActiveClass:true,
			thumbs: {
				orientation :thumbnails_orientation,
				appendSpan: true,
				firstMargin: true,
				paddingBottom: 4
			},
			visibleNearby: {
				enabled: visiblenearby,
				centerArea: 0.7,
				center: true,
				breakpoint: 650,
				breakpointCenterArea: 0.64,
				navigateByCenterClick: true
			},
			autoPlay: {
				enabled: autoPlay,
				pauseOnHover: true
			}
		});
	})

}
function _vc_royalSlider_gallery_init(){
	var w = jQuery("body").width();
	var is_image_ok =true;
	jQuery('.royalSlider_gallery_new:not(.played) img').each(function(){
		if(!jQuery(this).prop('complete')){
			is_image_ok = false;
		}

	})
	if(!is_image_ok) {
		window.setTimeout(function(){
			_vc_royalSlider_gallery_init();
		}, 500);
		return;
	}
	royalSlider_gallery_new();

}
function royalSlider_gallery_new(obj){

	if(typeof(obj)== "undefined"){
		obj = jQuery('.royalSlider_gallery_new:not(".played")');
	}
	var w = jQuery("body").width();
	obj.each(function(){

		if(w<760 && !jQuery(this).hasClass("tabroya")){
			return;
		}


		var id =  jQuery(this).parent().attr("id");

		var $this = this;
		var istolast = false;
		var count = 0;
		var transitionType  = jQuery(this).attr("transitionType");
		try{
			if(top!=self &&  parent.vc && transitionType!="none"){
				if(jQuery($this).hasClass("played") || jQuery($this).find(".rsContainer").length>0){
					if(parent.vc.ShortcodesBuilder.isAddSlider){
						istolast = true;
						parent.vc.ShortcodesBuilder.isAddSlider = false;
					}
					var slider = jQuery($this).data('royalSlider');
					if(slider)
						slider.destroy();
					jQuery($this).html("");
					var id = jQuery(this).closest(".vc-container").attr("data-model-id");
					var model =  parent.vc.shortcodes.get(id);
					var old_view = model.view;

					var models =  parent.vc.shortcodes.where({parent_id: model.get('id')});

					parent._.each(models, function(childmodel) {
						if(childmodel.view.$el){
							childmodel.view.$el.appendTo(model.view.content());
							count++;
						}
					}, this);
					model.view.updated();

				}
			}
		}catch(e){


		}
		jQuery(this).addClass("played");
		var imageScaleMode = jQuery(this).attr("imageScaleMode")?jQuery(this).attr("imageScaleMode"):"fit-if-smaller";
		var slidesOrientation = jQuery(this).attr("slidesOrientation")?jQuery(this).attr("slidesOrientation"):"horizontal";
		//var autoScaleSlider = jQuery(this).attr("autoScaleSlider")==""?true:false;
		var arrowsNavAutoHide = jQuery(this).attr("arrowsNavAutoHide")=="true"?true:false;
		//var showfullscreen = jQuery(this).attr("showfullscreen")=="true"?true:false;
		//var g_width = jQuery(this).attr("g_width")?jQuery(this).attr("g_width"):"";
		//var g_height = jQuery(this).attr("g_height")?jQuery(this).attr("g_height"):"";
		var transitionSpeed = jQuery(this).attr("transitionSpeed");
		var loop = jQuery(this).attr("g_loop")=="true"?true:false;
		var visiblenearby = jQuery(this).attr("visiblenearby")=="true"?true:false;
		var autoPlay  = jQuery(this).attr("auto_Play")=="true"?true:false;
		var arrowsNav = jQuery(this).attr("arrowsNav")=="true"?true:false;

		var controlNavigation = jQuery(this).attr("controlNavigation");
		if(controlNavigation=="thumbnails") controlNavigation="thumbnails";
		else if(controlNavigation=="none") controlNavigation="none";
		else controlNavigation = "bullets";
		var thumbnails_orientation = jQuery(this).attr("thumbnails_orientation")?jQuery(this).attr("thumbnails_orientation"):"horizontal";
		var disabledclick = jQuery(this).attr("disabledclick")=="true"?false:true;

		var transitionSpeed  = jQuery(this).attr("transitionSpeed");
		if(!transitionSpeed) transitionSpeed = 600;
		var transitionType  = jQuery(this).attr("transitionType");

		if(transitionType!="none"){

			if(!transitionType) transitionType = "move";
			if(transitionType=="fade") transitionSpeed = Math.ceil(transitionSpeed/500);

			var delay  = jQuery(this).attr("delay");
			if(!delay) delay = 3000;
			var autoHeight = true;
			if(jQuery(this).attr("data-minheight") && jQuery(this).attr("data-minheight")>0){
				jQuery(this).find("section.section").css("height",jQuery(this).attr("data-minheight")+"px");
			}
			if(jQuery(this).children().length==0) return;

			jQuery(this).royalSlider({
				fullscreen: {
					enabled: false,
					nativeFS: false
				},
				controlNavigation: controlNavigation,
				slidesOrientation:slidesOrientation,
				autoScaleSlider: false,
				autoScaleSliderWidth: 300,
				autoScaleSliderHeight: 150,
				loop: loop,
				transitionSpeed:transitionSpeed,
				transitionType:transitionType,
				imageScaleMode: imageScaleMode,
				navigateByClick: disabledclick,
				numImagesToPreload:10,
				arrowsNav:arrowsNav,
				arrowsNavAutoHide: arrowsNavAutoHide,
				arrowsNavHideOnTouch: true,
				keyboardNavEnabled: !is_edit_model?true:false,
				sliderDrag: w<760?true:false,
				fadeinLoadedSlide: true,
				globalCaption: false,
				globalCaptionInside: false,
				addActiveClass:true,
				autoHeight:autoHeight,
				thumbs: {
					orientation :thumbnails_orientation,
					appendSpan: true,
					firstMargin: true,
					paddingBottom: 4
				},
				visibleNearby: {
					enabled: visiblenearby,
					centerArea: 0.7,
					center: true,
					breakpoint: 650,
					breakpointCenterArea: 0.64,
					navigateByCenterClick: true
				},
				autoPlay: {
					enabled: autoPlay,
					pauseOnHover: true,
					delay:delay
				}
			});
			var slider = jQuery(this).data('royalSlider');
			if(istolast && count>0){

				slider.goTo(count-1);

			}
			var $this = jQuery(this);
			var p = $this.closest(".qfy-tabcontent")

			if(p.length>0){
				slider.ev.on('rsAfterSlideChange', function() {
					// mouse/touch drag end
					p.find(".tabcontent-header-menu li.item button").removeClass("active");
					var index = p.find(".rsBullets .rsNavItem.rsNavSelected").index();
					p.find(".tabcontent-header-menu li.item:eq("+index+") button").addClass("active");
					p.find(".rsActiveSlide .qfe_start_animation").each(function(i){
						var $this = this;
						jQuery($this).removeClass("qfe_start_animation");
						setTimeout(function(){qfe_animate_fun($this);},50);

					})
					setTimeout(function(){qfy_a_video_event();},50);

				});
			}
		}

	})


}
;

/* dt-jscroller2: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/themes/qfy-01/js/jscroller2.js) */
/*
 * jScroller2 1.61 - Scroller Script
 *
 * Copyright (c) 2008 Markus Bordihn (markusbordihn.de)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2009-07-16 18:00:00 +0100 (Thu, 16 July 2009) $
 * $Rev: 1.61 $
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('x 4={1M:{1N:"1O 1P",1Q:1.1R,1S:"1T 1U (1V://1W.1X)",1Y:"1Z 20 21"},11:{1t:22,17:{D:/([0-9,.\\-]+)D/}},6:[],n:{18:T,A:\'1u\'+\'23\',1h:0,19:0,1a:G.24?1i:T,12:{13:T}},w:{E:s(a,b,c){x i,1b=\'\',O=a.H;7(a&&b){L(i=0;i<O;i++){7(c&&a[i].1c(b)>=0){1b=a[i].1d(b)[1];B}y 7(a[i]===b){1b=a[i];B}}}V 1b},D:s(a){x b="";7(a){7(a.1j(4.11.17.D)){7(1v a.1j(4.11.17.D)[1]!==\'1w\'){b=a.1j(4.11.17.D)[1]}}}V 1x(b)},k:s(a,b,c,d,e,f,g,h,i){x j;X(a){t\'C\':t\'U\':j=4.w.D(d.P[b])+h;7(c>0&&c<=f){4.u[b](d,c-g)}7(j+g>=f&&j<=f+h){4.u[b](d,j);c=j+e*-1}V c;t\'W\':t\'r\':j=4.w.D(d.P[b])-h;7(c+e<=f){4.u[b](d,c+e)}7(j+g<=f&&j+g+h>=0){4.u[b](d,j);c=j+g}V c}}},F:{1e:s(){7(4.n.12.13&&4.n.12.13!==14.1k){4.n.12.13=14.1k}y{4.1l()}},15:s(){4.1m()},I:s(a){7(a>0){L(x i=0;i<4.6.H;i++){7(a===4.6[i][3].I){4.6[i][3].Q=4.6[i][3].I=0}}}},1n:s(a){7(a){4.1o(a,1)}},1p:s(a){7(a){4.1o(a,0)}}},u:{r:s(a,b){4.R(a,\'r\',b+"D")},M:s(a,b){4.R(a,\'M\',b+"D")},l:s(a,b){4.R(a,\'l\',b+"D")},m:s(a,b){4.R(a,\'m\',b+"D")}},1y:{1z:s(){x a=14.1A(\'1B\'),O=a.H,i;L(i=0;i<O;i++){x b=a[i].Y.1d(\' \'),p=1f;7(4.w.E(b,4.n.A+\'C\')){p=\'C\'}y 7(4.w.E(b,4.n.A+\'W\')){p=\'W\'}y 7(4.w.E(b,4.n.A+\'r\')){p=\'r\'}y 7(4.w.E(b,4.n.A+\'U\')){p=\'U\'}7(p){4.1C(a[i],p)}}7(!4.18){7(4.6.H>0){4.1m();7(4.n.1h){L(i=0;i<4.6.H;i++){7(4.6[i][3].I>0){G.25("4.F.I("+4.6[i][3].I+",0)",4.6[i][3].I)}}}7(4.n.19===0){7(4.n.1a){4.n.12.13=14.1k;4.J(14,\'26\',4.F.1e)}y{4.J(G,\'1e\',4.F.1e)}4.J(G,\'15\',4.F.15);4.J(G,\'27\',4.F.15);4.J(G,\'28\',4.F.15)}}}}},1C:s(a,b){x i,O=4.6.H,1g=T;7(a&&b){7(O>0){L(i=0;i<O;i++){7(4.6[i][1].6===a){4.6[i][3].p=b;1g=1i}}}}y{1g=1i}7(!1g){x c=0,q=1,Q=0,v,Z,S=a.Y.1d(\' \'),z=a.1q,k={6:1f,l:1f,m:1f};7(z.Y.1c(\'1u\')>=0){z=z.1q}7(z){4.R(z,\'1r\',\'29\');4.R(z,\'2a\',\'2b\');x d=z.1A(\'1B\');L(i=0;i<d.H;i++){7(4.w.E(d[i].Y.1d(\' \'),4.n.A+b+\'1D\')){k.6=d[i]}}7(a){4.R(a,\'1r\',\'1E\');4.u.M(a,0);4.u.r(a,0);X(b){t"C":4.u.M(a,(a.N*-1)+z.N);B;t"U":4.u.r(a,(a.K*-1)+z.K);B}X(b){t"C":t"W":4.u.l(a,z.K);B;t"U":t"r":4.u.m(a,z.N);B}7(k.6){4.R(k.6,\'1r\',\'1E\');k.l=k.6.K;k.m=k.6.N;X(b){t"C":4.u.M(k.6,k.m*-1);B;t"W":4.u.M(k.6,a.N);B;t"r":4.u.r(k.6,a.K);B;t"U":4.u.r(k.6,a.K*-1);B}X(b){t"C":t"W":4.u.r(k.6,0);4.u.l(k.6,z.K);B;t"r":t"U":4.u.M(k.6,0);4.u.m(k.6,z.N);B}}}7(4.w.E(S,4.n.A+\'q-\',1)){q=1x(4.w.E(S,4.n.A+\'q-\',1)||10)/10;7(4.n.1a&&q<1){q=1}}4.n.19=(4.w.E(S,4.n.A+\'2c\')||4.n.19===1)?1:0;v=4.w.E(S,4.n.A+\'v\')?1:0;Z=4.w.E(S,4.n.A+\'Z\')?1:0;7(4.w.E(S,4.n.A+\'I-\',1)){4.n.1h=Q=1;c=4.w.E(S,4.n.A+\'I-\',1)*2d}7(4.w.E(S,4.n.A+\'1F\')){4.J(a,\'1G\',4.F.1n);4.J(a,\'1H\',4.F.1p);7(k.6){4.J(k.6,\'1G\',4.F.1n);4.J(k.6,\'1H\',4.F.1p)}}4.6.2e([{m:z.N,l:z.K},{6:a,m:a.N,l:a.K},{6:k.6,m:k.m,l:k.l},{p:b,q:q,Q:Q,I:c,v:v,Z:Z}])}}},2f:s(a){7(a){L(x i=0;i<4.6.H;i++){7(4.6[i][1].6===a){4.6.2g(i,1)}}7(4.6.H<=0){4.1l()}}},1I:s(){x i,O=4.6.H;L(i=0;i<O;i++){x a=4.6[i][0],o=4.6[i][1],k=4.6[i][2],8=4.6[i][3];7(!8.Q&&!8.I){7(8.Z){o.m=4.6[i][1].m=o.6.N;o.l=4.6[i][1].l=o.6.K;7(k.6){k.m=4.6[i][2].m=k.6.N;k.l=4.6[i][2].l=k.6.K}}X(8.p){t\'C\':t\'W\':x b=4.w.D(o.6.P.M);b=(8.v===2)?((8.p===\'C\')?b-8.q:b+8.q):((8.p===\'C\')?b+8.q:b-8.q);7(k.6&&!8.v){b=4.w.k(8.p,\'M\',b,k.6,o.m,a.m,k.m,8.q,8.v)}y{7(8.v){7(8.v===((8.p===\'C\')?1:2)&&((o.m>a.m&&b+8.q>0)||(o.m<a.m&&b+o.m+8.q>a.m))){4.6[i][3].v=((8.p===\'C\')?2:1)}7(8.v===((8.p===\'C\')?2:1)&&((o.m>a.m&&b+o.m<a.m+8.q)||(o.m<a.m&&b<0))){4.6[i][3].v=((8.p===\'C\')?1:2)}}y{7(8.p===\'C\'){7(b>a.l){b=(o.m)*-1}}y{7(b<o.m*-1){b=a.m}}}}4.u.M(o.6,b);B;t\'r\':t\'U\':x c=4.w.D(o.6.P.r);c=(8.v===2)?((8.p===\'r\')?c+8.q:c-8.q):(8.p===\'r\')?c-8.q:c+8.q;7(k.6&&!8.v){c=4.w.k(8.p,\'r\',c,k.6,o.l,a.l,k.l,8.q,8.v)}y{7(8.v){7(8.v===((8.p===\'r\')?2:1)&&((o.l>a.l&&c+8.q>0)||(o.l<a.l&&c+o.l+8.q>a.l))){4.6[i][3].v=((8.p===\'r\')?1:2)}7(8.v===((8.p===\'r\')?1:2)&&((o.l>a.l&&c+o.l<a.l+8.q)||(o.l<a.l&&c-8.q<0))){4.6[i][3].v=((8.p===\'r\')?2:1)}}y{7(8.p===\'r\'){7(c<o.l*-1){c=a.l}}y{7(c>a.l){c=(o.l)*-1}}}}4.u.r(o.6,c);B}}}},1o:s(a,b){7(a.1s||a.1J){x c=a.1s?a.1s:a.1J;L(x i=0;i<5;i++){7(c.Y.1c(4.n.A+\'1F\')<0&&c.Y.1c(\'1D\')<0){c=c.1q}y{B}}4.Q(c,b)}},1m:s(){7(!4.16){4.18=4.16=G.2h(4.1I,4.11.1t)}},1l:s(){7(4.16){G.2i(4.16);4.18=4.16=T}},Q:s(a,b){7(a&&b>=0){L(x i=0;i<4.6.H;i++){7(a===4.6[i][1].6||a===4.6[i][2].6){4.6[i][3].Q=b}}}},R:s(a,b,c){7(a&&b){7(a.P){7(1v a.P[b]!==\'1w\'){7(c){2j{V(a.P[b]=c)}2k(e){V T}}y{V(a.P[b]===\'\')?((a.1K)?a.1K[b]:((G.1L)?G.1L(a,\'\').2l(b):T)):a.P[b]}}}}},J:s(a,b,c){7(a&&b&&c){7(4.n.1a){a.2m("F"+b,c)}y{a.2n(b,c,T)}}}};4.J(G,\'2o\',4.1y.1z);',62,149,'||||ByRei_jScroller2||obj|if|option||||||||||||endless|width|height|cache|child|direction|speed|left|function|case|set|alternate|get|var|else|parent|prefix|break|down|px|value|on|window|length|delay|set_eventListener|clientWidth|for|top|clientHeight|il|style|pause|_style|classNames|false|right|return|up|switch|className|dynamic||config|last|element|document|focus|timer|regExp|active|ileave|ie|result|indexOf|split|blur|null|error|delayer|true|match|activeElement|stop|start|over|start_stop|out|parentNode|position|target|refreshtime|jscroller2|typeof|undefined|parseFloat|init|main|getElementsByTagName|div|add|_endless|absolute|mousemove|mouseover|mouseout|scroller|srcElement|currentStyle|getComputedStyle|info|Name|ByRei|jScroller2|Version|61|Author|Markus|Bordihn|http|markusbordihn|de|Description|Next|Generation|Autoscroller|150|_|detachEvent|setTimeout|focusout|resize|scroll|relative|overflow|hidden|ignoreleave|1000|push|remove|splice|setInterval|clearInterval|try|catch|getPropertyValue|attachEvent|addEventListener|load'.split('|'),0,{}));

/* dt-main: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/themes/qfy-01/js/main.js) */
//悬浮效果
(function($){$.fn.floatAd=function(l){var m={customhtml:"",close:1,closeHTML:"",speed:30,id_class:"",x:"0",y:"0"};var n=false;var l=$.extend(m,l);var o="<div id='qfy_float_ad' class='"+l.id_class+"' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";o+=l.customhtml;if(l.close=="1"){if(l.closeHTML==""){o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>关闭</div></div>"}else{o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' >"+l.closeHTML+"</div></div>"}}$('body').append(o);function qfy_ad_init(){var x=l.x,y=l.y+$(window).scrollTop();var g=true,yin=true;var h=1;var i=10;var j=$("#qfy_float_ad."+l.id_class);var k=function(){var L=0,T=$(window).scrollTop();var a=j.width();var b=j.height();var c=$(window).width();var d=$(window).height()+$(window).scrollTop();x=x+h*(g?1:-1);if(x<L){g=true;x=L}if(x>c-a-1){g=false;x=c-a-1}y=y+h*(yin?1:-1);if(y>d-b-10){yin=false;y=d-b-10}if(y<T){yin=true;y=T}var e=x;var f=y;j.css({'top':f,'left':e})};n=setInterval(k,l.speed);$('#qfy_float_ad.'+l.id_class).mouseover(function(){if(n){clearInterval(n)}});$('#qfy_float_ad.'+l.id_class).mouseout(function(){n=setInterval(k,l.speed)})}qfy_ad_init();$('#qfy_close_f_ad.'+l.id_class).click(function(){$('#qfy_float_ad.'+l.id_class+',#QFY_overlay.'+l.id_class).remove();clearInterval(n)})}})(jQuery);

function get_browser_name(){var e=window.navigator.userAgent;return-1<e.indexOf("Opera")||-1<e.indexOf("OPR/")?"Opera":-1<e.indexOf("Edge")?"Edge":-1<e.indexOf("Chrome")?"Chrome":-1<e.indexOf("Safari")?"Safari":-1<e.indexOf("Firefox")?"Firefox":-1<e.indexOf("MSIE")||-1<e.indexOf("Trident/7")?"IE":"Other"}

//背景图片自适应
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($){
	function coverFillSwitch(container,img,invert){if(!container||!img){return false}var imgHeight=img.naturalHeight||img.videoHeight;var imgWidth=img.naturalWidth||img.videoWidth;var containerRatio=container.offsetWidth/container.offsetHeight;var imgRatio=imgWidth/imgHeight;var ratioComparison=false;if(imgRatio>=containerRatio){ratioComparison=true}if(invert){ratioComparison=!ratioComparison}if(ratioComparison){img.style.height="100%";img.style.width="auto"}else{img.style.height="auto";img.style.width="100%"}}function objectFitResize(){var i,img,container;var imgsCover=document.getElementsByClassName("section-background-video");for(i=0;i<imgsCover.length;i++){img=imgsCover[i];container=img.parentElement;if(container.classList.contains("background-media")){coverFillSwitch(container,img)}}}function applyStandardProperties(container,img){var containerStyle=window.getComputedStyle(container);if(containerStyle.overflow!=="hidden"){container.style.overflow="hidden"}if(containerStyle.position!=="relative"&&containerStyle.position!=="absolute"&&containerStyle.position!=="fixed"){container.style.position="relative"}img.style.position="absolute";img.style.top="50%";img.style.left="50%";img.style.transform="translate(-50%,-50%)"}function objectFitInt(){var imgs=document.getElementsByClassName("section-background-video");for(var i=0;i<imgs.length;i++){var type="cover";var img=imgs[i];var container=img.parentElement;switch(type){case"container":break;case"cover":coverFillSwitch(container,img);applyStandardProperties(container,img);break;case"contain":coverFillSwitch(container,img,true);applyStandardProperties(container,img);break;case"fill":img.style.height="100%";img.style.width="100%";applyStandardProperties(container,img);break;case"none":img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;case"scale-down":img.style.maxHeight="100%";img.style.maxWidth="100%";img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;default:break}}}var resizeTimeout;function resizeThrottler(){if(!resizeTimeout){resizeTimeout=setTimeout(function(){resizeTimeout=null;objectFitResize()},66)}}
	var $ua = get_browser_name();
	if(($ua=="Edge" || $ua=="IE") && !is_edit_model ){
		resizeThrottler();
		window.addEventListener("resize",resizeThrottler,false);
	}
})(jQuery);
window.onload = function() {
    if(!document.hasOwnProperty("ontouchstart")) {
    	 jQuery("html").addClass("no-touch");
    }
};

function resetSectionHeight() {
	var h = jQuery(window).height();
	var body_w = jQuery("body").width();

	if (body_w > 760) {
		if (jQuery(".section.minperheight100:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight100:not(.fixheight)").css("min-height", h + "px");
		}
		if (jQuery(".section.minperheight90:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight90:not(.fixheight)").css("min-height", 0.9 * h + "px");
		}
		if (jQuery(".section.minperheight80:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight80:not(.fixheight)").css("min-height", 0.8 * h + "px");
		}
		if (jQuery(".section.minperheight70:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight70:not(.fixheight)").css("min-height", 0.7 * h + "px");
		}
		if (jQuery(".section.minperheight60:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight60:not(.fixheight)").css("min-height", 0.6 * h + "px");
		}
		if (jQuery(".section.minperheight50:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight50:not(.fixheight)").css("min-height", 0.5 * h + "px");
		}
		if (jQuery(".section.minperheight40:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight40:not(.fixheight)").css("min-height", 0.4 * h + "px");
		}
		if (jQuery(".section.minperheight30:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight30:not(.fixheight)").css("min-height", 0.3 * h + "px");
		}
		if (jQuery(".section.minperheight20:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight20:not(.fixheight)").css("min-height", 0.2 * h + "px");
		}
		if (jQuery(".section.minperheight15:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight15:not(.fixheight)").css("min-height", 0.15 * h + "px");
		}
		if (jQuery(".section.minperheight10:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight10:not(.fixheight)").css("min-height", 0.1 * h + "px");
		}
		if (jQuery(".section.minperheight5:not(.fixheight)").length > 0) {
			jQuery(".section.minperheight5:not(.fixheight)").css("min-height", 0.05 * h + "px");
		}
		jQuery(".section.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
			}
		});
		jQuery(".qfy-column-inner.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				if (jQuery(this).closest(".section.fixheight").length > 0) {
					h = jQuery(this).closest(".section.fixheight").height();
				}
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
				jQuery(this).find(">.column_inner").css("min-height", h + "px");
			}
		})
	} else {
		if (jQuery(".section.minperheight100").length > 0) {
			jQuery(".section.minperheight100").css("min-height", h + "px");
		}
		if (jQuery(".section.minperheight90").length > 0) {
			jQuery(".section.minperheight90").css("min-height", 0.9 * h + "px");
		}
		if (jQuery(".section.minperheight80").length > 0) {
			jQuery(".section.minperheight80").css("min-height", 0.8 * h + "px");
		}
		if (jQuery(".section.minperheight70").length > 0) {
			jQuery(".section.minperheight70").css("min-height", 0.7 * h + "px");
		}
		if (jQuery(".section.minperheight60").length > 0) {
			jQuery(".section.minperheight60").css("min-height", 0.6 * h + "px");
		}
		if (jQuery(".section.minperheight50").length > 0) {
			jQuery(".section.minperheight50").css("min-height", 0.5 * h + "px");
		}
		if (jQuery(".section.minperheight40").length > 0) {
			jQuery(".section.minperheight40").css("min-height", 0.4 * h + "px");
		}
		if (jQuery(".section.minperheight30").length > 0) {
			jQuery(".section.minperheight30").css("min-height", 0.3 * h + "px");
		}
		if (jQuery(".section.minperheight20").length > 0) {
			jQuery(".section.minperheight20").css("min-height", 0.2 * h + "px");
		}
		if (jQuery(".section.minperheight15").length > 0) {
			jQuery(".section.minperheight15").css("min-height", 0.15 * h + "px");
		}
		if (jQuery(".section.minperheight10").length > 0) {
			jQuery(".section.minperheight10").css("min-height", 0.1 * h + "px");
		}
		if (jQuery(".section.minperheight5").length > 0) {
			jQuery(".section.minperheight5").css("min-height", 0.05 * h + "px");
		}
	}
}

var last_size_mobile = false;
var size_mobile = false;
function resizeDefaultObjSize(){
	if(dtGlobals.isMobile==false){
		 if(jQuery("body").width()<768){
			 size_mobile = "mobile";
			 if(!last_size_mobile) last_size_mobile ="mobile";
		 }else{
			 size_mobile = "pc";
			 if(!last_size_mobile) last_size_mobile ="pc";
		 }
		 if(size_mobile!=last_size_mobile){
			 last_size_mobile = size_mobile;
			 jQuery(".qfy-element").each(function(){
					var m_padding = jQuery(this).attr("m-padding");
					var p_padding = jQuery(this).attr("p-padding");
					if(size_mobile=="mobile"){
						if(m_padding ){
							jQuery(this).css("padding",m_padding);
						}
					}else{
						if(p_padding ){
							jQuery(this).css("padding",p_padding);
						}
					}

			 });
			
		 }
	}
	
	
	if(jQuery(".qfe_map_wraper iframe").length>0){
			jQuery(".qfe_map_wraper iframe").each(function(){
				var oh = jQuery(this).parent().attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).parent().height((width*2/4)+"px");
					}
				}
			})
		}
		if(jQuery(".vc_bit_raw_video").length>0){
			jQuery(".vc_bit_raw_video").each(function(){
				var oh = jQuery(this).attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).height((width*2/4)+"px");
					}  
				}
			})
		}
		resetSectionHeight();
		column_init_align();
}
function resize_royalSlider_gallery_new(org_obj){
	jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function(){
		var obj = jQuery(this);
		setTimeout(function(){
			var h1 = obj.find(".rsOverflow").height();
			var h2 = obj.find(".rsSlide.rsActiveSlide").height();
			if(h2>0 && h1!=h2){
				obj.find(".rsOverflow").height(h2);
			}
		},200);
	})
	
}
function searchForm(obj){
	if(typeof(obj)=="undefined"){
		obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
	}
	
	/*--search*/
	obj.unbind().on('click', function(e) {
		e.preventDefault();
		jQuery(this).siblings('input.searchsubmit').click();
		return false;
	});

}
function qfy_setCookie(c_name, value, exdays) {
	  var exdate = new Date();
	  exdate.setDate(exdate.getDate() + exdays);
	  var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
	  document.cookie = c_name + "=" + c_value;
	  
	}
function mobile_menu_fix(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();
	
	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;
		
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery("#dl-menu").addClass("positionFixed");
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery("#dl-menu").removeClass("positionFixed");
		};
		top_scrTop = jQuery(window).scrollTop();
		
	});
}
function mobile_menu_fix_2(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery(".dl-menu-fixedheader").height();
	if( jQuery(".dl-menu-fixed-blank").length==0 && jQuery("#page").css("position")!="absolute"){
	jQuery(".dl-menu-fixedheader").after("<div class='dl-menu-fixed-blank' style='display:none;height:"+top_threshold+"px;'></div>");
	}

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;

		if(top_scrDir>0){
			jQuery("body").removeClass("scroll-uping").addClass("scroll-downing");
		}else if(top_scrDir<0){
			jQuery("body").addClass("scroll-uping").removeClass("scroll-downing");
		}
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery(".dl-menu-fixedheader").css("position","fixed");
			jQuery("body").addClass("fixedheadering");
			jQuery(".dl-menu-fixed-blank").show();
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery(".dl-menu-fixedheader").css("position","relative");
			jQuery("body").removeClass("fixedheadering");
			jQuery("body").removeClass("fixedheadering scroll-uping scroll-downing");
			jQuery(".dl-menu-fixed-blank").hide();
		};
		top_scrTop = jQuery(window).scrollTop();
		
	});
}
function _image_popup_flexslider(startAt){
	jQuery(".image_popup .qfe_flexslider").flexslider({
	       animation: "slide",
	       slideshow: false,
	       slideshowSpeed: 10000,
	       sliderSpeed: 800,
	       controlNav: 1,
	       directionNav: 1,
	       smoothHeight: true,
		   startAt:startAt,
		   start: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			  var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			  if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			  }
		   },
		   before: function(){
			   //var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   //if(localvideo.length>0){
					 //jQuery(".image_popup .flex-active-slide video.localvideo").get(0).stop();
			  // }
		   },  
		   after: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			   var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			   if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			   }
		   },
	     });
}
function initmouseover(){
	
	jQuery(".mouseHover").live({
	  mouseenter: function() {
		jQuery(this).addClass("hover");
		
	  },
	  mouseleave: function() {
		jQuery(this).removeClass("hover");
	  }
	});
	jQuery("a.bitButton").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).css("background",backgroundhovercolor);
					jQuery(this).css("transition",str);
					jQuery(this).removeAttr('onmouseover');
					jQuery(this).removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).css("border","1px solid "+borderhovercolor);
					jQuery(this).css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).css("border-color",bordercolor);
				}
		  }
		});
	
	jQuery("a.bitIcon").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).find("b").css("background",backgroundhovercolor);
					jQuery(this).find("b").css("transition",str);
					jQuery(this).find("b").removeAttr('onmouseover');
					jQuery(this).find("b").removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).find("b").css("border","1px solid "+borderhovercolor);
					jQuery(this).find("b").css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).find("b").css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).find("b").css("border-color",bordercolor);
				}
		  }
		});

	//可以挪 JS需要使用的地方动态加载 11k
	jQuery("a.qfy_popup").live({
		click: function(e) {
			 e.preventDefault();
			 e.stopPropagation();
			 var popupmodel =  jQuery(this).attr("data-popup-model");
			 var popupstyle =  jQuery(this).attr("data-popup-style");
			 var popupsize =  jQuery(this).attr("data-popup-size");
			 var bodywidth = jQuery("body").width();
			 var bodyheight = jQuery(window).height();

			 if( popupstyle=="0" || popupstyle=="1"   ){
				 if(popupsize=="0.8"){
					var width =  bodywidth*0.8;
					var height = bodyheight*0.8;
					var toppx = bodyheight*0.1;
					var leftpx = bodywidth*0.1;
				 }else if(popupsize=="0.6"){
					var width =  bodywidth*0.6;
					var height = bodyheight*0.6;
					var toppx = bodyheight*0.2;
					var leftpx = bodywidth*0.2;
				 }else if(popupsize=="0.4"){
					 var width =  bodywidth*0.4;
					 var height = bodyheight*0.4;
					 var toppx = bodyheight*0.3;
				    var leftpx = bodywidth*0.3;
				 }
			 }else  if(  popupstyle=="2"){
				 if(popupsize=="0.8"){
					var width = bodywidth*0.5;
					var height = bodyheight*0.5;
					var toppx = bodyheight*0.25;
					var leftpx = bodywidth*0.25;
				 }else if(popupsize=="0.6"){
					var width =  bodywidth*0.3;
					var height = bodyheight*0.5;
					var toppx = bodyheight*0.25;
					var leftpx = bodywidth*0.35;
				 }else if(popupsize=="0.4"){
					 var width = bodywidth*0.2;
					 var height =bodyheight*0.5;
					 var toppx = bodyheight*0.25;
				    var leftpx = bodywidth*0.4;
				 }
			 }
			 var defaultpadding="padding:40px;";
			 if(width<480){
				 width = 320;
				 leftpx = (bodywidth-320)*0.5;
				 if(popupstyle=="1") popupstyle="2";
				 if(popupstyle!="2"){
					 height = 250;
					 toppx = (bodyheight-250)*0.5;
				 }
				 defaultpadding = "padding:10px;";
			 }
			 var  allmessage = "";
			 var startAt = 0;
			 if(popupmodel=="0"){
				 var default_img = jQuery(this).attr("data-href");
				 var title = jQuery(this).attr("data-ptitle");
				 var subtitle =  jQuery(this).attr("data-subtitle");
				 var desc = jQuery(this).attr("data-desc");
				 var isvideo =   jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").length;
				 var isyunvideo =   jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
				 var video_html = "";
				 var videoclass =  "";
				 if(isvideo){
					 videoclass = "video";
					 var video_html = jQuery(this).closest(".qfy_item_post").find("video.qfyvideo").prop("outerHTML");
					 video_html = jQuery(video_html).attr("controls","controls").attr("class","localvideo simple").attr("style","width:100%;height:100%;background:#000;").prop("outerHTML");
					 
				 }else if(isyunvideo){
					 videoclass = "video";
					 var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
					 var videoheight = height;
					 if(popupstyle=="2"){
						 videoheight = 0.6*height;
					 }
					 video_html = jQuery(video_html).attr("data-height",videoheight).attr("data-autoplay","true").attr("src", jQuery(video_html).attr("data-src")).prop("outerHTML");
				 }
				 if(default_img || video_html){
					 var message = "";
					 if( popupstyle=="0" ){
						 message = '<div class="pop_image pop_image1 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;">'+video_html+'<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="content" style="color:#ccc;font-size:14px;">'+desc+'</div></div></div>';
					 } else if( popupstyle=="1"  ){
						 message = '<div class="pop_image pop_image2 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">'+video_html+'</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div> </div>';
				 	 }	else if( popupstyle=="2"  ){
						 message = '<div class="pop_image pop_image3 '+videoclass+'" style="width:'+width+'px;word-wrap: break-word;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">'+video_html+'</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;'+defaultpadding+'text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div>  </div>';
					 }
					 allmessage = '<div class="image_popup" style="position:relative;">'+message+'<div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
				 }	 

			 }else{
				 var p = jQuery(this).closest(".qfy-element");
				 var $thispost =jQuery(this).closest(".qfy_item_post");
				
				 var message = "";
				 p.find(".qfy_item_post:visible").each(function(i){
					 if(jQuery(this)[0]===$thispost[0]){
						 startAt = i;
					 }
					 $this = jQuery(this).find("a.qfy_popup:first");
					 var default_img =$this.attr("data-href");
					 var title = $this.attr("data-ptitle");
					 var subtitle = $this.attr("data-subtitle");
					 var desc =$this.attr("data-desc");
					 var video_html = "";
					 var isvideo =   jQuery(this).find("video.qfyvideo").length;
					 var isyunvideo =   jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").length;
					 var videoclass =  "";
					 if(isvideo){
						 var video_html = jQuery(this).find("video.qfyvideo").prop("outerHTML");
						 video_html =jQuery(video_html).attr("controls","controls").attr("class","localvideo").attr("style","width:100%;height:100%;background:#000;").prop("outerHTML");
						 videoclass = "video";
					 }else if(isyunvideo){
						 var video_html = jQuery(this).closest(".qfy_item_post").find(".video_play >iframe").prop("outerHTML");
						 videoclass = "video";
						 var videoheight = height;
						 if(popupstyle=="2"){
							 videoheight = 0.6*height;
						 }
						 video_html = jQuery(video_html).attr("data-height",videoheight).attr("data-autoplay","true").prop("outerHTML");
						
					 }
					 if(default_img || video_html){
						 if( popupstyle=="0" ){
							 message += '<li><div class="pop_image pop_image1 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;">'+video_html+'<div  class="content_inner"  style="box-sizing:border-box;position:absolute;bottom:0;width:100%;background:rgba(0,0,0,0.6);padding:20px 15px;text-align:left;"><div class="head"  style="color:#fff;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="content" style="color:#ccc;font-size:14px;">'+desc+'</div></div></div></li>';
						 } else if( popupstyle=="1"  ){
							 message += '<li><div class="pop_image pop_image2 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:60%;height:100%;float:left;">'+video_html+'</div><div class="content_inner"  style="box-sizing:border-box;float:left;width:40%;height:100%;background:#fff;padding:20px 15px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div> </div></li>';
					 	 }	else if( popupstyle=="2"  ){
							 message += '<li><div class="pop_image pop_image3 '+videoclass+'" style="position:relative;word-wrap: break-word;width:'+width+'px;height:'+height+'px;"><div style="background-image:url('+default_img+');background-size:cover;background-position:center center;background-repeat:no-repeat;width:100%;height:60%;">'+video_html+'</div><div class="content_inner" style="box-sizing:border-box;float:left;width:100%;height:40%;background:#fff;padding:40px;text-align:left;"><div class="head"  style="color:#333;font-size:16px;padding-bottom:10px;">'+title+'</div><div class="subhead"  style="color:#999;font-size:14px;padding-bottom:10px;">'+subtitle+'</div><div class="content overflowy" style="color:#666;font-size:14px;overflow-y: auto;;">'+desc+'</div></div>  </div></li>';
						 }
					 }
				 });
				 allmessage = '<div class="image_popup" style="position:relative;"><div  class="qfe_flexslider flexslider_slide flexslider" data-interval="30" data-flex_fx="slide" data-bottom_nav="1" data-direction="1"><ul class="slides">'+message+'</ul> </div><div class="block-close" style="position: absolute;top: 2px;right: 9px;color: rgb(204, 204, 204);cursor: pointer;">✕</div></div>';
			 }
			if(allmessage){	
					jQuery.blockUI({
						onOverlayClick: jQuery.unblockUI,
					    overlayCSS:{ 
					        backgroundColor: '#000', 
					        opacity:         0.8, 
					        cursor:          'pointer',
					        "z-index":"9400",
					    }, 
						css: {"top":toppx+"px","left":leftpx,width:width+"px",height:height+"px",cursor: 'pointer',"border":"0","z-index":"9401"},
						message:allmessage
					});
					jQuery(".localvideo.simple").attr("autoplay","autoplay");
					jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
						 jQuery.unblockUI();
					});
					if(jQuery(".pop_image2 .content.overflowy").length>0){
						var h = jQuery(".pop_image2").height();
						var head = jQuery(".pop_image2 .head").height()+jQuery(".pop_image2 .subhead").height();
						jQuery(".pop_image2 .content.overflowy").height(h-head-60);
					}else if(jQuery(".pop_image3 .content.overflowy").length>0){
						var h = jQuery(".content_inner").height();
						var head = jQuery(".pop_image3 .head").height()+jQuery(".pop_image3 .subhead").height();
						jQuery(".pop_image3 .content.overflowy").height(h-head);
					}
				
					if(	jQuery(".image_popup .qfe_flexslider").length>0){
						 if(typeof jQuery.fn.flexslider=="undefined"){
							 jQuery.getScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js").done(function() {
								 jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');
								 _image_popup_flexslider(startAt);
							 })
						 }else{
							 _image_popup_flexslider(startAt);
						 }
					}
				}
		}
	});
	//可以挪 结束 ------
	
	jQuery("a.qfy_thickbox").live({
		  click: function(e) {
			  e.preventDefault();
			  if( top.jQuery(".qfy_gallerys").length>0){
				  return false;
			  }
			  var default_img = jQuery(this).attr("href");
			  var thumbPath = jQuery(this).attr("thumbPath");
			  if(!thumbPath) thumbPath = default_img;
			  var i = 0;
			  var qfy_imglists= Array();
			  jQuery("a.qfy_thickbox").each(function(){
				var href = jQuery(this).attr("href");
				var thumbPath = jQuery(this).attr("thumbPath");
				if(!thumbPath) 	thumbPath = href;
				
				if(href!=default_img && href!= undefined){
					 qfy_imglists[i] = href+"|^|"+thumbPath;
					 i++;
				}
			  })
			 
			  top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor='+encodeURIComponent(dtGlobals.gallery_bgcolor)+'&tfamily='+encodeURIComponent(dtGlobals.gallery_tfamily)+'&dfamily='+encodeURIComponent(dtGlobals.gallery_dfamily)+'&blankclose='+encodeURIComponent(dtGlobals.gallery_blankclose)+"&arrowstyle="+encodeURIComponent(dtGlobals.gallery_arrowstyle)+'&showthumbs='+dtGlobals.gallery_showthumbs+'&style='+dtGlobals.gallery_style+'&autoplay='+dtGlobals.gallery_autoplay+'&playspeed='+dtGlobals.gallery_playspeed+'&imagesize='+dtGlobals.gallery_imagesize+'&imageheight='+dtGlobals.gallery_imageheight+'&stopbutton='+dtGlobals.gallery_stopbutton+'&thumbsposition='+dtGlobals.gallery_thumbsposition+'&tsize='+dtGlobals.gallery_tsize+'&tcolor='+encodeURIComponent(dtGlobals.gallery_tcolor)+'&dsize='+dtGlobals.gallery_dsize+'&dcolor='+encodeURIComponent(dtGlobals.gallery_dcolor)+'&default_img='+default_img+'&thumbPath='+thumbPath+'&time='+Math.random()+'" width="100%" height="100%" border=0 style="border:0;" /></div>')
			  top.jQuery(".qfy_gallerys").animate({height:"100%"});
			  return false;
		  }
		});
	

	qfy_a_video_event();
}

function qfy_a_video_event(){
	var body_width = window.screen.width; 
	var body_height =window.screen.height; 
	
	if(!jQuery("body").hasClass("compose-mode") && !is_edit_model){
		jQuery("a").each(function(){
			var href = jQuery(this).attr("href");
			if(href) href = href.toLowerCase();
			if(href && href.indexOf("/api/video-server/play.php")>-1){
				var turl =  href.split("?");
				var media_id = 0;
				var se =0;
				var nonce = 0;
				var width="800";
				var height="600";
				var turl2 = turl[1].split("&");
				for(i=0;i<turl2.length;i++){
					var t3 = turl2[i].split("=");
					if(t3[0]=="media_id"){
						media_id = t3[1];
					}else if(t3[0]=="se"){
						se = t3[1];
					}else if(t3[0]=="width" && t3[1]!=""){
						width = t3[1];
					}else if(t3[0]=="height"&& t3[1]!=""){
						height = t3[1];
					}
				}
				if(typeof jQuery.blockUI=="undefined"){
					jQuery.getScript("/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js");
				}
				
				if(media_id){
					jQuery(this).unbind().bind("click",function(e){
						e.stopPropagation();
						e.preventDefault();
						//获取播放权限
						var url = "/api/video-server/play.php?se="+se+"&media_id="+media_id;
						var bodywidth = jQuery("body").width();
						var bodyheight = jQuery(window).height();
						if(bodywidth>width){
							top.jQuery.blockUI({css: {"top":"15%","left":"50%","margin-left":"-"+(width/2)+"px",width:width,height:height},message: "<iframe allowfullscreen class='videoframe' style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+height+"' data-controlBarVisibility='hover' data-autoplay='true' src='"+url+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"});
						}else{
							var h =  Math.round(bodywidth*3/4);
							var toppx = (bodyheight-h)/2;
							top.jQuery.blockUI({css: {"top":toppx+"px","left":"0",width:bodywidth+"px",height:h+"px"},message: "<iframe allowfullscreen class='videoframe'  style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+ h+"' data-controlBarVisibility='hover' data-autoplay='true' src='"+url+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:7px;color:#fff;'>✕</div>"});
						}
						top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
							 top.jQuery.unblockUI();
						});
						if(typeof top.jQuery.fn.draggable=="undefined"){
							 top.jQuery.getScript("/qfy-includes/js/jquery/ui.all.min.js").done(function() {
								top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
								top.jQuery('body,.blockOverlay').css('cursor', 'auto');
							 })
						 }else{
								top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
								top.jQuery('body,.blockOverlay').css('cursor', 'auto');
						 }
		
						
						return false;
					});
				}
			}else if(href && href.indexOf("iframe.php?video_mp4_local=")>-1 && href.indexOf("size=")>-1 && href.indexOf("&auto=")>-1){
				jQuery(this).addClass("thickbox");
				var auto = true;
				var full = true;
				var width = body_width;
				var height = body_height;
				var color = "#000";
				var opacity = "";
				var id = 0;
				var t1 = href.split("&");
				for(i=0;i<t1.length;i++){
					var t2 = t1[i].split("=");
					if(t2[0]=="size"){
						if(t2[1]=="big"){
							width = width*0.8;
							height = height*0.6;
							full =false;
						}else if(t2[1]=="middle"){
							width = width*0.6;
							height = height*0.4;
							full =false;
						}else if(t2[1]=="small"){
							width = width*0.4;
							height = width*0.8;
							full =false;
						}else if(t2[1]=="less"){
							width = width*0.3;
							height = height*0.2;
							full =false;
						}else if(t2[1]=="full"){
							width = width;
							height = height*0.7;
							full =true;
						}
					}else if(t2[0]=="auto"){
						if(t2[1]=="1"){
							auto = true;
						}else{
							auto= false;
						}
					}else if(t2[0]=="color"){
						color = decodeURIComponent(t2[1]);
					}else if(t2[0]=="opacity"){
						opacity = t2[1];
					}
				}
				var newhref = href+"&video_volume=50&video_fullscreen="+full+"&video_auto="+auto+"&ispopup=1&video_theme=maccaco&video_bgcolor=%23000&KeepThis=true&TB_iframe=true&height="+height+"&width="+width;
			
				jQuery(this).attr("href",newhref).unbind().bind("click",function(e){
			
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},100);
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},400);
					setTimeout(function(){
						jQuery("#TB_overlay:visible").css("background-color",color).css("opacity",opacity);
						jQuery("#TB_window:visible iframe").css("background-color",color);
						if(full){
							jQuery("#TB_window:visible").addClass("full");
						}
					},800);
				   
				})
			}
			
		})
	}

	
}

function qfy_custom_select(){
	jQuery(".qfy_custom_select").each(function(){
		var fun = jQuery(this).attr("data-fun");
		var ids = '['+jQuery(this).attr("data-ids")+']';
		var urls = jQuery(this).attr("data-urls");
		if(ids!=""){
			jQuery(this).cxSelect({
				  selects: eval(ids),
				  required: true,
				  url: eval(urls),
				});	
		}
	})
}

function thebackground(qfy_bg_images,time) {
	if(screen.width<760){
		return false;
	}
	var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
	var str ="";
	var bodyColor = jQuery("body").css("background-color");
	var bodyrepeat = jQuery("body").css("background-repeat");
	var bodyattachment = jQuery("body").css("background-attachment");
	var bodyposition = jQuery("body").css("background-position");
	var bodysize = jQuery("body").css("background-size");

	
	for(i=0;i<tmp_qfy_bg_images.length;i++){
		var img = tmp_qfy_bg_images[i];
		if(i==0){
			str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url('+img+')"  class="show"></div>';
		}else{
			str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url('+img+')"  ></div>';
		}
	}
	jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> '+str+'</div>');
	jQuery("body .qfy_body_background > div").css("background-color",bodyColor).css("background-repeat",bodyrepeat).css("background-attachment",bodyattachment).css("background-position",bodyposition).css("background-size",bodysize);
	jQuery('div.qfy_body_background div').css({opacity: 0.0});
	jQuery('div.qfy_body_background div:first').css({opacity: 1.0});
	
	setInterval(function(){
		var current = (jQuery('div.qfy_body_background div.show')? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
		if ( current.length == 0 ) current = jQuery('div.qfy_body_background div:first');
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') :current.next()) : jQuery('div.qfy_body_background div:first'));
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
	},time*1000);

	
}
function vc_3d_photo(){
	if(jQuery(".qfy-360viewer").length==0){
		return;
	}

	if(typeof(PhotoSphereViewer)=="undefined"){
		if(parent){
			parent.vc.ShortcodesBuilder.save(true,function(){
				parent.location.reload();
			});
		}
	}else{
		_vc_3d_photo();
	}

}
function _vc_3d_photo(){
	jQuery(".qfy-360viewer:not(.loaded)").each(function(){
		jQuery(this).addClass("loaded");
		if(jQuery("body").width()>992){
			var height = jQuery(this).attr("data-height")?jQuery(this).attr("data-height"):"500px";
		}else{
			var height = jQuery(this).attr("data-mheight")?jQuery(this).attr("data-mheight"):"300px";
		}
		var image = jQuery(this).attr("data-src")?jQuery(this).attr("data-src"):"/FeiEditor/bitSite/3d/360-viewer/sun.jpg";
		var auto = jQuery(this).attr("data-auto")?jQuery(this).attr("data-auto"):"false";
		var autospeed = jQuery(this).attr("data-src")?jQuery(this).attr("data-src"):"/FeiEditor/bitSite/3d/360-viewer/sun.jpg";

		var auto = jQuery(this).attr("data-auto")?jQuery(this).attr("data-auto"):false;
		var autospeed = jQuery(this).attr("data-autospeed")?jQuery(this).attr("data-autospeed"):"2rpm";
		if(auto==0) auto = false;
		else auto = auto*1;
		if(!autospeed) autospeed="2rpm";
		var $this = jQuery(this);
		// Panorama display
		var div = $this[0];

		div.style.height = height;
		PSV = new PhotoSphereViewer({
			// Path to the panorama
			panorama: image,
			// Container
			container: div,
			// Deactivate the animation
			time_anim: auto,
			anim_speed:autospeed,
			navbar: true,
			// Resize the panorama
			size: {
				width: "100%",
				height: height
			},
			// HTML loader
			loading_html: "<img class='loading' style='width:80px;position: absolute;left:50%;top:50%;transform: translate(-50%,-50%)' src='/FeiEditor/bitSite/images/new-loading.gif'/>",
			// Disable smooth moves to test faster
			smooth_user_moves: false,
			onready:function(){
				$this.find(".loading").remove();
			}
		});

	});
}
function vc_element_init(){
	if(dtGlobals.isMobile==false && jQuery("body").width()<768){
		jQuery(".qfy-element").each(function(){
			var m_padding = jQuery(this).attr("m-padding");
			if(m_padding ){
				jQuery(this).css("padding",m_padding);
			}
		});
	}
}

function right_nav_bar(){
	if(jQuery("#right_nav_bar_scroll").length>0){
		jQuery("#right_nav_bar_scroll").waypoint({
			handler: function(direction) {
				if(direction=="down"){
					jQuery(".right_nav_bar").show();
				}else{
					jQuery(".right_nav_bar").hide();
				}
			},
			offset: "0",
		})
	}

	var bgcolor = jQuery(".right_nav_bar").attr("data-bgcolor");
	var hovercolor = jQuery(".right_nav_bar").attr("data-hovercolor");
	var data_pop= jQuery(".right_nav_bar").attr("data-pop");
	jQuery(".right_nav_bar .icons").each(function(){
		var title = jQuery(this).attr("data-desc");
		var $this = jQuery(this);
		var imageurl = jQuery(this).attr("data-file");
		if(imageurl){
			
			var tiptitle="<img src='"+imageurl+"'  style='width:150px;height:150px;'/><div style='width:150px;text-align:center;overflow:hidden;margin-top:5px;'>"+title+"</div>";
			if(jQuery(this).find(".title").html()=="" || jQuery(this).find(".title").length==0){
				var data = { tipJoint: "right", fixed:true,offset:[-50,0],style: data_pop };
				jQuery("<img />").attr("src", imageurl).load(function(){
					setTimeout(function(){new Opentip( $this, tiptitle, data);},1500);
				})
				
			}
			
		}
	}).mouseenter(function(){
		if(jQuery(this).find(".title").html()!="" && jQuery(this).find(".title").length>0){
			var width = jQuery(this).find(".title").css("width");
			width = width.replace("px","");
			jQuery(this).animate({width:(width*1+64)+"px"},200);
		}
		var tmpcolor = jQuery(this).attr("data-hovercolor");
		if(!tmpcolor) tmpcolor = hovercolor;

		jQuery(this).css({background:tmpcolor});
	}).mouseleave(function(){
		if(jQuery(this).find(".title").html()!="" && jQuery(this).find(".title").length>0){
			jQuery(this).animate({width:"54px"},200);
		}
		var tmpcolor = jQuery(this).attr("data-color");
		if(!tmpcolor) tmpcolor = bgcolor;
		
		jQuery(this).css({background:tmpcolor});
	});
	jQuery(".right_nav_bar .totop-icon").click(function(e){
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	})
}


function dropdownmenu_event(obj){
	
	 var $this = jQuery(obj);
	 var p = $this.closest(".dropdown_container");
	 if(p.find(".list-content").hasClass("active")){
		 p.find(".list-content").removeClass("active");
		 p.closest("section").removeClass("overflowauto");
		 p.closest(".qfy-column-inner").removeClass("overflowauto");
	 }else{
		 p.find(".list-content").addClass("active");
		 p.closest("section").addClass("overflowauto");
		 p.closest(".qfy-column-inner").addClass("overflowauto");
	 } 
	
}
function column_init_align(){
	
	var w = jQuery("body").width();
	jQuery('.qfy-column-inner.column_middle').each(function(){
		
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var section = jQuery(this).closest("section.section");
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		var pheight = section.height();
		var padding = 0;
		if(pheight<heigth ) pheight = heigth;
		if(t1>0 || t2>0){
			if( (pheight*1-heigth) < (t1-t2)){
				if(pheight*1==heigth){
					padding = (t2*1-t1*1)/2;
				}else{
					padding = (t2*1-t1*1-heigth)/2;
				}
			}else if( (pheight*1-heigth) < (t2-t1)){
				padding = t2*1-t1*1+(heigth-pheight)/2;
			}else{
				padding = (t2*1-t1*1)/2;
			}
		}
	
		if(jQuery(this).siblings(".qfy-column-inner").length>0){
			if(w>760){
				jQuery(this).css("margin-top",((pheight-heigth)/2 + padding)+"px");
			}
		}else{
			jQuery(this).css("margin-top",((pheight-heigth)/2+ padding)+"px");
		}
		
	})
	jQuery('.qfy-column-inner.column_bottom').each(function(){
		var section = jQuery(this).closest("section.section");
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		
		var $this = this;
		if(is_edit_model){
			setTimeout(function(){
				var pheight = section.height();
				if(pheight<heigth) pheight = heigth;
				if(section.find(".qfy-column-inner").length>1){
					if(w>760){
						jQuery($this).css("margin-top",(pheight-heigth)+"px");
					}
				}else{
					jQuery($this).css("margin-top",(pheight-heigth)+"px");
				}
			},80);
		}else{
			var pheight = section.height();
			if(pheight<heigth) pheight = heigth;
			if(section.find(".qfy-column-inner").length>1){
				if(w>760){
					jQuery(this).css("margin-top",(pheight-heigth)+"px");
				}
			}else{
				jQuery(this).css("margin-top",(pheight-heigth)+"px");
			}
		}
		
	})
	
}
function vc_royalSlider_gallery_init(){
	if(  jQuery('.royalSlider_gallery_new').length==0 ){
		return;
	}
	
	 if(typeof jQuery.fn.royalSlider=="undefined"){
		 jQuery.getScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js").done(function() {
			 _vc_royalSlider_gallery_init();
		 })
	 }else{
		 _vc_royalSlider_gallery_init();
	 }
}

function accordioncontent(){
	 jQuery('.qfy-accordioncontent:not(.changed)').each(function(){
		 jQuery(this).addClass("changed").find('.a_content').each(function(){
			 var p = jQuery(this).parent();
			 jQuery(this).find('> section').each(function(index){
				 var curr = p.find(".a_header h4:eq("+index+")");
				 var text = curr.html();
				 if(text){
					jQuery(this).before('<h4 class="panel-title" >'+text+'</h4>');
					jQuery(this).prev().find(".line").remove();
				 }
				
				 if(curr.find(".line").length>0){
					 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>"+curr.find(".line").clone().prop("outerHTML")+"</h5>";
					 jQuery(this).after(line);
				 }
			 })
		 })
	 })

	 
}
jQuery(window).load(function() {
	if(!is_edit_model){
		resizeDefaultObjSize();
	}
});
//处理锚点
var hash = window.location.hash;
_menu_link_event(hash);

jQuery(document).ready(function($) {
	//滚动...
	if($("#phantom").css("display")=="block"){
		var floatMenuH = $("#phantom").height();
	}else{
		var floatMenuH = 0;
	}
	var urlHash = "#" + window.location.href.split("#")[1];
	if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
		if(urlHash!= "#undefined"){
			$("html, body").animate({
				scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
			}, 600, function(){
				$("body").removeClass("is-scroll");
			});
		}
	}else{
		if(urlHash.indexOf("=")<0 && $(urlHash).length > 0){
			$("body").addClass("is-scroll");
			setTimeout(function(){
				$("html, body").animate({
					scrollTop:  $(urlHash).offset().top
				}, 600, function(){
					jQuery("#parallax-nav a[href='"+urlHash+"']").closest("li").addClass("active");
					$("body").removeClass("is-scroll");
					parallax_scroll_fun();
				});
			},500);
			
		}else{
			parallax_scroll_fun();
		}
	}
	//滚动...end
	//...check body
	vc_element_init();
	//侧边栏
	right_nav_bar();
	//底部菜单
	jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var submenu = jQuery(this).next(".sub-menu");
		if(submenu.css("display")=="none"){
			submenu.css("display","block");
		}else{
			submenu.css("display","none");
		}
	})
	//背景多个图片切换
	if(typeof(qfy_bg_images)!= "undefined"){
		thebackground(qfy_bg_images,qfy_bg_images_int);
	}
	//图片加载完再执行一下resize
	if(jQuery(".preloadimg:not('.loaded')").length>0){
		setTimeout(function(){
				jQuery(".preloadimg:not('.loaded')").each(function(){
					var newurl = jQuery(this).attr("org-src");
					jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
						resizeDefaultObjSize();
					});
				});
		},300);
	}
	
	//多级选择
	qfy_custom_select();
	

	if(!is_edit_model){
		$(".qfy-text a[url-flagtarget='_blank']").attr("target","_blank");
		$(".qfy-text a[url-flagtarget='']").removeAttr("target");
	}
	if(top!=self){
		  function closeOpenPanel(){
			  if(top.jQuery(".boxy-wrapper:visible").length>0){
					top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
		    	}
				if(parent.jQuery("#qfbody-content>.panel:visible").length>0){
					parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
		    	}
				if(top.jQuery(".bitPopIframe:visible").length>0){
					top.jQuery(".bitPopIframe:visible .btn-default").click();
		    	}
		  }
		  var ctrlDown = false;
		  var escDown = false;
		  var ctrlKey = 17, vKey = 86, cKey = 67,escKey=27,zkey=90,ykey=89;
		  $(document).keydown(function(e){
	  			if (e.keyCode == escKey){
	  				closeOpenPanel();
	  				 top.jQuery.unblockUI();
	  			}
	  			if(e.ctrlKey && (e.keyCode== zkey|| e.keyCode== ykey)){
	  				top.restorePage();
	  			}
		  })
		  try{
			  $(top.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
							if(e.ctrlKey  && (e.keyCode== zkey|| e.keyCode== ykey)){
								top.restorePage();
							}
			 })
			  $(parent.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
			 })
		 }catch(e){}
	  }else{
		  $(document).keydown(function(e){
	  			if (e.keyCode == "27"){
	  				 jQuery.unblockUI();
	  			}
		  })
		  
		  
	  }
	$(".dropdown-toggle").unbind("click").bind("click",function(){
		 var obj =jQuery(this).parent().find(".dropdown-menu");
		 if(obj.css("display") == "none"){
			obj.show();
		 }else{
			obj.hide();
		 }
	})
	initmouseover();
	resizeDefaultObjSize();
	toolTip();
	weiBoAndWeiXinToolTip();
	searchForm();
	/*--Append element </i> to preloader*/
	//$(".tp-loader, .ls-defaultskin .ls-loading-indicator").not(".loading-label").append('<svg class="fa-spinner" viewBox="0 0 48 48" ><path d="M23.98,0.04c-13.055,0-23.673,10.434-23.973,23.417C0.284,12.128,8.898,3.038,19.484,3.038c10.76,0,19.484,9.395,19.484,20.982c0,2.483,2.013,4.497,4.496,4.497c2.482,0,4.496-2.014,4.496-4.497C47.96,10.776,37.224,0.04,23.98,0.04z M23.98,48c13.055,0,23.673-10.434,23.972-23.417c-0.276,11.328-8.89,20.42-19.476,20.42	c-10.76,0-19.484-9.396-19.484-20.983c0-2.482-2.014-4.496-4.497-4.496C2.014,19.524,0,21.537,0,24.02C0,37.264,10.736,48,23.98,48z"/></svg>');

	/*--Set variable for floating menu*/
	if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;

	/*--old ie remove csstransforms3d*/
	//if ($.browser.msie) $("html").removeClass("csstransforms3d");

	/*--Detect iphone phone*/
	if(dtGlobals.isiPhone){
		$("body").addClass("is-iphone");
	};
	
	/* !Custom touch events */
	/* !(we need to add swipe events here) */

	/* Custom touch events:end */
	if(!is_edit_model){
		if($(".bitMainTopSider .vc-no-content-helper").length==0 && $(".bitMainTopSider").length>0  && $(".bitMainTopSider").height()==0){
			$(".bitMainTopSider").parent().parent().remove();
			//$(".bitMainTopSider-wrapper").css("padding-top",0);
		}
	}



	
	/* !-overlap for webkit*/
	if ( !$.browser.webkit || dtGlobals.isMobile ){
		$("body").addClass("not-webkit").removeClass("is-webkit");
	}else{
		$("body").removeClass("not-webkit").addClass("is-webkit");
		//$(".overlap #main").prepend("<div class='main-gradient'></div>");
	};


	/*overlap for webkit:end*/
/*Misc:end*/

/* !-jQuery extensions */

	/* !- Check if element exists */
	$.fn.exists = function() {
		if ($(this).length > 0) {
			return true;
		} else {
			return false;
		}
	}

	/* !- Check if element is loaded */
	$.fn.loaded = function(callback, jointCallback, ensureCallback){
		var len	= this.length;
		if (len > 0) {
			return this.each(function() {
				var	el		= this,
					$el		= $(el),
					blank	= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

				$el.on("load.dt", function(event) {
					$(this).off("load.dt");
					if (typeof callback == "function") {
						callback.call(this);
					}
					if (--len <= 0 && (typeof jointCallback == "function")){
						jointCallback.call(this);
					}
				});

				if (!el.complete || el.complete === undefined) {
					el.src = el.src;
				} else {
					$el.trigger("load.dt")
				}
			});
		} else if (ensureCallback) {
			if (typeof jointCallback == "function") {
				jointCallback.call(this);
			}
			return this;
		}
	};

/* jQuery extensions: end */

/* !-Main navigation */
/* We need to fine-tune timings and do something about the usage of jQuery "animate" function */ 



if(dtGlobals.isWindowsPhone){
	$("body").addClass("windows-phone");
}

$(".mini-nav select").change(function() {
	window.location.href = $(this).val();
});


dtGlobals.isHovering = false;

mainmenu_event();

/* !-Navigation widget */
var customTimeoutShow
$(".custom-nav > li > a").click(function(e){
	$menuItem = $(this).parent();
	if ($menuItem.hasClass("has-children")) e.preventDefault();
	
	
		if ($(this).attr("class") != "active"){
				$(".custom-nav > li > ul").stop(true, true).slideUp(400);
				$(this).next().stop(true, true).slideDown(500);
				$(".custom-nav > li > a").removeClass("active");
				$(this).addClass('active');
		}else{
				$(this).next().stop(true, true).slideUp(500);
				$(this).removeClass("active");
		}

		$menuItem.siblings().removeClass("act");
		$menuItem.addClass("act");
});
$(".custom-nav > li > ul").each(function(){
	clearTimeout(customTimeoutShow);
	$this = $(this);
	$thisChildren = $this.find("li");
	if($thisChildren.hasClass("act")){
		$this.prev().addClass("active");
		$this.parent().siblings().removeClass("act");
		$this.parent().addClass("act");
		$(this).slideDown(500);
	}
});

/* Navigation widget: end */

/*!-SLIDERS*/

	/* !-Metro slider*/
	var mtResizeTimeout;

	$(window).on("resize", function() {
		resizeDefaultObjSize();
		
		clearTimeout(mtResizeTimeout);
		mtResizeTimeout = setTimeout(function() {
			$(window).trigger( "metroresize" );
		}, 200);
		try{
			if( parent.jQuery("#mobile_iframe_preivew").length==1){
				parent.setMobileDocumentInit();
			}
			
		}catch(e){
	
		}
		if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
			var v1 = jQuery("#header #branding").width();
			var v2 = jQuery("#header .assistive-info").width();
			jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
		
		}

	});
	try{
		if( parent.jQuery("#mobile_iframe_preivew").length==1){
			setTimeout(function(){
				parent.setMobileDocumentInit();
			},1000);
			
		}
	}catch(e){
		//跨域异常下，document.referrer
		
		/*var lang = getQueryString("lang");
		var BodyIsFt=getCookie(JF_cn)
		if(lang=="zh-cn"){
			BodyIsFt = 0;
			setCookie(JF_cn,"",-1);
		}
		if(lang=="zh" || BodyIsFt=="1"){
			setTimeout("StranBody()",100);
		}*/
		
	}
	
	if(jQuery(".zh_tw_lang").length>0){
		StranBody(jQuery(".zh_tw_lang")[0]);
		var href = jQuery(".selected_template_a").attr("href");
		var nhref = Traditionalized(href);
		jQuery(".selected_template_a").attr("href",nhref);
	}
	//翻译简繁体
	tranlanguage(jQuery("html"));



	/*!Scroll to Top*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').removeClass('off').addClass('on');
		}
		else {
			$('.scroll-top').removeClass('on').addClass('off');
		}
	});
	$(".scroll-top").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	/*Scroll to Top:end*/


	/*Shopping cart top bar:end*/

	/* !- Skills */
	$.fn.animateSkills = function() {
		$(".skill-value", this).each(function () {
			var $this = $(this),
				$this_data = $this.data("width");

			$this.css({
				width: $this_data + '%'
			});
		});
	};

	// !- Animation "onScroll" loop
	function doAnimation() {
		
		if(dtGlobals.isMobile){
			$(".skills").animateSkills();
		}
		if($("html").hasClass("old-ie")){
			$(".skills").animateSkills();
		};
	};
	// !- Fire animation
	doAnimation();
	/* Skills:end */
	// Create the dropdown base 12.02.14
	$("<select />").prependTo(".mini-nav .menu-select");

	// Create default option "Select"
	$("<option />", {
		"selected"  :  "selected",
		"value"     :  "",
		"text"      :  "———"
	}).appendTo(".mini-nav .menu-select select");

	// Populate dropdown with menu items
	$(".mini-nav").each(function() {
		var elPar = $(this),
			thisSelect = elPar.find("select");
		$("a", elPar).each(function() {
			var el = $(this);
			$("<option />", {
				"value"   : el.attr("href"),
				"text"    : el.text(),
				"data-level": el.attr("data-level")
			}).appendTo(thisSelect);
		});
	});
	

	$(".mini-nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	$(".mini-nav select option").each(function(){
		var $this = $(this),
			winHref = window.location.href;
		 if($this.attr('value') == winHref){
			$this.attr('selected','selected');
		};
	})
	/*!-Appearance for custom select*/
	$('.bitcommerce-ordering-div select').each(function(){
		$(this).customSelect();
	});
	$(".menu-select select, .mini-nav .customSelect1, .vc_pie_chart .vc_pie_wrapper").css("visibility", "visible");

	$(".mini-nav option").each(function(){
		var $this	= $(this),
			text	= $this.text(),
			prefix	= "";

		switch ( parseInt($this.attr("data-level"))) {
			case 1:
				prefix = "";
			break;
			case 2:
				prefix = "— ";
			break;
			case 3:
				prefix = "—— ";
			break;
			case 4:
				prefix = "——— ";
			break;
			case 5:
				prefix = "———— ";
			break;
		}
		$this.text(prefix+text);
	});


/* !Onepage template */
	$(".anchor-link").each(function(){
		var $_this = $(this),
			selector 	= $_this.attr("href");
			var this_offset, that_offset, offset_diff;
			var base_speed  = 600,
				speed       = base_speed;
			if($(selector).length > 0){
				var this_offset = $_this.offset(),
					that_offset = $(selector).offset(),
					offset_diff = Math.abs(that_offset.top - this_offset.top),
					speed       = (offset_diff * base_speed) / 1000;
			}
		$(this).on('click',function(e){
			$("body").addClass("is-scroll");
			if($("#phantom").css("display")=="block"){
				var floatMenuH = $("#phantom").height();
			}else{
				var floatMenuH = 0;
			}
			var $_this = $(this),
				selector = $_this.attr("href");
			if(selector == "#"){
				$("html, body").animate({
					scrollTop: 0
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
					$("html, body").animate({
						scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}else{
					if($(selector).length > 0){
						$("html, body").animate({
							scrollTop:  $(selector).offset().top - floatMenuH + 1
						}, speed, function(){
							$("body").removeClass("is-scroll");
						});
					}
				}
			}
			return false;
			
		});
	});
	jQuery(window).load(function(){
		if(jQuery('#load').length){
			jQuery('#load').fadeOut().remove();
		}
	});

	if($(".one-page-row").length){

		function onePageAct (){
			var active_row = $(".one-page-row div:in-viewport[data-anchor^='#']").attr("data-anchor");
			if($('.one-page-row .menu-item a[href='+ active_row +']').length ){
				$('.one-page-row .menu-item a').parent("li").removeClass('act');
				$('.one-page-row .menu-item a[href='+ active_row +']').parent("li").addClass('act');
			}
			if(active_row == undefined && $('.one-page-row .menu-item a[href="#"]').length){
				$('.one-page-row .menu-item a[href="#"]').parent("li").addClass('act');
			}
		};
		onePageAct();
	}

	$("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function(){
			var $_this = $(this),selector = $_this.attr("href");
		
		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){
			//if(selector.indexOf("#")!=0){
				selector = jQuery.trim(selector);
				var tmpselecter = selector.split("#");
				selector = "#"+tmpselecter[tmpselecter.length-1];
			//}	
			
			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					var $_this = $(this),selector = $_this.attr("href");
					
					//手机下菜单是#，子菜单无法点击
					var mobilemenu =$_this.closest("#dl-menu").find("#mobile-menu").length;
					if( mobilemenu>0 && $_this.parent().hasClass("has-children")){
						var $submenu = $_this.parent().find( 'ul.dl-submenu:first' );
						if($submenu.length>0){
							var xx=event.pageX;
							var width = $submenu.width();
							var isclick = width-xx>35;
							if(!isclick) return;
						}
					}
					
					if($("body >.dl-menuwrapper.floatmenu").length>0){
						$("#dl-menu #mobile-menu .phone-text").click();
					}
	
					$("body").addClass("is-scroll");
					

					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}
					
					//if(selector.indexOf("#")!=0){
						var tmpselecter = selector.split("#");
						selector = "#"+tmpselecter[tmpselecter.length-1];
					//}	
					$_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
					var base_speed  = 600,
						speed       = base_speed;
					if(selector.indexOf("=")<0 &&  $(selector).length > 0){
						var this_offset = $_this.offset(),
							that_offset = $(selector).offset(),
							offset_diff = Math.abs(that_offset.top - this_offset.top),
							speed       = (offset_diff * base_speed) / 1000;
					}

					$(".one-page-row .menu-item a").parent("li").removeClass("act");
					if($(".one-page-row").length>0){
						$_this.parent("li").addClass("act");
					}
					if(selector == "#" && ($(".one-page-row").length > 0)){
						$("html, body").animate({
							scrollTop: 0
						}, speed, function(){
							$("body").removeClass("is-scroll");
							$_this.parent().siblings(".onepage").removeClass("act onepage");
						});
					}else{
						if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
							$("html, body").animate({
								scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
							}, speed, function(){
								$("body").removeClass("is-scroll");
							});
						}else{
							if(selector.indexOf("=")<0 &&  $(selector).length > 0){
								$("html, body").animate({
									scrollTop:  $(selector).offset().top - floatMenuH + 1
								}, speed, function(){
									$("body").removeClass("is-scroll");
								
									$_this.parent().siblings(".onepage").removeClass("act onepage");
									$_this.parent().addClass("act onepage");
									_menu_link_event(selector);
									
								});
							}
						}
					}
					return false;
				});
		
			}
		
		}

	});
	$("ul.menu a,.tabcontent-inner>ul a").each(function(){
		var $_this = $(this),selector = $_this.attr("href");
		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){
		
			selector = jQuery.trim(selector);
			var tmpselecter = selector.split("#");
			selector = "#"+tmpselecter[tmpselecter.length-1];
			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					$("body").addClass("is-scroll");
					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}
					var base_speed  = 600,speed       = base_speed;
					var this_offset = $_this.offset(),that_offset = $(selector).offset(),offset_diff = Math.abs(that_offset.top - this_offset.top),speed       = (offset_diff * base_speed) / 1000;
		
					$("html, body").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
						_menu_link_event(selector);
					});
					
				});
			}
		}
	});
	$(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click',function(e){
		$("body").addClass("is-scroll");
		if($("#phantom").css("display")=="block"){
			var floatMenuH = $("#phantom").height();
		}else{
			var floatMenuH = 0;
		}
		var $_this = $(this),
			selector 	= $_this.attr("href");

		var base_speed  = 600,
			speed       = base_speed;
		if($(selector).length > 0){
			var this_offset = $_this.offset(),
				that_offset = $(selector).offset(),
				offset_diff = Math.abs(that_offset.top - this_offset.top),
				speed       = (offset_diff * base_speed) / 1000;
		}
		if(selector == "#"){
			$("html, body").animate({
				scrollTop: 0
			}, speed, function(){
				$("body").removeClass("is-scroll");
			});
		}else{
			if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
				$("html, body").animate({
					scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(selector).length > 0){
					$("html, body").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}
			}
		}
		return false;
	});
	if($(".one-page-row").length){
		$(window).scroll(function () {
			var currentNode = null;
			if(!$("body").hasClass("is-scroll")){
				$('.one-page-row div[data-anchor^="#"]').each(function(){
					var activeSection = $(this),
						currentId = $(this).attr('data-anchor');
					if($(window).scrollTop() >= ($(".one-page-row div[data-anchor='" + currentId + "']").offset().top - 100)){
						currentNode = currentId;
					}
				});
				$('.menu-item a').parent("li").removeClass('act');
				$('.menu-item a[href="'+currentNode+'"]').parent("li").addClass('act');
				if($('.menu-item a[href="#"]').length && currentNode == null){
					$('.menu-item a[href="#"]').parent("li").addClass('act');
				}
			}
		});
	}
/* Onepage template:end */
	 floatmenu_create();
	var waypoint_menu_hash = {}
	jQuery(".mainmenu >.menu-item > a").each(function(){
	
		var $this = this;
		var href =jQuery(this).attr("href");
		if(href.indexOf("#")>-1 &&href!="#" ){
			var href_id = href.split("#");
			if(href_id.length>1){
				href_id = jQuery.trim(href_id[1]);
			}
			if(href_id && href_id.indexOf("=")<0 &&  href_id.indexOf("/")<0 && jQuery("section#"+href_id).length>0){
				waypoint_menu_hash[href_id] = $this;
			}else if(href_id=="header"){
					jQuery("#header").waypoint({
						handler: function(direction) {
							hash = "#header";
							jQuery(".mainmenu .act").removeClass("act onepage");
							jQuery(".mainmenu  a").each(function(){
								var href =jQuery(this).attr("href");
								if(href && href.indexOf("#")>-1 &&href.indexOf(hash)>-1){
									currli = jQuery(this).parent();
									currli.addClass("act onepage");
								}	
							})
							jQuery(".widget_nav_menu ul.menu .current-menu-item,.qfy-listmenuvertical ul.menu .current-menu-item,.widget_nav_menuhorizontal ul.menu .current-menu-item").removeClass("current-menu-item current-menu-ancestor");
							jQuery(".widget_nav_menu ul.menu a,.qfy-listmenuvertical ul.menu a,.widget_nav_menuhorizontal ul.menu a,.tabcontent-inner>ul a").each(function(){
								var href =jQuery(this).attr("href");
								if(href && href.indexOf("#")>-1 &&href.indexOf(hash)>-1){
									currli = jQuery(this).parent();
									currli.addClass("current-menu-item");
								}	
								
							})
							jQuery(".tabcontent-inner>ul .active").removeClass("active");
							jQuery(".tabcontent-inner>ul  a").each(function(){
								var href =jQuery(this).attr("href");
								if(href && href.indexOf("#")>-1 &&href.indexOf(hash)>-1){
									jQuery(this).addClass("active");
								}	
							});
							if(jQuery("#parallax-nav").length>0){

								jQuery("#parallax-nav li").removeClass("active");
								jQuery("#parallax-nav [href='"+hash+"']").parent().addClass("active");
							}
							try {
								var current_url = window.location.href;
								var tmpurl = current_url.split("#");
								window.history.pushState({
									path: window.location.href
								}, '', tmpurl[0]);
							} catch(e) {
								console.error('history.pushState failed, maybe HTML5 is not supported?')
							}
							_menu_link_event(hash);
							
						},
						offset: "-10",
					})
			}
		}
	})

	$.each(waypoint_menu_hash, function(hash, obj) {
		jQuery("section#"+hash).waypoint({
			handler: function(direction) {
				if (direction === 'down') {
					var curr_hash = hash;
					jQuery(".mainmenu .act").removeClass("act onepage");
					jQuery(".mainmenu  a").each(function () {
						var href = jQuery(this).attr("href");


						if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
							currli = jQuery(this).parent();
							currli.addClass("act onepage");
						}
					})
					jQuery(".widget_nav_menu ul.menu .current-menu-item,.qfy-listmenuvertical ul.menu .current-menu-item,.widget_nav_menuhorizontal ul.menu .current-menu-item").removeClass("current-menu-item current-menu-ancestor");
					jQuery(".widget_nav_menu ul.menu a,.qfy-listmenuvertical ul.menu a,.widget_nav_menuhorizontal ul.menu a,.tabcontent-inner>ul a").each(function () {
						var href = jQuery(this).attr("href");
						if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
							currli = jQuery(this).parent();
							currli.addClass("current-menu-item");
						}

					})
					jQuery(".tabcontent-inner>ul .active").removeClass("active");
					jQuery(".tabcontent-inner>ul  a").each(function () {
						var href = jQuery(this).attr("href");
						if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
							jQuery(this).addClass("active");
						}
					})
					if(jQuery("#parallax-nav").length>0){
						jQuery("#parallax-nav li").removeClass("active");
						jQuery("#parallax-nav [href='#"+curr_hash+"']").parent().addClass("active");
					}

					_menu_link_event(curr_hash);
				}
				
			},
			offset: "20px",
		}).waypoint(function(direction) {
			if (direction === 'up') {
				var curr_hash = hash;
				jQuery(".mainmenu .act").removeClass("act onepage");
				jQuery(".mainmenu  a").each(function () {
					var href = jQuery(this).attr("href");


					if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
						currli = jQuery(this).parent();
						currli.addClass("act onepage");
					}
				})
				jQuery(".widget_nav_menu ul.menu .current-menu-item,.qfy-listmenuvertical ul.menu .current-menu-item,.widget_nav_menuhorizontal ul.menu .current-menu-item").removeClass("current-menu-item current-menu-ancestor");
				jQuery(".widget_nav_menu ul.menu a,.qfy-listmenuvertical ul.menu a,.widget_nav_menuhorizontal ul.menu a,.tabcontent-inner>ul a").each(function () {
					var href = jQuery(this).attr("href");
					if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
						currli = jQuery(this).parent();
						currli.addClass("current-menu-item");
					}

				})
				jQuery(".tabcontent-inner>ul .active").removeClass("active");
				jQuery(".tabcontent-inner>ul  a").each(function () {
					var href = jQuery(this).attr("href");
					if (href && href.indexOf("#") > -1 && href.indexOf(curr_hash) > -1) {
						jQuery(this).addClass("active");
					}
				});
				if(jQuery("#parallax-nav").length>0){
					jQuery("#parallax-nav li").removeClass("active");
					jQuery("#parallax-nav [href='#"+curr_hash+"']").parent().addClass("active");
				}
				_menu_link_event(curr_hash);
			}
		}, {
			offset: '-20px'
		});
	});


	
//ready  in

	
//ready end	
});

function floatmenu_create(){
	
	if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
		var v1 = jQuery("#header #branding").width();
		var v2 = jQuery("#header .assistive-info .top-bar-right").width();
		jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
	}
	var $ = jQuery;
	if($("#header.newrightmenu,#header.newleftmenu").length>0){
		if($("#page.bodyheader40,#page.bodyheader0").length>0){
			$("#header").css("position","fixed").css("top","0");
			return;
		}
	}

	

	/*!Floating menu*/
	if (smartMenu && $("#header").length>0 ) {
		var controlDiv = "";
		var mouseHtml = "";
		try{
			if(self!=top && !top.jQuery("body").hasClass("caterole")){
				var pcontroldiv = '<div class="controls-column bitPcontrols wf-mobile-hidden" style="top:50%;margin-top:-8px;"><div class="controls-out-tl"><div class="parent parent-vc_row active "><a class="control-btn"><span class="vc-btn-content vo-btn-nomove" style="padding:0 5px 0 10px !important;  line-height: 18px !important;font-size:12px !important;color:#fff;" onclick="top.qfFloatMenuSetting()">设置浮动头部和LOGO</span></a></div></div></div>';

				mouseHtml = 'onmouseover="document.getElementById(\'phantomFloatMenu\').style.display = \'block\';floatmenucontrols_mouseenter();" onmouseout="document.getElementById(\'phantomFloatMenu\').style.display = \'none\';floatmenucontrols_mouseout();"  ';
				controlDiv = '<div id="phantomFloatMenu"  style="line-height: 0px; opacity: 1; visibility: visible; transition: auto 0s ease 0s; display: none;" class="controls-element vc-controls bit-controls-element">'+pcontroldiv+'<div class="controls-cc"><a class="control-btn vc-element-name"><span class="vc-btn-content vo-btn-nomove">浮动菜单和LOGO</span></a><a class="control-btn control-btn-edit " onclick="top.qfFloatMenuSetting()" title="设置 浮动菜单样式"><span class="vc-btn-content"><span class="icon"></span></span></a></div></div>';
			}
		}catch(e){
			
		
		}

		var scrTop = 0,
			scrDir = 0,
			scrUp = false,
			scrDown = false,
			/*$header = $("#main-nav"),*/
			$header = $("#main-nav"),
			$headerSlide = $("#main-nav-slide .main-nav-slide-inner"),
			f_logoheight =  $("#main-nav").attr("data-lh"),
			f_maxwidth =  $("#main-nav").attr("data-mw"),
			f_fh =  $("#main-nav").attr("data-fh"),
			logoURL = $("#branding a").attr("href"),
			desc =  $("#bit-floatlogoText").html(),
			$parent = $header.parent(),
			$headerSlideParent = $headerSlide.parent(),
			$phantom = $('<div id="phantom" '+mouseHtml+' >'+controlDiv+'<div class="ph-wrap"><div class="ph-wrap-content"><div class="ph-wrap-inner"><div class="logo-box" ></div><div class="menu-box" ></div><div class="menu-info-box"  ></div></div></div></div></div>').appendTo("body"),
			$menuBox = $phantom.find(".menu-box"),
			$headerH = $header.height(),
			isMoved = false,
			breakPoint = 0,
			threshold = $("#header").offset().top + $("#header").height(),
			doScroll = false;
		var headerobj = $("#header>*");
		var header_height = jQuery("#header").height();
		
		
		if ($("#qfadminbar:visible").exists()) { $phantom.css("top", "28px"); };
		if ($("#page").hasClass("boxed")) { $phantom.find(".ph-wrap").addClass("boxed"); $phantom.addClass("boxed");}
		$phantom.find(".ph-wrap").addClass("with-logo");
		if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
			//if(logoURL == undefined){
				if(dtGlobals.logoURL){
					var valign = jQuery(".floatlogoText").css("vertical-align");
					if(!valign) valign="middle";
					var img_str = "";
					if(logoURL){
						img_str = '<a href="'+logoURL+'"><img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'"></a>';
					}else{
						img_str = '<img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'">';
					}
					$phantom.find(".logo-box").html('<div style="height:48px;vertical-align: '+valign+';display: table-cell;" >'+img_str+'</div>');
				}
			//}else{
			//	$phantom.find(".logo-box").html('<img src="'+dtGlobals.logoURL+'" height="'+dtGlobals.logoH+'" width="'+dtGlobals.logoW+'"></a>');
			//}
		}else{
			$phantom.find(".ph-wrap").addClass("with-logo-no");
		}
		if(desc){
			$phantom.find(".logo-box").append(desc);
			$phantom.find(".with-logo-no .logo-box").css("display","table-cell");
		}
		if(f_logoheight >=10 &&f_logoheight<=50 ){
			$("#phantom .logo-box img").css("max-height",f_logoheight+"px");
		}
		if(f_fh==1 ){
			$("#phantom").addClass("min");
		}
		if(f_maxwidth>0 ){
			$("#phantom .ph-wrap .ph-wrap-content").css("max-width",f_maxwidth+"px");
		}
		var info_w = $("#phantom .menu-info-box").width();
		if(jQuery("#header.bit-logo-menu").length>0 && !$("#phantom").hasClass("bit-logo-menu")){
			var old_img_str = $header.find("#branding .logo img:first").attr("src");
			$header.find("#branding .logo img:first").css("width","auto");
			$("#phantom").addClass("bit-logo-menu").find(".logo-box").remove();
			$("#phantom .menu-box").css("padding-left",info_w+"px");
		}

		$(".one-page-row .logo-box a").on('click',function(e){
			$("body").addClass("is-scroll");
			if($("#phantom").css("display")=="block"){
				var floatMenuH = $("#phantom").height();
			}else{
				var floatMenuH = 0;
			}
			var $_this = $(this),
				selector 	= $_this.attr("href");

			var base_speed  = 600,
				speed       = base_speed;
			if($(selector).length > 0){
				var this_offset = $_this.offset(),
					that_offset = $(selector).offset(),
					offset_diff = Math.abs(that_offset.top - this_offset.top),
					speed       = (offset_diff * base_speed) / 1000;
			}
			if(selector == "#"){
				$("html, body").animate({
					scrollTop: 0
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
					$("html, body").animate({
						scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}else{
					if($(selector).length > 0){
						$("html, body").animate({
							scrollTop:  $(selector).offset().top - floatMenuH + 1
						}, speed, function(){
							$("body").removeClass("is-scroll");
						});
					}
				}
			}
			return false;
		});

		$(window).on("debouncedresize", function() {
			$headerH = $header.height();
		});
		var top_threshold = $("#dl-menu").offset().top + $("#dl-menu").height();
		
		$(window).on("scroll", function() {

			var tempCSS = {},tempScrTop = $(window).scrollTop();
			scrDir = tempScrTop - scrTop;
			if (tempScrTop > threshold && isMoved === false) {
				if( !dtGlobals.isHovering ) {
					var s="0.5s";
					if($header.attr("data-sp")==0) s="0.4s";
					else if($header.attr("data-sp")==1) s="1s";
					else if($header.attr("data-sp")==2) s="2s";
					if($header.attr("data-st")=="1"){
						$phantom.css("animation-duration",s).addClass("showed_tb");
					}else{
						$phantom.css({"transition":"opacity "+s,"opacity": 1, "visibility": "visible"});
					}
					if($("#phantom").hasClass("bit-logo-menu")){
						if (dtGlobals.logoURL && dtGlobals.logoEnabled) {
							$header.find("#branding .logo img:first").attr("src",dtGlobals.logoURL);
						}
					}
					
					 if(jQuery("#header.newrightmenu,#header.newleftmenu").length>0){
						 if( jQuery("#dl-menu:visible").length==0 && (jQuery("body").height() -threshold - tempScrTop >jQuery(window).height() ) ){
							 	jQuery("#header").addClass("position-ab-fixed");
						 }
						 $phantom.find(".ph-wrap").remove();
					}else{
						$parent.css("min-height",$header.height()+"px");
						$header.appendTo($menuBox);
						$headerSlide.prependTo($phantom.find(".menu-info-box"));
						$header.removeClass($header.data('bit-menu')).addClass($header.data('bit-float-menu')).removeClass("bit-menu-default").addClass("bit-menu-float");
					}
					var infoclass = $headerSlide.attr("data-class");
					$phantom.find(".menu-info-box").addClass(infoclass);
			
					isMoved = true;
					//fancy-rollovers wf-mobile-hidden underline-hover bit-menu-float
					
					
					if($phantom.find("#main-nav").hasClass("position-ab-center")){
						var div1 = $phantom.find(".logo-box").width();
						if($phantom.find(".logo-box").css("padding-left")){
							div1 = div1*1 + $phantom.find(".logo-box").css("padding-left").replace("px","")*1
						}
						if($phantom.find(".logo-box").css("padding-right")){
							div1 = div1*1 + $phantom.find(".logo-box").css("padding-right").replace("px","")*1
						}
						var div2 = $phantom.find(".menu-info-box").width();
						$phantom.find(".menu-box").css("position","relative").css("left",(div2-div1)/2+"px");
					}
				}
			}
			else if (tempScrTop <= threshold && isMoved === true) {
				//act 
				jQuery("#phantom .mainmenu >.menu-item.onepage").removeClass("onepage");
				if($("#phantom").hasClass("bit-logo-menu")){
					if(old_img_str)
						$header.find("#branding .logo img:first").attr("src",old_img_str);
				}
				 if(jQuery("#header.newrightmenu,#header.newleftmenu").length>0){
					 jQuery("#header").removeClass("position-ab-fixed");
				}else{
					$header.appendTo($parent);
					$parent.css("min-height","auto");
					$header.removeClass($header.data('bit-float-menu')).addClass($header.data('bit-menu')).addClass("bit-menu-default").removeClass("bit-menu-float");
				}
				
				if($(".logo-classic-centered, .logo-center").length){
					if($(".mini-search").length ){
						$header.insertBefore(".mini-search");
					}
				}
				if($header.attr("data-st")=="1"){
					$phantom.removeClass("showed_tb");
				}else{
					$phantom.css({"opacity": 0, "visibility": "hidden"});
				}
				
				
				isMoved = false;
				
			};
			scrTop = $(window).scrollTop();
			
		});
	}
/*Floating menu:end*/
}

function _menu_link_event(hash){
	$ = jQuery;

	//处理主菜单
	var ishash = false;
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".mainmenu").each(function(){
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				var start = href.indexOf(hash);
				if(href.substr(start)==hash && ishash==false){
					ishash = true;
					var ul =  jQuery(this).closest(".mainmenu");
					ul.find(".act").removeClass("act");
					var currli = jQuery(this).closest("li");
					 currli.addClass("act");
					 currli.parents("li").addClass("act");
				}
			})
		})
		
	}else{
		$(".mainmenu .sub-nav .act").each(function(){
			var href = $(this).find(">a").attr("href");
			if(href.indexOf("#")>-1){
				$(this).removeClass("act");
			}
		})
		
	}

	//处理其他菜单
	
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0&& jQuery(hash).length>0 ){
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				var start = href.indexOf(hash);
				if(href.substr(start)==hash && ismenuhash==false){
					ismenuhash = true;
					var ul =  jQuery(this).closest("ul.menu");
					ul.find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
					var currli = jQuery(this).closest("li");
					 currli.addClass("current-menu-item");
					 currli.parents("li").addClass("current-menu-item");
				}
			})
		})

	}else{
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			$(this).find(">li.current-menu-item").each(function(i){
				if(i>0){
					$(this).removeClass("current-menu-item current-menu-ancestor");
					$(this).find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
				}
			});
		})
	}
	
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".tabcontent-inner>ul").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = $(this).attr("href");
				if(href){
					var start = href.indexOf(hash);
					if(href.substr(start)==hash && ismenuhash==false){
						ismenuhash = true;
						var ul =  jQuery(this).closest(".tabcontent-inner");
						ul.find(".active").removeClass("active");
						$(this).addClass("active");
					}
				}
			})
		})
	}
	
	
	
	
}
function mainmenu_event(){
	$ = jQuery;
	//custom menu
	
	$("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
		if($("#mobile-menu").hasClass("dropTopStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}

				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}
				
			}else if($("#mobile-menu").hasClass("dropCenterStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}	
				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

				
			}else if($("#header").hasClass("wf-mobile-hidden")){
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >"+menu_html+"</div>");
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else{
				//default
				if($("#mobile-menu").hasClass("positionFixed")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
					mobile_menu_fix();
				}

		}
	
	$(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
	$("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

	var $mainNav = $("#main-nav,.mini-nav");
	
	


	
	var	$mobileNav = $mainNav.clone();
	var	$mobileTopNav = $(".mini-nav").clone();
	var backCap = $("#mobile-menu > .menu-back").html();

	$mobileNav
		.attr("id", "")
		.attr("class", "dl-menu")
		.find(".sub-nav")
			.addClass("dl-submenu")
			.removeClass("sub-nav")
			.prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");
	

	$mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


	$("body").removeClass("mobilefloatmenu");
	$("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
	if($("#mobile-menu").hasClass("floatmenu") ||$("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")){
		$("body").addClass("mobilefloatmenu");
		var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
		$("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >"+menu_content+"</div>");
		var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
		$("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >"+menu_html+"</div>");
		
		if($("#mobile-menu").hasClass("fullfloatmenu")){
			$(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
		}else	if($("#mobile-menu").hasClass("leftbtnmenu")){
			$("body").addClass("mobileleftbtnmenu");
			$(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend( jQuery(".menu_displaynone").html() ).append( jQuery(".menu_displaynone_footer").html()  );
			if($("body >.dl-menu-film").length==0){
				$("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
			}
			if($("body >.dl-menu-fixedheader").length==0 && $(".leftbtnmenu #mobile-menu.displaynone").length==0){
				$("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
			}
			if(top!=self && jQuery("body").hasClass("compose-mode")){
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
						function() {
							parent.widgetHover(this,  jQuery("body"));
						})
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
					 parent.widgetFixEvent(this);
				})
			}
			jQuery("body").addClass("moble_menufixed");
			mobile_menu_fix_2();
			if ( jQuery(window).scrollTop()> jQuery(".dl-menu-fixedheader").height()) {
				jQuery(".dl-menu-fixedheader").css("position","fixed");
				jQuery("body").addClass("fixedheadering");
			}else{
				jQuery(".dl-menu-fixedheader").css("position","relative");
				jQuery("body").removeClass("fixedheadering");
			}
		}
		if($("#mobile-menu").hasClass("left")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
			$(".floatwarpper").addClass("left");
		}else if($("#mobile-menu").hasClass("right")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
			$(".floatwarpper").addClass("right");
		}else{
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
			$(".floatwarpper").addClass("center");
		}
		var padding = $("#mobile-menu").attr("data-padding");
		if(padding){
			$(".floatwarpper").css("padding-left",padding+"px").css("padding-right",padding+"px");
		}
		var element_right = $("#mobile-menu").attr("data-right");
		if(element_right){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("right",element_right+"px");
		}
		var element_top = $("#mobile-menu").attr("data-top");
		if(element_top){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("top",element_top+"px");
		}

	}
	
	if (!$("html").hasClass("old-ie")) $( "#dl-menu:not(.dl-qfymobile-menu)" ).dlmenu();
	
	var timeouthidden = new Array();
	$(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
		var $this = jQuery(this);
		
		
		jQuery(this).on("mouseenter", function(e) {
			
			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			var h = obj.children().height();
			var t = obj.attr("data-time");
			if(!obj.hasClass("ing") && !obj.hasClass("ed")){
				obj.stop().addClass("ing").removeClass("ending").css({"visibility":"visible","height": 0}).animate({"height": h}, t*1000,function(){
					jQuery(this).removeClass("ing").addClass("ed").css({"visibility":"visible"});
				});
			}

		}).on("mouseleave", function(e) {
			
			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			timeouthidden[i] = setTimeout(function(){
				if(obj.hasClass("ending") || obj.hasClass("ing") ) return;
				obj.addClass("ending").removeClass("ed").animate({"height": 0}, 500,function(){jQuery(this).removeClass("ending ed").css({"visibility":"hidden","height": 0});});
			},300);
		});
	});

	$(".sub-nav", $mainNav).parent().each(function() {
	var $this = $(this);
	if(dtGlobals.isMobile || dtGlobals.isWindowsPhone){
		$this.find("> a").on("click tap", function(e) {
			if (!$(this).hasClass("dt-clicked")) {
				e.preventDefault();
				$mainNav.find(".dt-clicked").removeClass("dt-clicked");
				$(this).addClass("dt-clicked");
			} else {
				e.stopPropagation();
			}

		});
	};

	var menuTimeoutShow,
		menuTimeoutHide;

	if($this.hasClass("dt-mega-menu")){
		
		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();

			var $this = jQuery(this);
			$this.addClass("dt-hovered");

			dtGlobals.isHovering = true;


			var $_this = jQuery(this),
				$_this_h = $this.height();

			var $_this_ofs_top = $this.position().top;
				$this.find("> .sub-nav").css({
					top: $_this_ofs_top+$_this_h
				});

			
			if($this.hasClass("mega-auto-width")){
				var $_this = $(this),
					$_this_sub = $_this.find(" > .sub-nav > li"),
					coll_width = $("#main .wf-wrap").width()/5,
					$_this_par_width = $_this.parent().width(),
					$_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

				$_this.find(" > .sub-nav").css({
					left: $_this_parents_ofs,
					"marginLeft": -($_this.find(" > .sub-nav").width()/2 - $_this.width()/2)
				});
			}
			if($this.is(':first-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
					"marginLeft": 0
				});
			}else if($this.is(':last-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: "auto",
					right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ( $this.position().left + $this.width() ),
					"marginLeft": 0
				});
			};

			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
				$this.children("ul").addClass("right-overflow");
			};
			if($this.position().left < ($this.children("ul").width()/2)) {
				$this.children("ul").addClass("left-overflow");
			}

			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutShow = setTimeout(function() {
				if($this.hasClass("dt-hovered")){
					$this.find("ul").stop().css("visibility", "visible").animate({
						"opacity": 1
					}, 150);
				}
			}, 100);
		});

		$this.on("mouseleave", function(e) {
			var $this = $(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutHide = setTimeout(function() {
				if(!$this.hasClass("dt-hovered")){
					$this.children("ul").stop().animate({
						"opacity": 0
					}, 150, function() {
						$(this).css("visibility", "hidden");

						$(this).find("ul").stop().css("visibility", "hidden").animate({
							"opacity": 0
						}, 10);
					});
					
					setTimeout(function() {
						if(!$this.hasClass("dt-hovered")){
							$this.children("ul").removeClass("right-overflow");
							$this.children("ul").removeClass("left-overflow");
						}
					}, 400);
					
				}
			}, 150);

			$this.find("> a").removeClass("dt-clicked");
		});
	}else{
	
		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();
			
			var $this = jQuery(this);
			$this.addClass("dt-hovered");
			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
			//if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
				$this.children("ul").addClass("right-overflow");
			}
			dtGlobals.isHovering = true;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0){
				menuTimeoutShow = setTimeout(function() {
					if($this.hasClass("dt-hovered")){
						if($this.closest("#main-nav").attr("data-sliderdown")){
							var h = $this.children('ul').height();
							$this.children('ul').stop().css({"visibility":"visible","opacity":"1","overflow":"hidden","max-height":"0"}).animate({
								"max-height": h
							}, 300,function(){
								jQuery(this).css({"overflow":"inherit"})
							});
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
						}else{
							$this.children('ul').stop().css("visibility", "visible").animate({
								"opacity": 1
							}, 150);
						}
						
						
					}
				}, 100);
			}
		});

		$this.on("mouseleave", function(e) {
			var $this = jQuery(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0 ){
				menuTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("dt-hovered")){
						
						if($this.closest("#main-nav").attr("data-sliderdown")){
							$this.children("ul").stop().removeAttr("style");
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children("ul").stop().removeAttr("style");
						}else{
							$this.children("ul").stop().animate({
								"opacity": 0
							}, 150, function() {
								$(this).css("visibility", "hidden");
							});
							
						}
						
						setTimeout(function() {
							if(!$this.hasClass("dt-hovered")){
								$this.children("ul").removeClass("right-overflow");
							}
						}, 400);
					}
				}, 150);
			}

			$this.find("> a").removeClass("dt-clicked");
		});
	};

});

/* Main navigation: end */

}
function floatmenucontrols_mouseenter(){
	 if(typeof(parent.floatmenucontrols_mouseenter)=="function"){
			parent.floatmenucontrols_mouseenter();
	 }
}
function floatmenucontrols_mouseout(){
	 if(typeof(parent.floatmenucontrols_mouseout)=="function"){
			parent.floatmenucontrols_mouseout();
	 }
}

function base64_encode(str)
{
    var str = toUTF8(str);
    var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    var out, i, j, len, r, l, c;
    i = j = 0;
    len = str.length;
    r = len % 3;
    len = len - r;
    l = (len / 3) << 2;
    if (r > 0) {
        l += 4;
    }
    out = new Array(l);
 
    while (i < len) {
        c = str.charCodeAt(i++) << 16 |
            str.charCodeAt(i++) << 8  |
            str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 18]
            + base64EncodeChars[c >> 12 & 0x3f]
            + base64EncodeChars[c >> 6  & 0x3f]
            + base64EncodeChars[c & 0x3f] ;
    }
    if (r == 1) {
        c = str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 2]
            + base64EncodeChars[(c & 0x03) << 4]
            + "==";
        }
    else if (r == 2) {
        c = str.charCodeAt(i++) << 8 |
            str.charCodeAt(i++);
        out[j++] = base64EncodeChars[c >> 10]
             + base64EncodeChars[c >> 4 & 0x3f]
             + base64EncodeChars[(c & 0x0f) << 2]
             + "=";
    }
    return out.join('');
}
function base64_decode(str)
{
    var base64DecodeChars = [
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
            52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
            -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
            -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
        ];
    var c1, c2, c3, c4;
    var i, j, len, r, l, out;
 
    len = str.length;
    if (len % 4 != 0) {
        return '';
    }
    if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)) {
        return '';
    }
    if (str.charAt(len - 2) == '=') {
        r = 1;
    }
    else if (str.charAt(len - 1) == '=') {
        r = 2;
    }
    else {
        r = 0;
    }
    l = len;
    if (r > 0) {
        l -= 4;
    }
    l = (l >> 2) * 3 + r;
    out = new Array(l);
 
    i = j = 0;
    while (i < len) {
        // c1
        c1 = base64DecodeChars[str.charCodeAt(i++)];
        if (c1 == -1) break;
 
        // c2
        c2 = base64DecodeChars[str.charCodeAt(i++)];
        if (c2 == -1) break;
 
        out[j++] = String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
 
        // c3
        c3 = base64DecodeChars[str.charCodeAt(i++)];
        if (c3 == -1) break;
 
        out[j++] = String.fromCharCode(((c2 & 0x0f) << 4) | ((c3 & 0x3c) >> 2));
 
        // c4
        c4 = base64DecodeChars[str.charCodeAt(i++)];
        if (c4 == -1) break;
 
        out[j++] = String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return toUTF16(out.join(''));
}
function toUTF8(str)
{
    if (str.match(/^[\x00-\x7f]*$/) != null) {
        return str.toString();
    }
    var out, i, j, len, c, c2;
    out = [];
    len = str.length;
    for (i = 0, j = 0; i < len; i++, j++) {
        c = str.charCodeAt(i);
        if (c <= 0x7f) {
            out[j] = str.charAt(i);
        }
        else if (c <= 0x7ff) {
            out[j] = String.fromCharCode(0xc0 | (c >>> 6),
                                         0x80 | (c & 0x3f));
        }
        else if (c < 0xd800 || c > 0xdfff) {
            out[j] = String.fromCharCode(0xe0 | (c >>> 12),
                                         0x80 | ((c >>> 6) & 0x3f),
                                         0x80 | (c & 0x3f));
        }
        else {
            if (++i < len) {
                c2 = str.charCodeAt(i);
                if (c <= 0xdbff && 0xdc00 <= c2 && c2 <= 0xdfff) {
                    c = ((c & 0x03ff) << 10 | (c2 & 0x03ff)) + 0x010000;
                    if (0x010000 <= c && c <= 0x10ffff) {
                        out[j] = String.fromCharCode(0xf0 | ((c >>> 18) & 0x3f),
                                                     0x80 | ((c >>> 12) & 0x3f),
                                                     0x80 | ((c >>> 6) & 0x3f),
                                                     0x80 | (c & 0x3f));
                    }
                    else {
                       out[j] = '?';
                    }
                }
                else {
                    i--;
                    out[j] = '?';
                }
            }
            else {
                i--;
                out[j] = '?';
            }
        }
    }
    return out.join('');
}
function toUTF16(str)
{
    if ((str.match(/^[\x00-\x7f]*$/) != null) ||
        (str.match(/^[\x00-\xff]*$/) == null)) {
        return str.toString();
    }
    var out, i, j, len, c, c2, c3, c4, s;
 
    out = [];
    len = str.length;
    i = j = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
            // 0xxx xxxx
            out[j++] = str.charAt(i - 1);
            break;
            case 12: case 13:
            // 110x xxxx   10xx xxxx
            c2 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x1f) << 6) |
                                            (c2 & 0x3f));
            break;
            case 14:
            // 1110 xxxx  10xx xxxx  10xx xxxx
            c2 = str.charCodeAt(i++);
            c3 = str.charCodeAt(i++);
            out[j++] = String.fromCharCode(((c  & 0x0f) << 12) |
                                           ((c2 & 0x3f) <<  6) |
                                            (c3 & 0x3f));
            break;
            case 15:
            switch (c & 0xf) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 1111 0xxx  10xx xxxx  10xx xxxx  10xx xxxx
                c2 = str.charCodeAt(i++);
                c3 = str.charCodeAt(i++);
                c4 = str.charCodeAt(i++);
                s = ((c  & 0x07) << 18) |
                    ((c2 & 0x3f) << 12) |
                    ((c3 & 0x3f) <<  6) |
                     (c4 & 0x3f) - 0x10000;
                if (0 <= s && s <= 0xfffff) {
                    out[j++] = String.fromCharCode(((s >>> 10) & 0x03ff) | 0xd800,
                                                  (s         & 0x03ff) | 0xdc00);
                }
                else {
                    out[j++] = '?';
                }
                break;
                case 8: case 9: case 10: case 11:
                // 1111 10xx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=4;
                out[j++] = '?';
                break;
                case 12: case 13:
                // 1111 110x  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx  10xx xxxx
                i+=5;
                out[j++] = '?';
                break;
            }
        }
    }
    return out.join('');
}

function weiBoAndWeiXinToolTip(){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	 var objs = jQuery(".soc-ico .weixin");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/"+name+"'  width='160'/><div>请扫二维码关注微信</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
	var objs = jQuery(".soc-ico .weibo");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/"+name+"' width='160' /><div>请扫二维码关注微博</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
}
function toolTip(objs){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 if(typeof(objs)=="undefined"){
		objs = jQuery("[data-tooltip='on']");
	 }
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	objs.each(function(){
		var obj = jQuery(this);
		var title = jQuery(this).attr("data-original-title");
		if(!title) title="";
		var image = jQuery(this).attr("data-original-image");
		var imagewidth = jQuery(this).attr("data-original-imagewidth");
		var imageheight = jQuery(this).attr("data-original-imageheight");
		if(image){
			if(!imagewidth)	imagewidth=150;
			if(!imageheight) imageheight=150;
			title = "<div>"+title+"</div>"+"<img src='"+image+"'  style='width:"+imagewidth+"px;height:"+imageheight+"px'/>";
		}
		var cate =  jQuery(this).attr("data-tooltip-cate");
		var data ="";
		if(cate==1){
			data = { tipJoint: "bottom"};
		}else if(cate==2){
			data = { tipJoint: "bottom",style: "alert"};
		}else if(cate==3){
			data = { tipJoint: "bottom",style: "dark" };
		}else if(cate==4){
			data = { tipJoint: "bottom",style: "glass" };
		}else if(cate==5){
			data = { tipJoint: "bottom right",style: "dark"};
		}else if(cate==6){
			data = { tipJoint: "bottom left",style: "dark" };
		}else if(cate==7){
			data = { tipJoint: "top right",style: "dark" };
		}else if(cate==8){
			data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
		}else if(cate==9){
			data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
		}else if(cate==10){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
		}else if(cate==11){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
		}else if(cate==12){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
		}
		if(data!=""){
			new Opentip(obj, title, data);
		}
	})
}
function toVisit(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	
	var post_id = p.attr("data-postid");
	var pt = p.find('[data-title="true"]');
	var title = "";
	if(pt.length>0){
		var title =jQuery.trim(pt.text());
	}
	jConfirm("确认是否离开当前页面，访问页面【"+title+"】？",function(){
				top.$('#pageUrl').val(post_id).change();
	});

}
function toEditor(obj,e){
	if(e){
		 e.preventDefault();
		 e.stopPropagation();
	}
	parent.toEditor(obj);
}
function toCopy(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var post_id = p.attr("data-postid");
	parent.bitSettingsEdit(post_id, "复制一个页面", "copyPage","COPY");
}
function toDelete(obj){
	parent.toDelete(obj);
}
function toEditProduct(obj){
	parent.toEditProduct(obj);
	return false;
}
function toRedirectProduct(obj){
	parent.toRedirectProduct(obj);
	return false;
}
function toDeleteCate(obj){
	parent.toDeleteCate(obj);
}
function pageNav(paged){
	var obj =top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(url.indexOf("paged")>-1){
		var tmp = url.split("&paged");
		url = tmp[0]+"&paged="+paged;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&paged="+paged;
		}else{
			url = url+"?paged="+paged;
		}
	}
	obj.attr("src",url);
}
function pageCate(page_id,cate_id){
	var obj = top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(cate_id==0) cate_id="";
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&categories="+cate_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&categories="+cate_id;
		}else{
			url = url+"?post_id="+page_id+"&categories="+cate_id;
		}
		
	}
	
	jConfirm("确认是否需要打开该分类列表页面？",function(){
		obj.attr("src",url);
	});

	return false;
}
function searchResult(p){
	var action = jQuery(p).attr("action");
	var search = jQuery(p).find("[name='search']").val();
	var page_id = jQuery(p).find("[name='page_id']").val();
	var searchtype = jQuery(p).find("[name='searchtype']").val();
	var ep_search = jQuery(p).find("[name='ep_search']").val();
	var qfyuuid = jQuery(p).find("[name='qfyuuid']").val();
	var ep_relevancy = jQuery(p).find("[name='ep_relevancy']").val();
	
	//if(search=="") return false;
	var obj = top.jQuery("#site-content-iframe");
	if(obj.length>0){
		var url  = obj.attr("src");
		if(url.indexOf("post_id")>-1){
			var tmp = url.split("&post_id");
			url = tmp[0]+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
		}else{
			if(url.indexOf("?")>-1){
				url = url+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}else{
				url = url+"?post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}
		}
		
		if(ep_search && qfyuuid){
			url = url+"&ep_search=1&qfyuuid"+qfyuuid;
			if(ep_relevancy){
				url = url+"&ep_relevancy=1";
			}
		}
		
		obj.attr("src",url);
		return false;
	}
}


function cart_button_warning(){
	jAlert("编辑情况下，无法使用购物车功能。如果修改商城默认页面，你可以从左上角选择功能页面进行编辑");
}
function toorderview(id){
	id = id.replace("#","");
	var obj = top.jQuery("#site-content-iframe");
	var page_id = top.jQuery("#pageUrl").val();
	var  url=obj.attr("src");	
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&view-order="+id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&view-order="+id;
		}else{
			url = url+"?post_id="+page_id+"&view-order="+id;
		}
	}
	

	obj.attr("src",url);
}

function toorderpage(page_id){
	
	var obj = top.jQuery("#site-content-iframe");
	var  url=obj.attr("src");	
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id;
		}else{
			url = url+"?post_id="+page_id;
		}
	}
	obj.attr("src",url);
}


function jConfirm(msg,yes,no,title){
	if(top!=self){
		top.jConfirm(msg,yes,no,title);
	}
}

function jAlert(msg,title){
	if(!is_edit_model){
		alert(msg);
	}else{
		top.jAlert(msg,title);
	}
}

function setCookie(cname, cvalue,exdays)		//cookies设置
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function getQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = location.search.substr(1).match(reg);  
    if (r != null) return unescape(decodeURI(r[2])); return null;  
}  
function tobigimage(obj){
	var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
	var height = bigimage.find("img").height();
	var src = jQuery(obj).find("img").attr("src");
	jQuery(obj).parents(".qfy_imgList").find("img").css("border","0");
	jQuery(obj).find("img").css("border","2px solid #f63");
	src = src.replace("-150x150","");
	bigimage.find("img").attr("src",src).height(height);
}
function slideLine(box,stf,delay,speed,h){
	
	if(jQuery("#"+box+" div").length ==0){
		return false;
	}

	var slideBox = document.getElementById(box);
	var delay = delay||1000,speed = speed||20,h = h||20;
	var tid = null,pause = false;
	var s = function(){tid=setInterval(slide, speed);}
	var slide = function(){
	if(pause) return;
	slideBox.scrollTop += 1;
	if(slideBox.scrollTop%h == 0){
		clearInterval(tid);
		slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
		slideBox.scrollTop = 0;
		setTimeout(s, delay);
		}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(s, delay);
}

function vc_gallery_relat(){
	jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function(){
		var img = jQuery(this);
		var src = img.attr("src");
		img.css("cursor","pointer");
		src = src.replace(/-[\d]*x[\d]*/g,"");
		img.unbind("click").bind("click",function(){
			jQuery(".qfe_gallery.rela_other .slides").each(function(){
				var obj = jQuery(this);
				var index = 0;
				obj.find("img").each(function(){
					var toimg = jQuery(this);
					var tosrc = toimg.attr("src");
					tosrc = tosrc.replace(/-[\d]*x[\d]*/g,"");
					var p = toimg.closest("li");
					
					if(!p.hasClass("clone")){
						index++;
					}
					
					if(!p.hasClass("clone") && src == tosrc){
						p.siblings().removeClass("flex-active-slide");
						
						p.addClass("flex-active-slide");
						var width = p.width();
						
						p.parent().css("-webkit-transition-duration","0.6s");
						p.parent().css("transition-duration","0.6s");
						p.parent().css("-webkit-transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						p.parent().css("transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						
						return;
					}
				})
			})	
						
		})
	});
}
function qfbookformSubmit(obj){
	if(!is_edit_model){
		var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
		var url = p.attr("action");
		var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
		var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
		if(url.indexOf("?")>-1){
			location.href = url+"&QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}else{
			location.href = url+"?QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}
		
	}
}
function entersearchqfylist(){
	 var event = window.event || arguments.callee.caller.arguments[0];
     if (event.keyCode == 13)
     {
    	 jQuery(".qfytemplateslist .itemli" ).removeClass("active");
    	 jQuery(".qfytemplateslist .itemli.all-0" ).addClass("active");
		 var tag = "all-0";
    	 searchqfylist(tag,1);
     }
}

function qfytemplate_hover(){
		jQuery('.qfy-template-content .qfy_template_lib a').hover(function() {
			var img = $(this).find('img');
			var imgh = img.height();
			var ph =  img.parent().height();
			if(imgh>ph && imgh>300){
				img.css("transform","translateY(-"+(imgh-ph)+"px)");
				img.css("transition","all 5.5s linear 0s");
			}
		}, function() {
			var img = $(this).find('img');
			img.css("transform","translateY(0px)");
			img.css("transition","all 2s linear 0s");
		});
	
}
function template_add_points($this,points){
	if(location.host=="www.qifeiye.com" || location.host=="0000007.localhost.com"){
		var t_id = jQuery($this).closest(".vc-item").attr("data-id");
		if(t_id){
			jQuery.post("/admin/admin-ajax.php",{"action":"template_points","template":t_id,"points":points});
		}
	}
}
function searchqfylist(tag,paged,flag){
	if(!is_edit_model){
		var searchText = jQuery(".qfytemplateslist #form_search").val();
		if(jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').length>0){
			return;
		}
		//jQuery('.qfytemplateslist .qfy-template-content').block({ message: '<img src="http://fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif" />',css: { backgroundColor: 'transparent',borderColor: 'transparent', margin:"0 0 0 -35px",left:"50%",width:'70px',height:'32px',padding:"8px 0 9px 0"},overlayCSS:{backgroundColor:"#F2F2F2",opacity:"0.9",} });
		jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').hide();
		jQuery('.qfytemplateslist .viewmoretemplate').append("<div class='loadingimage' style='text-align:center;margin:50px auto;'><img style='vertical-align: middle;width:30px;' src='//fast.qifeiye.com/FeiEditor/bitSite/images/preloader.gif' /><span style='color:#0088c2;margin-left:10px;'>正在自动加载更多模板...</span></div>");
		
		var url = jQuery(".qfytemplateslist").attr("data-url");
		var type=  jQuery(".qfytemplateslist").attr("data-type");

		jQuery.post("/admin/admin-ajax.php",{"action":"getqfytemplatelist","type":type,"url":url,"paged":paged,"searchText":searchText,"tag":jQuery(".qfytemplateslist .itemli.active").attr("data-tag")},function(data){
			jQuery('.qfy_template_lib .viewmoretemplate').waypoint('destroy');
			jQuery('.qfytemplateslist .viewmoretemplate .viewmoretemplate_inner').show();
			jQuery('.qfytemplateslist .viewmoretemplate .loadingimage').remove();
			if(data){
				if(flag=="append"){
					jQuery('.qfytemplateslist .qfy-template-content-inner').append(data);
					jQuery('.qfytemplateslist .viewmoretemplate:first').remove();
				}else{
					jQuery('.qfytemplateslist .qfy-template-content-inner').html(data);
					
				}
				if(jQuery(".qfytemplateslist.zh_tw_lang").length>0){
					StranBody(jQuery(".qfytemplateslist.zh_tw_lang")[0]);
				}
				jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
					var newurl = jQuery(this).attr("data-src");
					var $this = jQuery(this);
					jQuery('<img src="'+newurl+'">').load(function(){
						$this.attr("src",newurl);
					})
				})
				jQuery(".qfytemplateslist  .info").unbind().click(function(){
					var url = jQuery(this).attr("data-url");
					var select_url = jQuery(this).next().attr("data-url");
					if(!is_edit_model){
						template_add_points(this,3);
						if(type=="mini"){
							window.open(url+"/FeiEditor/preview");
						}else{
							qfy_template_preiview_fun(url,select_url);
						}
					}
				})
				jQuery(".qfytemplateslist  .img_inner").unbind().mouseenter(function(){
					var $this = this;
					template_mouse_timeout = setTimeout(function(){

						template_add_points($this,1);
					},3000);
				}).mouseleave(function(){
					clearTimeout(template_mouse_timeout);
				})
				jQuery(".qfytemplateslist  .use").unbind().click(function(){
					var url = jQuery(this).attr("data-url");
					if(!is_edit_model){
						if(type=="mini"){
							location.href = url+"/mini";
						}else {
							location.href = url;
						}
					}
				})
				jQuery(".qfytemplateslist .viewmoretemplate_inner").unbind().click(function(){
					var tag = "all-0";
					if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
						tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
					}
					var paged = jQuery(this).attr("data-page");
					searchqfylist(tag,paged*1+1,'append');
				})
				qfytemplate_hover();
				
				jQuery(".qfy_template_lib .viewmoretemplate").unbind().waypoint({
					handler: function(direction) {
						if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
							jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
						}
					
					},
					triggerOnce: true,
					offset: "90%",
				})
			}
		});
	}
}

function parallax_scroll_fun(){
	var old_current_url = window.location.href;
	jQuery("#parallax-nav a").each(function(i){
		var $this = this;
		var obj = jQuery.attr(this, 'href');
		var orgcolor = jQuery("#parallax-nav ul").attr("data-orgcolor");
		if(jQuery("#parallax-nav.mouseEvent").length==0){
			jQuery(obj).waypoint({
				handler: function() {
					if(!jQuery($this).hasClass("active") && isqfyscrolling==false ){
					
						jQuery($this).parent().siblings().removeClass("active");
						jQuery($this).parent().addClass("active");
						jQuery("#parallax-nav li  a").removeAttr("style");
						if(!is_edit_model){
							  var current_url = window.location.href;
							  var tmpurl = current_url.split("#");
							  try {
						        	 window.history.pushState({
						                path: window.location.href
						            }, '', tmpurl[0]+jQuery($this).attr("href"));
						        } catch(e) {
						            console.error('history.pushState failed, maybe HTML5 is not supported?')
						        }
						  }
						
						
						if(jQuery("#parallax-nav").hasClass("color-weight-dark")){
							
							var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
							if(!bordercolor){
								bordercolor = orgcolor;
							}
							jQuery("#parallax-nav li a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
							jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color",bordercolor).css("color",bordercolor);
							
						}else{
							var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
							if(!bordercolor){
								bordercolor = orgcolor;
							}
							jQuery("#parallax-nav li a").css("border-color","transparent").css("background-color",bordercolor).css("color",bordercolor);
							jQuery("#parallax-nav li.active a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
						}
					}
				},
				/*horizontal:true,*/
				triggerOnce: false
			})
		}
		jQuery($this).parent().click(function(e) {
			e.preventDefault();
			qfyToscroll($this);
			return false;
		});
		
	})

	if(old_current_url.indexOf("#")<0){
		jQuery("#parallax-nav li:first:visible").click();
	}
	
	if(jQuery("#parallax-nav.mouseEvent").length>0){
		
		var qfyscrollFunc=function(e){ 
			if(e){
				 //e.preventDefault();
				 e.stopPropagation();
			}
			if( (e.wheelDelta && e.wheelDelta>0 ) || (e.detail && e.detail<0 )){
				//上
				var thisobj = jQuery("#parallax-nav.mouseEvent .active").prev().find("a");
				if(thisobj.length>0){
					qfyToscroll(thisobj)
					return false;
				}
				
			}else{
				
				var thisobj = jQuery("#parallax-nav.mouseEvent .active").next().find("a");
				if(thisobj.length>0){
					qfyToscroll(thisobj);
					return false;
				}
				
			}
		}  
		if(document.addEventListener){ 
			document.addEventListener('DOMMouseScroll',qfyscrollFunc,false); 
		}//W3C 
		window.onmousewheel=document.onmousewheel=qfyscrollFunc;

	}
	
}

var isqfyscrolling =false;
function qfyToscroll(thisobj){
		if(isqfyscrolling){
			return;
		}
		isqfyscrolling = true;
		var obj = jQuery(thisobj).attr('href');
		jQuery(thisobj).parent().siblings().removeClass("active");
		jQuery(thisobj).parent().addClass("active");
		var orgcolor = jQuery(thisobj).closest("ul").attr("data-orgcolor");
		jQuery("#parallax-nav li  a").removeAttr("style");
		if(jQuery("#parallax-nav").hasClass("color-weight-dark")){
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("border-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color",bordercolor).css("color",bordercolor);
			
		
		}else{
			if(orgcolor){
				jQuery("#parallax-nav li  a").css("background-color",orgcolor).css("color",orgcolor);
			}
			var bordercolor = jQuery("#parallax-nav li.active a").attr("data-color");
			if(!bordercolor){
				bordercolor = orgcolor;
			}
			jQuery("#parallax-nav li a").css("border-color","transparent").css("background-color",bordercolor).css("color",bordercolor);
			jQuery("#parallax-nav .active a").css("border-color",bordercolor).css("background-color","transparent").css("color",bordercolor);
		}

		var speed = 'normal';
		speed = 1000;
		if(jQuery("#parallax-nav").hasClass("speedquick")){
			speed = speed*0.75;
		}else if(jQuery("#parallax-nav").hasClass("speedslow")){
			speed = speed*1.5;
		}
		if(obj=="#"||obj=="#header"){
			jQuery("html, body").animate({ scrollTop: 0 }, speed,function(){isqfyscrolling=false;
				  if(!is_edit_model){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }
			});
		}else{
			if(jQuery( jQuery(thisobj).attr('href') ).length>0){
				jQuery("html, body").animate({ scrollTop: jQuery( jQuery(thisobj).attr('href') ).offset().top }, speed,'easeInOutExpo',function(){isqfyscrolling=false;
				   if(!is_edit_model){
					  var current_url = window.location.href;
					  var tmpurl = current_url.split("#");
					  var tmpobj = jQuery(thisobj).attr('href');
					  try {
				        	 window.history.pushState({
				                path: window.location.href
				            }, '', tmpurl[0]+tmpobj);
				        } catch(e) {
				            console.error('history.pushState failed, maybe HTML5 is not supported?')
				        }
				  }
				
				});
			}else{
				isqfyscrolling=false;
			}
		}
}

function checkAdvertising(){
	var uuid = dtGlobals.id;
	var href = 'http://www.qifeiye.com?tcode=freesite&uuid='+uuid;
	if(dtGlobals.qfymodel){ href="#";}
	var jAdObj = jQuery(".qfy_advertising");

	var style = 'display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;';
	var content = 'BY 起飞页自助建站';
	if(jAdObj.length==0){
		var tmphtml= '<a class="wf-mobile-hidden qfy_advertising" target=_blank style="'+style+'"  rel="external nofollow" href="'+href+'" >'+content+'</a>';
		jQuery("#page").append(tmphtml);
	}
	
	var opacity = jAdObj.css("opacity");

	if(opacity!="1"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("position")!="fixed"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("bottom")!="40px"){
		jAdObj.attr("style",style);
	}
	if(jAdObj.css("left")!="0px"){
		jAdObj.attr("style",style);
	}
	var bgcolor = jAdObj.css("background-color");
	if(bgcolor!="#000000" && bgcolor!='rgb(0, 0, 0)'){
		jAdObj.attr("style",style);
	}
	var color = jAdObj.css("color");
	if(color!="#ffffff" &&  color!="rgb(255, 255, 255)"){
		jAdObj.attr("style",style);
	}
	var marginLeft = jAdObj.css("margin-left");
	if(marginLeft!="0px"){
		jAdObj.attr("style",style);
	}
	var marginTop = jAdObj.css("margin-top");
	if(marginTop!="0px"){
		jAdObj.attr("style",style);
	}
	var zindex = jAdObj.css("z-index");
	if(zindex!="2147483647"){
		jAdObj.attr("style",style);
	}
	var width = jAdObj.css("width");
	if(width!="116px"){
		jAdObj.attr("style",style);
	}
	var height = jAdObj.css("height");
	if(height!="20px"){
		jAdObj.attr("style",style);
	}
	var transform = jAdObj.css("transform");
	if(transform!="none"){
		jAdObj.attr("style",style);
	}
	var visible =  jAdObj.css("visibility");
	if(visible!="visible"){
		jAdObj.attr("style",style);
	}
	var display = jAdObj.css("display");
	if(display!="block"&& jQuery("body").width()>760){
		jAdObj.attr("style",style);
	}
	if(jAdObj.attr("href")!=href){
		jAdObj.attr("href",href);
	}
	if(jAdObj.html()!=content){
		jAdObj.html(content);
	}
	//检查预览下是否在iframe
	if(top!=self ){		
		try{
			//不同host
			if(top.window.location.host!=window.location.host){
				location.href = "http://www.qifeiye.com";
			}
		}catch(e){
			//跨域啦
			location.href = "http://www.qifeiye.com";
		}
	}
	
	
	
	jQuery("#footer_band").hide();
	
}
function clickscode(obj){
	jQuery(obj).attr('src','/api/scode.php'+'?'+Math.random());
}

function nav_pagemore(obj){
	if(jQuery(obj).hasClass("vc")){
		jAlert("编辑情况下，无法点击，请在预览情况下使用！");
		return;
	}
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	if(jQuery(obj).hasClass("notmore")){
		return ;
	}
	var type=0;
	if(jQuery(obj).parent().hasClass("bitcommerce-pagination")){
		var p = jQuery(obj).closest(".bitcommerce").parent();
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] ul.products>div";
		var childClass = "ul.products>div";
	}else if(jQuery(obj).closest(".qfy_images_list").length>0){
		var p = jQuery(obj).closest(".qfy_images_list");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_list";
		var childClass = ".qfe_images_list";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".qfe_images_lib").length>0){
		var p = jQuery(obj).closest(".qfe_images_lib");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_lib_isotope";
		var childClass = ".qfe_images_lib_isotope";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".advanced_list").length>0){
		var p = jQuery(obj).closest(".advanced_list");
		var id = p.attr("qfyuuid");
		if(p.find(".vc-carousel-slideline-inner:visible").length>0){
		    var luClass = "[qfyuuid='"+id+"'] .vc-carousel-slideline-inner ";
		    var childClass = ".vc-carousel-slideline-inner";
		}else{
			var luClass = "[qfyuuid='"+id+"'] .qfe_wrapper ";
			var childClass = ".qfe_wrapper";
		}
		type = 0;
		if(p.find(".list-style7").length>0){
			type = 1;
		}
	}else{
		var p = jQuery(obj).closest(".qfe_teaser_grid");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
		var childClass = "ul.qfe_thumbnails";
	}
	
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	var list_id = p.find(".qfe_teaser_grid.qfe_content_element").attr("id");
	
	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	if(url.indexOf("?")>-1){
		url = url+"&isappend=1";
	}else{
		url = url+"?isappend=1";
	}
	var loadtext = jQuery(obj).attr("data-loadtext");
	var old_html = jQuery(obj).find("a").html();
	jQuery(obj).hide();
	if(typeof global_image_loading!="undefined"){

		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;'+loadtext+'</span></div>');

	}

	jQuery.get(url,function(data){
		if(list_id){
			var nowlistobj =jQuery(data).find("#"+list_id+" ul.qfe_thumbnails");
		}else{
			var nowlistobj =jQuery(data).find(luClass);
		}


		var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

		var style = nowlistobj.find(">li").attr("style");
		p.find(childClass).append(nowlistobj.html());


		if(p.hasClass("noanimale")  || p.find(".noanimale").length>0) {
			p.find(childClass).height("auto");
			p.find(childClass+">li:not(.mobile_list_inner)").attr("style",style).css("transform","none").css("top","auto").css("position","relative");
		}
		jQuery(obj).show();
		//jQuery("html, body").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");

		var curr_postion = p.find("div.qfy_list_loading").offset().top+100;
		var curr_height = p.height();
		p.find("div.qfy_list_loading").remove();
		if(type=="1"){
			jQuery(obj).remove();
		}

		if(pagemore.length>0){
			jQuery(obj).attr("data-url",pagemore.attr("data-url"));
			jQuery(obj).attr("style",pagemore.attr("style"));
		}else{
			jQuery(obj).remove();
			p.find(".has_no_more").show();
		}
		
		if(p.find(".categories_filter").length>0){
			p.find(".categories_filter a[data-filter='*']").click();
		}
		
		if(p.attr("data-open")=="1")
			changelistlinkfun(p);
		p.find('div.divmiddle').each(function(){
			var pimage = jQuery(this).closest(".images");
			if(pimage.find("img").length>0){
				var $this = this;
				jQuery('<img src="'+pimage.find("img").attr("src")+'">').load(function(){
						var h = jQuery($this).height();
						if(h>0){
							jQuery($this).css("margin-top","-"+(h/2)+"px");
						}
				})
			
			}else{
				var h = jQuery(this).height();
				if(h>0){
					jQuery(this).css("margin-top","-"+(h/2)+"px");
				}
			}

			
		})
		vc_js_init();
		tranlanguage(p);
		
		list_more_waypoint();

		if(!p.hasClass("noanimale") && p.find(".isotope-item").length>0 && p.find(".noanimale").length==0) {
			p.find(childClass).isotope( 'reloadItems' ).isotope();
		}


		if(p.find(".qfe_gallery_slides.qfe_flexslider").length>0){
			vc_plugin_flexslider();
		}
		
	})
}

function bindqfylist(obj,curr){
	jQuery("body").addClass("doing");
	var c = jQuery(obj);
	
	jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline","10px solid #FF6600").css("cursor","cursor").css("opacity","0.6");
	jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist").bind("click.bindqfylist",function(e){
		var item = $(e.currentTarget);
		
		jQuery("body").removeClass("doing");
		var list =   item.closest(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist");
		var val = list.attr("qfyuuid");
		var post_type =  list.attr("data-post");
		var post_cate =  list.attr("data-cate");

		//能添加uuid，则添加uuid
		if(list.parent().attr("data-model-id") && post_type!="page" && (!val || val==0 || val=="") ){
			var listmodel_id = list.parent().attr("data-model-id");
			var listmodel =  parent.vc.shortcodes.get(listmodel_id);
			var listparams = listmodel.get('params');
			listparams.qfyuuid = "qfy_posts_grid_"+parent.vc.ShortcodesBuilder.randomString();
			listmodel.save({params: listparams}, {silent: true});
			val = listparams.qfyuuid;
			list.attr("qfyuuid",val);
		}
		var pageid=0;
		if(top.jQuery("#pageUrl").length>0){
			pageid = top.jQuery("#pageUrl").val();
		}

		if(val && val!=0 && val!="" && post_type!="page"){
			top.jAlert("你已经成功绑定了列表");
			if(c.closest(".vc-element").attr("data-model-id")){
				var model_id = c.closest(".vc-element").attr("data-model-id");
				var model =  parent.vc.shortcodes.get(model_id);
				var params = model.get('params');
				var tag = model.get("shortcode");
				if(tag=="product_navigation" || tag=="vc_custom_search"){
					params.touuid = val;
					post_type = "product";
				}else{
					params.cate_to_listuuid = val;
					params.cate_type = post_type;
				}
				
				if(post_cate!=""){
					if(post_type=="products"){
						params.cate_products_selected_id = post_cate;
					}else if(post_type=="product"){
						params.cate_product_selected_id = post_cate;
					}else if(post_type=="image"){
						params.cate_image_selected_id = post_cate;
					}else if(post_type=="video"){
						params.cate_video_selected_id = post_cate;
					}else if(post_type=="yunvideo"){
						params.cate_yunvideo_selected_id = post_cate;
					}else{
						params.cate_post_selected_id = post_cate;
					}
				}
				if(curr && curr.length>0){ 
					if(tag=="product_navigation" || tag=="vc_custom_search"){
						curr.find("[name='touuid']").val(val);
					}else{
						curr.find("[name='cate_to_listuuid']").val(val);
						curr.find("[name='cate_type']").val(post_type).change();
					}
					if(post_cate!=""){
						if(post_type=="products"){
							curr.find("[name='cate_products_selected_id']").val(post_cate)
						}else if(post_type=="product"){
							curr.find("[name='cate_product_selected_id']").val(post_cate)
						}else if(post_type=="image"){
							curr.find("[name='cate_image_selected_id']").val(post_cate)
						}else if(post_type=="video"){
							curr.find("[name='cate_video_selected_id']").val(post_cate)
						}else if(post_type=="yunvideo"){
							curr.find("[name='cate_yunvideo_selected_id']").val(post_cate)
						}else{
							curr.find("[name='cate_post_selected_id']").val(post_cate)
						}
					}
				}
				
				model.save({params: params});
				parent.ajaxBeforeLoading(0,model.view.$el);
				parent.vc.ShortcodesBuilder.update(model);
				parent.updatePage(model, null);
			}else if(c.closest(".site_tooler").length>0){
				var wid = c.closest(".site_tooler").attr("id");
				jQuery.post("/FeiEditor/siteEdit/updatePostlistOneparam" ,{"wid":wid,"bind_pageid":pageid,"cate_to_listuuid":val,"cate_type":post_type,"post_type_selected":post_cate}, function(rs){
						var p =  jQuery(obj).closest('.site_tooler');
						parent.loaderDivUI(p);
						parent.updateWidgetViewEvent(wid,p);
				});
			}
			jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").css("outline","0").css("cursor","normal").css("opacity","1");
			jQuery(".qfy-element.qfe_teaser_grid.qfe_content_element,.qfy-element.qfyproductlist").unbind("click.bindqfylist");
		}else if(post_type=="page" ){
			top.jAlert("这个列表类型不正确，只能绑定资讯和产品列表");
		}else{
			top.jAlert("这个列表还没有设置自己的UUID，你可以在设置中添加该列表唯一的UUID");
		}
		
	})
}
function nav_pagecate_confirm(obj){
	
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	
	var li = jQuery(obj).closest("li");
	var li_id = li.attr("data-id");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var type = c.attr("type");
	var id = c.attr("to_qfyuuid");
	if(!id ||!type){
		jAlert("没有找到对应的列表");
		return ;
	}

	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children") ){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}
	
	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0 ) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var p = jQuery("[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element").parent();
	var model_id = p.attr("data-model-id");
	if(model_id && parent){
		parent.ajaxBeforeLoading(0,p);
		var model =  parent.vc.shortcodes.get(model_id);
		var params = model.get('params');
		if(type)
			params.post_type = type;
		if(type=="products"){
			var pro_old = params.pro_categories;
			params.pro_categories = li_id;
		}else if(type=="product"){
			var product_old = params.product_categories;
			params.product_categories = li_id;
		}else{
			var post_old = params.post_categories;
			params.post_categories = li_id;
		}
		if(params.parse_url)
			var parse_url_old =  params.parse_url;
		if(params.parse_search)
			var parse_search_old =  params.parse_search;
		params.parse_url ="0";
		params.parse_search ="0";

		model.save({params: params});
        parent.vc.ShortcodesBuilder.update(model);
		if(type=="products"){
			params.pro_categories = pro_old;
		}else if(type=="product"){
			params.product_categories = product_old;
		}else{
			params.post_categories = post_old;
		}
		if(parse_url_old)
			params.parse_url = parse_url_old;
		if(parse_search_old)
			params.parse_search = parse_search_old;
		model.save({params: params});
	}

}
function nav_customsearch(obj){
	if(top.jQuery("#site-html #site-body").length>0){
		top.jAlert("请在预览下查看");
		return;
	}

	var li = jQuery(obj);
	var ul = jQuery(obj).closest("ul");
	var url = ul.attr("data-url");
	url = url.replace(/q_term=-?\d*&/g,"");

	url = url.replace(/q_term-key_\d*=-?cs-\d*-[^&]*&/g,"");
	url = url.replace(/q_term-key_\d*=-?pt-\d*-[^&]*&/g,"");
	url = url.replace(/q_term-key_\d*=-?[^&]*&/g,"");
	url = url.replace(/q_term-key_sub_\d*=-?[^&]*&/g,"");
	
	
	var p = ul.closest(".mainul");
	var data_key = li.attr("data-key");
	if(data_key && data_key.indexOf("sub")<0){
		p.find("[data-key=sub_"+data_key+"]").removeClass("active");
	}
	
	if(li.hasClass("active")){
		if(ul.closest("ul.subul").attr("data-morecheck")=="0" ){
			ul.find(">li").removeClass("active");
		}else{
			li.removeClass("active");
		}
	}else{
		if(ul.closest("ul.subul").attr("data-morecheck")=="0" || li.attr("data-id")=="-1"){
			ul.find(">li").removeClass("active");
		}
		li.addClass("active");
	}
	var out = [];
	var i = 0;
	p.find("ul.subul").each(function(){
		var key = jQuery(this).attr("data-key");
		var morecheck = jQuery(this).attr("data-morecheck");
		
		if(jQuery(this).find("li.active").length>0){
			var ids = new Array();
			var len = jQuery(this).find("li.active").length;
			var n = 0;
			jQuery(this).find("li.active").each(function(){
				if(len>1  ){
					if( jQuery(this).attr("data-id")!="-1"){
						ids[n]= jQuery(this).attr("data-id");
						n++;
					}
				}else{
					ids[n]= jQuery(this).attr("data-id");
					n++;
				}
			});
			out[i++]  = "q_term-key_"+key+"="+ids.join(",");
		}else{
			if(jQuery(this).attr("data-default")!="" && jQuery(this).attr("data-default")!="0"){
				//none,not default
				out[i++]  = "q_term-key_"+key+"=-2";
			}
		}
	})
	
	
	if(p.attr("data-ajax")=="1"){
		url = url+"&"+out.join("&");
		var touuid = p.attr("data-touuid");
		var posttype = p.attr("data-posttype");
		
		var id = ul.closest(".qfy_custom_search ").attr("id");
		var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
		var w = "";
		if(touuid!="-1"){
			var plist = jQuery(".qfy-element[qfyuuid='"+touuid+"']");
		}else{
			if(posttype=="product"){
				var plist = jQuery("#main .qfyproductlist:first");
			}else{
				var plist = jQuery("#main .qfe_teaser_grid:first");
			}
		}
		var pp = plist.parent();
		if(plist.attr("data-loading")){
			image_src = plist.attr("data-loading");
			w = plist.attr("data-loading-w");
		}
		
		plist.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img  style="width:'+w+'px"  src="'+image_src+'"></div>');
		

		jQuery.post(url,function(data){
			if(touuid!="-1"){
				var list = jQuery(data).find(".qfy-element[qfyuuid='"+touuid+"']");

			}else{
				if(posttype=="product"){
					var list = jQuery(data).find("#main .qfyproductlist:first");
				}else{
					var list = jQuery(data).find("#main .qfe_teaser_grid:first");
				}
			}
			if(list.length>0){
				plist.replaceWith(list);
			}
			var search = jQuery(data).find("#"+id);
			if(search.length>0){
				jQuery("#"+id).replaceWith(search);
			}
		
			if(plist.attr("data-open")=="1"){
				changelistlinkfun(pp);
			}
			window.vc_js_init2();
			window.vc_js_init();
			if(plist.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			tranlanguage(pp);
		})
	}else{
		location.href=url+"&"+out.join("&");
	}
	return;
}

function tranlanguage(htm){

	if(jQuery("body.qfy_slw_tzh").length==1){
		StranBody(htm[0]);
		
	}else if(jQuery("body.qfy_slw_szh").length==1){
		StranBody(htm[0],0);
		
	}
	
}
function nav_pagecate(obj,flag){
	
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	var type=0;
	var li = jQuery(obj).closest("li");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var id = c.attr("to_qfyuuid");
	var p = jQuery("[qfyuuid='"+id+"']");
	if(p.length==0 && jQuery(obj).attr("data-bindurl")){
		location.href = jQuery(obj).attr("data-bindurl");
		return;
	}else if(flag=="direct"){
		location.href = jQuery(obj).attr("data-url");
		return;
	}


	var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
	var childClass = "ul.qfe_thumbnails";
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	
	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children")){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}
	
	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	
	
	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
	var w = "";
	if(p.attr("data-loading")){
		image_src = p.attr("data-loading");
		w = p.attr("data-loading-w");
	}

	var text = jQuery.trim(jQuery(obj).text());
	jQuery(obj).closest(".dl-menuwrapper").find(".phone-text").html(text);


	if(typeof global_image_loading!="undefined"){
		p.html('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');

	}

	jQuery.get(url,function(data){	
		var nowlistobj =jQuery(data).find("[qfyuuid='"+id+"']");
		if(nowlistobj.length>0){
			p.replaceWith(nowlistobj);	
			window.vc_js_init2();
			window.vc_js_init();
			 if(p.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			 tranlanguage(p);
		}
		if(nowlistobj.attr("data-open")=="1")
			changelistlinkfun(nowlistobj);
		
		list_more_waypoint();
		
	})
}

function preventDefaultFn(event) {
	event.preventDefault();
}

function qfy_notice_event(){
	if(jQuery(".qfy-element.qfy_notice .notice_warp").length > 0
	|| jQuery("a[href^='qfy_notice']").length > 0){
		if (typeof window['_qfy_notice_event'] !== 'function'){
			jQuery.getScript("/FeiEditor/bitSite/js/notices.js").done(function() {
				_qfy_notice_event();
			})
		}else{
			_qfy_notice_event();
		}
	}
}
function changeURLArg(url,arg,arg_val){
	var pattern=arg+'=([^&]*)';
	var replaceText=arg+'='+arg_val;
	if(url.match(pattern)){
		var tmp='/('+ arg+'=)([^&]*)/gi';
		tmp=url.replace(eval(tmp),replaceText);
		return tmp;
	}else{
		if(url.match('[\?]')){
			return url+'&'+replaceText;
		}else{
			return url+'?'+replaceText;
		}
	}
	return url+'\n'+arg+'\n'+arg_val;
}
function gototab(obj){
	var p = jQuery(obj).closest(".qfy-tabcontent");
	p.find(".tabcontent-header-menu li.item button").removeClass("active");
	jQuery(obj).find("button").addClass("active");
	var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
	if(p.find(".royalSlider_gallery_new").attr("transitiontype")=="none"){
		if(p.find(".royalSlider_gallery_new>.vc-element").length>0){
			p.find(".royalSlider_gallery_new>.vc-element").removeClass("edittabshow").addClass("edittabhide");
			p.find(".royalSlider_gallery_new>.vc-element:eq("+index+")").removeClass("edittabhide").addClass("edittabshow");
		}else{
			p.find(".royalSlider_gallery_new>section").hide();
			p.find(".royalSlider_gallery_new>section:eq("+index+")").show().css("height","100%");
		}
	}else{
		p.find(".rsBullets .rsNavItem:eq("+index+")").click();
	}
}
function backlistbtn(obj){
	var $this = jQuery(obj).closest(".qfe_teaser_grid.qfe_content_element");
	var h = $this.find(".list_hidden_btn");
	h.siblings().show();
	if(h.siblings(".mypages").length>0){
		var mstyle =h.siblings(".mypages").attr("style");
		if(mstyle) mstyle = mstyle.replace("display: block;","");
		h.siblings(".mypages").attr("style",mstyle);
	}
	h.hide();
	vc_teaserGrid();
	if(curr_scrollbar) jQuery(window).scrollTop(curr_scrollbar);
}
function qfy_btn_primry_notice(obj){
	var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
	if(p.length==1){
		var title = p.find(".notice_content").attr("data-allow1_warninfo");
		if(title){
			title = base64_decode(title);
			alert(title);
		}
		var allow_forceclose = p.find(".notice_content").attr("data-allow1_forceclose");
		if(allow_forceclose!="1"){
			if(p.attr("id")=="qfy_float_ad"){
				p.remove();
				var id_class = p.attr("class");
				jQuery("#QFY_overlay."+id_class).remove();
			}else{
				var id_class = p.attr("class");
				notice_close_fun("#"+id_class+" .notice_warp");
			}
			setCookie(id_class+"_confirm",1,"365");
		}
	}
}
function qfy_btn_default_notice(obj){
	var p = jQuery(obj).closest("#QFY_window,#qfy_float_ad");
	if(p.length==1){
		var title = p.find(".notice_content").attr("data-allow2_warninfo");
		if(title){
			title = base64_decode(title);
			alert(title);
		}
		var allow_forceclose = p.find(".notice_content").attr("data-allow2_forceclose");
		if(allow_forceclose!="1"){
			if(p.attr("id")=="qfy_float_ad"){
				p.remove();
				var id_class = p.attr("class");
				jQuery("#QFY_overlay."+id_class).remove();
			}else{
				var id_class = p.attr("class");
				notice_close_fun("#"+id_class+" .notice_warp");
			}
		}
	}
	
}

var curr_scrollbar = 0;
function changelistlinkfun($this,$flag){
	$this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link,.prenext_inner a,>a").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			curr_scrollbar =  jQuery(window).scrollTop();
			var link = jQuery(this).attr("href");
			if($flag=="again"){
				$this = jQuery(this).closest(".list_hiddencontent").closest(".qfy-element");
				if(link=="#" ||  !link) return false;
			}
			var h = $this.find(".list_hidden_btn");
			var slider = h.attr("data-slider");
			h.find(".backbtn").hide();
			h.siblings().hide();
			h.show();
			var image_src = "//fast.qifeiye.com/qfy-content/plugins/qfy_form/admin/images/loading.gif";
			var w = "";
			if(h.closest(".qfy-element").attr("data-loading")){
				image_src = h.closest(".qfy-element").attr("data-loading");
				w = h.closest(".qfy-element").attr("data-loading-w");
			}
			
			h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
			var pt = h.closest(".qfy-element").offset().top;
			if(curr_scrollbar > pt){
				jQuery("html").animate({ scrollTop: pt }, "fast");
			}
	
			jQuery.get(link,function(data){
				var htm =jQuery(data).find(".content-wrapper").html();
				if(!htm) htm ="";	    	
				if(slider=="1"){
					var htm_prev = "";
					var htm_next = "";
					if(jQuery(data).find(".bitMainTopSider").length>0){
						htm_prev = "<div class='bmts' style='position:relative;width:100%'>"+jQuery(data).find(".bitMainTopSider").html()+"</div>";
					}
					if(jQuery(data).find(".bitMainBottomSider").length>0){
						htm_next = "<div class='bmbs'  style='position:relative;width:100%'>"+jQuery(data).find(".bitMainBottomSider").html()+"</div>";
					}
					htm = htm_prev+htm+htm_next;
				}
				h.find(".list_hiddencontent").html(htm);
				h.find(".backbtn").show();
				 window.vc_js_init2();
				 window.vc_js_init();
				 qfy_notice_event();
				 tranlanguage(h);
				 //。。。。。
				 changelistlinkfun(jQuery(".list_hiddencontent .teaser_grid_container,.list_hiddencontent .advanced_list,.list_hiddencontent .qfy-prenext,.list_hiddencontent .mypages.pagenav"),"again");
			});
			
			return false;//阻止链接跳转
	 });
}
function list_more_waypoint(){
	if(jQuery(".qfe_teaser_grid .more.auto").length>0){
		jQuery(".qfe_teaser_grid .more.auto").waypoint('destroy');
		jQuery(".qfe_teaser_grid .more.auto").waypoint({
			handler: function(direction) {
					jQuery(this).click();
			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}
	
}
function qfy_template_preiview_fun(url,select_url){

	if( jQuery("body").width()<1024 ){
		location.href = url;
		return;
	}
	var ishttps = 'https:' == document.location.protocol ? true : false;
	if(ishttps){
		url = url.replace("http://","https://");
	}
	jQuery("#qfy_template_preivew").remove();
	var header_str = '<div class="demo-pc"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div>';
	header_str += '<div class="demo-mobile" ><div class="demo-mobile-header"><div class="circle"></div><div class="circle" style="width: 60px;"></div></div><div class="demo-mobile-bottom"></div></div>';

	jQuery("body").append("<div id='qfy_template_preivew' class='pc-selected'><div id='qfy_template_preivew_header'><span style='float:left;' > <span class='back' style='position: relative;top:-6px;font-size:12px;'><svg style='position: relative;top:2px;margin-right:3px;stroke: #222;stroke-width: 7px;width: 14px;overflow: visible;-webkit-transform: scaleX(-1);transform: scaleX(-1);' width=\"8px\" height=\"13px\" viewBox=\"0 0 8 13\" version=\"1.1\"><g style='fill: #222;' id=\"Visual-Design\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" opacity=\"1\"><g id=\"9b\" transform=\"translate(-344.000000, -357.000000)\" fill=\"#222222\"><g id=\"templates\" transform=\"translate(-202.000000, 165.000000)\"><path d=\"M544,195 L544,203 L543,203 L543,195 L543,194 L552,194 L552,195 L544,195 Z\" id=\"Combined-Shape\" transform=\"translate(547.500000, 198.500000) rotate(-225.000000) translate(-547.500000, -198.500000) \"></path></g></g></g></svg>返回 </span> <svg class='pc'  width=\"28\" height=\"22\" viewBox=\"0 0 28 22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#000\" fill-rule=\"evenodd\"><path d=\"M11 18h1v4h-1z\"></path><path d=\"M9 21h10v1H9z\"></path><path d=\"M16 18h1v4h-1z\"></path><path d=\"M1 3v13c0 1.11.891 2 1.996 2h22.008A2.004 2.004 0 0 0 27 16V3c0-1.11-.891-2-1.996-2H2.996A2.004 2.004 0 0 0 1 3zM0 3c0-1.657 1.35-3 2.996-3h22.008A2.994 2.994 0 0 1 28 3v13c0 1.657-1.35 3-2.996 3H2.996A2.994 2.994 0 0 1 0 16V3z\"></path></g></svg><svg class='mobile' width=\"12\" height=\"22\" viewBox=\"0 0 12 22\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"#000\" fill-rule=\"evenodd\"><path d=\"M1 3.001V19C1 20.105 1.894 21 2.997 21h6.006A2 2 0 0 0 11 18.999V3A1.999 1.999 0 0 0 9.003 1H2.997A2 2 0 0 0 1 3.001zm-1 0A3 3 0 0 1 2.997 0h6.006A2.999 2.999 0 0 1 12 3.001V19A3 3 0 0 1 9.003 22H2.997A2.999 2.999 0 0 1 0 18.999V3z\"></path><path d=\"M5 18h2v2H5z\"></path></g></svg> </span>  <span  style='float:right;'><a class='preivew' target='_blank' href='"+url+"'>访问演示网站</a><a href='"+select_url+"'><button class='use'>选用</button></a><svg class='back'  style=\"width: 40px;height: 40px;fill:none;stroke:#000000;stroke-miterlimit:3;stroke-width:1px;position: relative;top: 15px;margin-right: 0;margin-left: 20px;\"  viewBox=\"0 0 150 150\" ><line  x1=\"8.15\" y1=\"141.18\" x2=\"141\" y2=\"8.33\"/><line  x1=\"8.15\" y1=\"8.33\" x2=\"141\" y2=\"141.18\"/></svg></span></div><div id='qfy_template_preivew_content' ><div class='iframe-inner'>"+header_str+"<iframe src='"+url+"'></iframe></div></div><div class='loading-iframe'></div></div>");


	setTimeout(function(){
		jQuery("#qfy_template_preivew .loading-iframe").animate({"opacity":0},"slow",function () {
			jQuery("#qfy_template_preivew .loading-iframe").remove();
		});
	},2000);
	jQuery("body").addClass("popfixed");
	jQuery("#qfy_template_preivew .back").click(function(){
		jQuery("#qfy_template_preivew").remove();
		jQuery("body").removeClass("popfixed");
	});
	var b_width = jQuery(window).width();
	var b_height = jQuery(window).height()-130;
	if(b_width<1440 || b_height<800){
		jQuery("#qfy_template_preivew_content").css("transform","translateY(0px) scale(0.7)");
	}
	jQuery("#qfy_template_preivew .pc").click(function(){
		jQuery("#qfy_template_preivew").addClass("pc-selected").removeClass("mobile-selected");
		jQuery("#qfy_template_preivew .iframe-inner").animate({"width":1440,"height":800},"fast");
	});
	jQuery("#qfy_template_preivew .mobile").click(function(){
		jQuery("#qfy_template_preivew").addClass("mobile-selected").removeClass("pc-selected");
		jQuery("#qfy_template_preivew .iframe-inner").animate({"width":375,"height":667},"fast");
	});

}
var qfy_template_waypoint;
jQuery(document).ready(function($) {
	jQuery(".mobile_variation_warp").closest("section").css("z-index","100");
	jQuery("#dl-menu .qfy-sub-div").remove();
	setTimeout(function(){
		jQuery(".qfy-sub-div").each(function(){
			if(jQuery(this).attr("data-full")=="1"){
				var bodywidth = jQuery("body").width();
				var offsetleft = jQuery(this).closest("li").offset().left;
				jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");
			}
		})
	},500);
	jQuery("#main-nav .hassubdiv").mouseenter(function(){
		jQuery(this).find(".qfy-sub-div").each(function(){
			if(jQuery(this).attr("data-full")=="1"){
				var bodywidth = jQuery("body").width();
				var offsetleft = jQuery(this).closest("li").offset().left;
				jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");
			}
		})
	})

	if(jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
		jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
			var cur = jQuery(this).find(".list-content .current-cat");
			jQuery(this).find(".list-content .children").hide();
			cur.parents("li,ul").show();
			if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
		})
	
	}
	if(jQuery(".qfy_template_lib .viewmoretemplate").length>0){
		jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
			handler: function(direction) {
				if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
					jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
				}
				
			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}

	if(!is_edit_model){
		jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function(){
			var $this =  jQuery(this);
			changelistlinkfun($this);
		})
		qfy_notice_event();
		
		list_more_waypoint();
		
		
	}
	
	if(jQuery("body.free_public").length>0){
		checkAdvertising();
		setTimeout("checkAdvertising()",3000);
		setTimeout("checkAdvertising()",6000);
		setTimeout("checkAdvertising()",10000);
		setTimeout("checkAdvertising()",20000);
		setTimeout("checkAdvertising()",30000);
		setTimeout("checkAdvertising()",100000);
	}
	
	jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
		var newurl = jQuery(this).attr("data-src");
		var $this = jQuery(this);
		jQuery('<img src="'+newurl+'">').load(function(){
			$this.attr("src",newurl);
		})
	})
	jQuery(".qfy_scroll_box:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var box = jQuery(this).attr("id");
		var delay = jQuery(this).attr("data-delay");
		var speed = jQuery(this).attr("data-speed");
		var h = jQuery(this).attr("data-h");
		slideLine(box,"div",delay,speed,h);
	});
	
	vc_gallery_relat();
	//特殊处理一些网站
	if(jQuery(".re_second_user_class").length>0 && jQuery.trim(jQuery(".re_second_user_span").text())==""){
		jQuery(".re_second_user_class").hide();
	}
	
	if(jQuery(".addon-custom-datepicker" ).length>0 ){
		jQuery(".addon-custom-datepicker" ).datepicker({
						dateFormat: "yy-mm-dd",
						numberOfMonths: 1,
		});
	}
	if(jQuery(".addon-custom-datetimepicker" ).length>0 ){
		jQuery(".addon-custom-datetimepicker" ).datetimepicker({
					dateFormat: "yy-mm-dd",
					numberOfMonths: 1,
					showTime: true,
					constrainInput: false
		});
	}
	if(jQuery(".qfytemplateslist").length>0 ){
		if(jQuery(".qfytemplateslist .citem > a.active").length>0){
			jQuery(".qfytemplateslist .citem > a.active").closest(".citem").show();
		}
		jQuery(".qfytemplateslist  .info").click(function(){
			var url = jQuery(this).attr("data-url");
			var select_url = jQuery(this).next().attr("data-url");
			var type = jQuery(this).closest(".qfytemplateslist ").attr("data-type");
			if(!is_edit_model){

				template_add_points(this,3);

				if(type=="mini") {
					window.open(url+"/FeiEditor/preview");
				}else{
					qfy_template_preiview_fun(url,select_url);

				}
			}
		});
		jQuery(".qfytemplateslist  .img_inner").unbind().mouseenter(function(){
			var $this = this;
			template_mouse_timeout = setTimeout(function(){
				template_add_points($this,1);
			},3000);
		}).mouseleave(function(){
			clearTimeout(template_mouse_timeout);
		});
		jQuery(".qfytemplateslist  .use").click(function(){
			var url = jQuery(this).attr("data-url");
			var type = jQuery(this).closest(".qfytemplateslist ").attr("data-type");
			if(!is_edit_model){
				if(type=="mini") {
					location.href = url+"/mini";
				}else{
					location.href = url;
				}
			}
		})
		
		jQuery(".qfytemplateslist .mypages a").removeAttr("href").click(function(){
			var tag = "all-0";
			if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
				tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
			}
			var paged = jQuery(this).attr("paged");
			searchqfylist(tag,paged);
		})
		
		jQuery(".qfytemplateslist .itemli" ).click(function(){
			jQuery(".qfytemplateslist .itemli" ).removeClass("active");
			jQuery(".qfytemplateslist .citem").hide();
			if(jQuery(this).parent().hasClass("citem")){
				jQuery(this).parent().show();
			}else{
				jQuery(this).parent().find(".citem").show();
			}
			jQuery(this).addClass("active");
		
			var tag = "all-0";
			if(jQuery(this).attr("data-tag")){
				tag = jQuery(this).attr("data-tag");
			}
			searchqfylist(tag,1);
		})
		jQuery(".qfytemplateslist .viewmoretemplate_inner").click(function(){
					var tag = "all-0";
					if(jQuery(".qfytemplateslist .itemli.active").attr("data-tag")){
						tag = jQuery(".qfytemplateslist .itemli.active").attr("data-tag")
					}
					var paged = jQuery(this).attr("data-page");
					searchqfylist(tag,paged*1+1,'append');
		});
		qfytemplate_hover();
	}	

	var current_page_id = jQuery('body').attr('data-pid');
	var current_page_key = jQuery('body').attr('data-pkey');
	
	if(current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined'){
	    jQuery.ajax({
	        url: '/FeiEditor/traffic/log',
	        type: 'post',
	        async: true,
	        data: {
	        	st_pid: current_page_id,
	        	st_pkey: current_page_key,
	        }
	    });
	}
	setTimeout(function(){
		try{
			if(top!=self && !jQuery("body").hasClass("compose-mode")){
				if(top.jQuery('#pageUrl').length>0 && parent.jQuery("#vc-post-id").val()!=dtGlobals.curr_id){
					if(parent.jQuery("#vc-post-id").val()){
						top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
						return;
					}else if(jQuery("#vc-post-id").length==0){
						top.jAlert("页面过期，正尝试自动刷新！");
						setTimeout(function(){top.location.reload();},1000);
						return;
					}
				}
			}
		}catch(e){
			
		}
		
	},1000);
	position_follow_function();
	//ready end
})


function qfy_popinfo_fun(htm,timetoclose){
	jQuery(".qfy_popinfo").remove();
	if(htm){
		var msg = '<div class="qfy_popinfo" ><div class="md-content">'+htm+'</div></div>';
		jQuery("body").append(msg);
		setTimeout(function(){ jQuery(".qfy_popinfo").addClass("qfy_show"); },500);
		if(timetoclose){
			setTimeout(function(){ jQuery(".qfy_popinfo").removeClass("qfy_show"); },timetoclose*1000);
		}
	}
}
function mobilecart_click(id){
	if( jQuery("#product-"+id+" form .single_add_to_cart_button").length>0 ){
		jQuery("#product-"+id+" form .single_add_to_cart_button").click();
	}else if(jQuery("#product-"+id+" .custom_btn_link .single_add_to_cart_button").length>0 ){
		jQuery("#product-"+id+" .custom_btn_link .single_add_to_cart_button").click();
	}
}
function mobilecart(){
	jQuery(".mobile_variation_warp").addClass("show");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").addClass("lowIndex");
	jQuery(".mobile_variation_warp").closest("section").removeClass("lowIndex").addClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").addClass("topIndex");
	jQuery(".mobile-mask").addClass("show");
	jQuery(".product_mobilecart").hide();
	jQuery('body').addClass("doing");
	var  height = jQuery(window).height();
	var isnotmove = false;
	if(jQuery("section.section.topIndex").length>0  && jQuery("section.section.topIndex").height()<height*0.75){
		isnotmove = true;
	}else{
		jQuery(".mobile_variation_warp").css("padding-bottom","0");
	}
	jQuery('html, body').on('touchmove', function(e){ 
		if(isnotmove){
			e.preventDefault(); 
		}
	});
	if(!isnotmove){
		jQuery("section.section.topIndex").nextAll("section.section").addClass("tmp_displaynone");
		jQuery("#bottom-bar,#footer").addClass("tmp_displaynone");
	}
	
}
function mobileunmask(){
	jQuery(".mobile-mask").removeClass("show");
	jQuery(".mobile_variation_warp").removeClass("show");
	jQuery(".mobile_variation_warp").closest("section").removeClass("topIndex");
	jQuery(".mobile_variation_warp").closest(".bit_main_content").removeClass("topIndex");
	jQuery("#bottom-bar,#footer,#bitBanner,section.section,.right_nav_bar,#phantom").removeClass("lowIndex");
	jQuery(".product_mobilecart").show();
	jQuery('body').removeClass("doing");
	jQuery("section.section,#bottom-bar,#footer").removeClass("tmp_displaynone");
}

function changeUserPhonenumber(obj){
	var form = jQuery(obj).closest("form");
	if(form.find(".qfyuser-loading:visible").length>0){
		return;
	}
	var url = "/admin/admin-ajax.php";
	var element = form.find(".phone_number");
	form.find(".qfyuser-warning").remove();
	form.find(".qfyuser-loading").show().addClass('inline');
	jQuery.ajax({
        type: "POST",
        url:url,
		dataType: "JSON",
        data:form.serialize(),
        error: function(request) {
			form.find(".qfyuser-loading").hide().removeClass('inline');
        	if (element.parent().find('.qfyuser-warning').length==0 ) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>提交失败</div>');
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			} else {
				element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>提交失败' );
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			}
        },
        success: function(data) {
			form.find(".qfyuser-loading").hide().removeClass('inline');
        	if(data.status=="error"){
				var element1 = form.find("."+data.key);
				if (element1.parent().find('.qfyuser-warning').length==0 ) {
					element1.addClass('warning').removeClass('ok');
					element1.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>'+data.msg+'</div>');
					element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
				} else {
					element1.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>'+data.msg );
					element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
				}
			}else{
				location.reload();
			
			}
        }
    });
}

function send_new_sms(key,flag,obj){
	var text1 = jQuery(obj).attr("data-sms_gtext2");
	var text2 = jQuery(obj).attr("data-sms_gtext3");
	if(jQuery(obj).hasClass("begining")) return;
	jQuery(obj).val("60").addClass("begining");
	var p = jQuery(obj).closest("form");

	var phone = p.find("#phone_number-"+key);

	var phone_code = p.find("#phone_code-"+key);
	var postdata = {"action":"tosendadsms","phone":phone.val(),"phone_code":phone_code.val()};
	p.find('.qfyuser-warning').remove();

	jQuery.post("/admin/admin-ajax.php",postdata,function(rlt){
		var data =jQuery.parseJSON(rlt);
		if(data && data.status=="1") {
			//jQuery(obj).val(text2);
			var element = phone;
			element.parent().find('.qfyuser-warning').remove();
			//setTimeout(function(){jQuery(obj).val(text1);},10000);

		}else if(data){
			if(data.element!=""){
				var element = p.find("#"+data.element+"-"+key);
			}else{
				var element = phone;
			}

			if (element.parent().find('.qfyuser-warning').length==0 ) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data.msg + '</div>');
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			} else {
				element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data.msg );
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			}
			if(data.level=="0"){
				jQuery(obj).val(0);
				tominuto1(obj);
			}
		}

	})

	setTimeout(function(){
		tominuto1(obj);

	},1000);
}

function send_user_sms(key,flag,obj){
	var text1 = jQuery(obj).attr("data-sms_gtext2");
	var text2 = jQuery(obj).attr("data-sms_gtext3");
	if(jQuery(obj).hasClass("begining")) return;
	jQuery(obj).val("60").addClass("begining");
	var p = jQuery(obj).closest("form");
	var haswarning = false;
	if(key!=""){
		var phone = p.find("#phone_number-"+key);
	}else{
		var phone = p.find(".phone_number");
	}


	var postdata = {"action":"tosendsms","phone":phone.val()};


	jQuery.post("/admin/admin-ajax.php",postdata,function(data){
		if(data!="success"){
			var element = phone;
			if (element.parent().find('.qfyuser-warning').length==0 ) {
				element.addClass('warning').removeClass('ok');
				element.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>' + data + '</div>');
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			} else {
				element.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>' + data );
				element.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
			}

		}else{
			//jQuery(obj).val(text2);
			var element = phone;
			element.parent().find('.qfyuser-warning').remove();
			//setTimeout(function(){jQuery(obj).val(text1);},10000);
		}
		
	})
	
	setTimeout(function(){
		tominuto1(obj);
		
	},1000);
}

function tominuto1(obj){
	var text1 = jQuery(obj).attr("data-sms_gtext2");
	var text2 = jQuery(obj).attr("data-sms_gtext3");
	if(text1 && text2){
		if(jQuery(obj).val()>0 && jQuery(obj).val()!=text1 && jQuery(obj).val()!=text2){
			jQuery(obj).val(jQuery(obj).val()-1);
		}else{
			jQuery(obj).removeClass("begining");
			jQuery(obj).val(text1);
			return;
		}
	}else{

		if(jQuery(obj).val()>0 && jQuery(obj).val()!="发送" && jQuery(obj).val()!="获取" && jQuery(obj).val()!="发送成功"){
			jQuery(obj).val(jQuery(obj).val()-1);
		}else{
			jQuery(obj).removeClass("begining");
			jQuery(obj).val(text1);
			return;
		}
	}
	setTimeout(function(){
		tominuto1(obj);
	},1000);
}

function qfy_phone_change(obj,flag){
	var p = jQuery(obj).closest(".phonediv");
	if(flag=="1"){
		p.find(".old_phone_div").hide();
		p.find(".password_div,.new_phone_div,.yanzheng_div,.qfyuser-submit").show();
	}else if(flag=="2" || flag=="3"){
		p.find(".old_phone_div,.password_div").hide();
		p.find(".new_phone_div,.yanzheng_div,.qfyuser-submit").show();
		v = p.find(".old_phone_div input").val();
		if(p){
			p.find(".new_phone_div .phone_number").val(v);
		}
	}else if(flag=="4"){
		p.find(".new_phone_div,.password_div,.qfyuser-submit,.yanzheng_div").hide();
		p.find(".old_phone_div").show();
	}
}

function weixin_auto_redirect(){
	//第三方补全信息页面，不要跳
	if(jQuery('.qfyuser[data-template="changeinfo"]').length>0){
		return;
	}

	jQuery.post("/admin/admin-ajax.php",{action:"weixin_auto_redirect"},function(data){
		if(data.indexOf("http")==0){
			location.href=data;
		}
	});
	
}


function openheaderbtn(obj){
	if(jQuery("#page,#phantom").hasClass("menuopen")){
		jQuery("#page,#phantom").removeClass("menuopen");
	}else{
		jQuery("#page,#phantom").addClass("menuopen");
	}
}
function before_quick_search(obj){
	var search =jQuery(obj).find("[name='search']").val();
	if(search==""){
		return false;
	}
}

function quick_search(obj){
	var v = jQuery(obj).val();
	var pageid = jQuery(obj).attr("data-pageid");
	var title = jQuery(obj).attr("data-title")? jQuery(obj).attr("data-title"):"搜索";
	var placeholder = jQuery(obj).attr("data-placeholder")?jQuery(obj).attr("data-placeholder"):"请输入关键词";
	var btn1 = jQuery(obj).attr("data-btn1")?jQuery(obj).attr("data-btn1"):"确认";
	var btn2 = jQuery(obj).attr("data-btn2")?jQuery(obj).attr("data-btn2"):"取消";
	var  posttype =  jQuery(obj).attr("data-posttype");
	var postcate = jQuery(obj).attr("data-postcate");
	var bodywidth = jQuery("body").width();
	var bodyheight = jQuery(window).height();
	var message="<div><form action='/'  onsubmit='return before_quick_search(this)'><input type='hidden'  name='searchtype' value='"+posttype+"' /><input type='hidden'  name='searchcate' value='"+postcate+"' /><input type='hidden' name='page_id' value='"+pageid+"'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>"+title+"</div>";
	if( jQuery(obj).attr("data-es")=="1"){
		message +='<input type="hidden"  name="ep_search" value="1" />';
		message +='<input type="hidden"  name="qfyuuid" value="'+ jQuery(obj).attr("data-es-uuid")+'" />';
		if( jQuery(obj).attr("data-es-relevancy")=="1"){
			message +='<input type="hidden"  name="ep_relevancy" value="1" />';	
		}
	}
	message +='<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="'+placeholder+'" type="search" name="search"></div>';
	message +='<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">'+btn1+'</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">'+btn2+'</button></div></form></div>';
	if(bodywidth<768){
		var w = bodywidth - 40;
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-"+(w/2)+"px",width:w+"px",height:"180px"},message:message});
	}else{
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-360px",width:"720px",height:"180px"},message:message});
	}
	jQuery('body').css('cursor', 'auto');

}

function unblockUI(){
	jQuery.unblockUI();
}
function beforeOnclick(e,msg){
	if(confirm(msg)){
		
	}else{
		 e.preventDefault();
		 e.stopPropagation();
		 return false;
	}
}
function login_button_click(id,link){
	if(self!=top && typeof parent.jAlert =="function"){
		jAlert("在编辑模式下，不允许使用该功能，请到预览模式下使用。");
		return false;
	}
	var back = location.href;
	try{if(location.href.indexOf('qfy-login.php')>0) back = document.loginform.redirect_to.value;}catch(e){back = '/';}
	location.href=(link?link:'/')+'?connect='+id+'&action=login&qfy_nocache=true&back='+escape(back);
}

//可以挪 后台PHP判断需要使用的地方动态加载 预览的时候才有用的吧? 5k
function play_qfy_video(obj){
	var p = jQuery(obj).closest(".video_play");
	var iframe = p.find("iframe");
	var src =  iframe.attr("data-src");
	var ispop = iframe.attr("data-ispopup");
	if(jQuery("body").width()<768){
		ispop = 0;
    }
	if(ispop=="1"){
    	var pop_width=iframe.attr("data-pop_width");
		var borderstyle=iframe.attr("data-borderstyle");
    	var pop_height=iframe.attr("data-pop_height");
    	var cover=iframe.attr("data-cover");
    	var controlBarVisibility=iframe.attr("data-controlbarvisibility");
    	var volume=iframe.attr("data-volume");
    	var bodywidth = jQuery("body").width();
    	var bodyheight = jQuery(window).height();
    	if(pop_width>bodywidth){
    		pop_width = bodywidth;
    	}
    	if(pop_height>bodyheight){
    		pop_height = bodyheight;
    	}
		var block_css = {"top":"50%","left":"50%","margin-top":"-"+(pop_height/2)+"px","margin-left":"-"+(pop_width/2)+"px",width:pop_width+"px",height:pop_height+"px"};
		if(borderstyle){
			var tmp = borderstyle.split(";");
			for(var i=0;i<tmp.length;i++){
				var tmp2 = tmp[i].split(":");
				if(tmp2.length>1){
					block_css[tmp2[0]] = tmp2[1];
				}
			}
		}
    	//onOverlayClick: top.jQuery.unblockUI,
		top.jQuery.blockUI({css: block_css,message: "<iframe allowfullscreen style='width:100%;height:100%;display:block;border:0;overflow:hidden;' data-height='"+pop_height+"' data-cover='"+cover+"' data-controlbarvisibility='"+controlBarVisibility+"' data-volume='"+volume+"' data-autoplay='true' src='"+src+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"});
		top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
			 top.jQuery.unblockUI();
		});
		if(typeof top.jQuery.fn.draggable=="undefined"){
			 top.jQuery.getScript("/qfy-includes/js/jquery/ui.all.min.js").done(function() {
				top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
				top.jQuery('body,.blockOverlay').css('cursor', 'auto');
			 })
		 }else{
				top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
				top.jQuery('body,.blockOverlay').css('cursor', 'auto');
		 }
	}else{
		jQuery(obj).removeClass("toplay").addClass("playing").attr("src","https://fast.qifeiye.com/qfy-content/plugins/qfy_editor/projekktor/themes/maccaco/buffering.gif");
		iframe.attr("data-autoplay","true").attr("src",src);
	}
}
function play_local_video(obj){
		var pop_width=jQuery(obj).attr("data-pop_width");
		var pop_href=jQuery(obj).attr("data-href");
		var borderstyle=jQuery(obj).attr("data-borderstyle");
    	var pop_height=jQuery(obj).attr("data-pop_height");
    
    	var bodywidth = jQuery("body").width();
    	var bodyheight = jQuery(window).height();
    	if(pop_width>bodywidth){
    		pop_width = bodywidth;
    	}
    	if(pop_height>bodyheight){
    		pop_height = bodyheight;
    	}
		var block_css = {"top":"50%","left":"50%","margin-top":"-"+(pop_height/2)+"px","margin-left":"-"+(pop_width/2)+"px",width:pop_width+"px",height:pop_height+"px"};
		if(borderstyle){
			var tmp = borderstyle.split(";");
			for(var i=0;i<tmp.length;i++){
				var tmp2 = tmp[i].split(":");
				if(tmp2.length>1){
					block_css[tmp2[0]] = tmp2[1];
				}
			}
		}
    	//onOverlayClick: top.jQuery.unblockUI,
		top.jQuery.blockUI({css: block_css,message: "<iframe allowfullscreen style='width:100%;height:100%;display:block;border:0;overflow:hidden;' src='"+pop_href+"' ></iframe><div class='block-close' style='position:absolute;top:-26px;right:-3px;color:#fff;'>✕</div><div class='block-move ' title='按住拖动位置' style='position:absolute;top: 0;left: 0;color:#fff;cursor:move;background: transparent;width: 100%;height: 80px;'></div>"});
		top.jQuery('.block-close').css('cursor', 'pointer').unbind().click(function(){
			 top.jQuery.unblockUI();
		});
		if(typeof top.jQuery.fn.draggable=="undefined"){
			 top.jQuery.getScript("/qfy-includes/js/jquery/ui.all.min.js").done(function() {
				top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
				top.jQuery('body,.blockOverlay').css('cursor', 'auto');
			 })
		 }else{
				top.jQuery('.blockUI.blockMsg').unbind().draggable({handle: ".block-move"});
				top.jQuery('body,.blockOverlay').css('cursor', 'auto');
		 }


}

//可以挪 结束 ------

//可以挪 PHP判断需要使用的地方动态加载 好像只有浏览时需要 手机短信？ 9k
/*
var clicksmsnum = 0;
function toverify(){
	smsWarning("");
	var p = jQuery("[name='sms_phone']").val();
	var image_code = jQuery("[name='sms_image']").val();
	var hidden_rand = jQuery("[name='hidden_rand']").val();
	if(jQuery.trim(p)=="" || p==null ){
		smsWarning("手机号码不能为空");
		return ;
	}
	if(jQuery.trim(image_code)=="" || image_code==null){
		smsWarning("图形验证码不能为空");
		return ;
	}
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	var str ='<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
	parentDIv.find(".bitButtonVerify").after(str);
	countVerify();
	jQuery.post("/admin/admin-ajax.php",{"action":"toverifySms","phone":jQuery.trim(p),"image_code":jQuery.trim(image_code),"hidden_rand":hidden_rand},
		function(data){
			if(data=="success"){
				smsWarning("短信已经成功发送，请查看您的手机。您可能在1-5分钟之后收到短信",1);
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1) ){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else if(data=="empty"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码不能为空");
			}else if(data=="errorphone"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码格式错误(国际号码示例：例如美国+112345678901)");
			}else if(data=="image_empty"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("图形验证码不能为空");
			}else if(data=="image_error"||data=="image_notmatch"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("图形验证码填写错误");
			}else if(data=="loginout"||data=="0"){
				smsWarning("会话已经过期，请重新登录");
			}else if(data=="exist"){
				smsWarning("短信已经发送，请查看您的手机,30秒之内只能获取一次验证码");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1)){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else if(data=="existUserPhone"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("手机号码已经绑定了帐号,一个手机号码只能绑定一个帐号哦");
			}else if(data=="limitPhone"){
				smsWarning("1个小时内对一个号码不能发送超过10条短信");
			}else if(data=="limitIp"){
				smsWarning("1个小时内一个客户IP端不能发送超过10条短信");
			}else if(data=="failed"){
				jQuery(".bit-button-waiting.countVerify").remove();
				smsWarning("短信发送失败，请30秒后再试一次");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1)){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}else{
				smsWarning("短信发送异常,请30秒后再试一次");
				clicksmsnum++;
				if(clicksmsnum>1 && (p.indexOf("+")<0||p.indexOf("+86")>-1) ){
					jQuery(".bitButtonVerify").attr("onclick","tocallbutton()");
					jQuery(".bitButtonVerify .iconText").html("收不到短信?");
				}
			}

		})
}
function tocallbutton(){
	smsWarning("");
	if(confirm("确认是否通过呼叫你的手机来获取语音验证码？")){

		var p = jQuery("[name='sms_phone']").val();
		var image_code = jQuery("[name='sms_image']").val();
		var hidden_rand = jQuery("[name='hidden_rand']").val();
		if(jQuery.trim(p)=="" || p==null ){
			smsWarning("手机号码不能为空");
			return ;
		}
		if(jQuery.trim(image_code)=="" || image_code==null){
			smsWarning("图形验证码不能为空");
			return ;
		}
		var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
		var str ='<a class="bit-button-waiting countVerify" style="width:100%;height:30px;margin-top:5px; line-height:30px;font-size:14px;color:#898989;background:#e6e6e6;border-color:#d9d9d9;">30</a>';
		parentDIv.find(".bitButtonVerify").after(str);
		countVerify();
		jQuery.post("/admin/admin-ajax.php",{"action":"toverifyCall","phone":jQuery.trim(p),"image_code":jQuery.trim(image_code),"hidden_rand":hidden_rand},
			function(data){
				if(data=="success"){
					smsWarning("我们正在尝试呼叫你的手机，请注意接听语言提示",1);
				}else if(data=="empty"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码不能为空");
				}else if(data=="errorphone"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码格式错误");
				}else if(data=="image_empty"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("图形验证码不能为空");
				}else if(data=="image_error"||data=="image_notmatch"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("图形验证码填写错误");
				}else if(data=="loginout"||data=="0"){
					smsWarning("会话已经过期，请重新登录");
				}else if(data=="existUserPhone"){
					jQuery(".bit-button-waiting.countVerify").remove();
					smsWarning("手机号码已经绑定了帐号,一个手机号码只能绑定一个帐号哦");
				}else if(data=="limitPhone"){
					smsWarning("1个小时内对一个号码不能发送超过10条短信");
				}else if(data=="limitIp"){
					smsWarning("1个小时内一个客户IP端不能发送超过10条短信");
				}else if(data=="failed"){
					smsWarning("拨打电话失败,请30秒后再试一次");
				}else{
					smsWarning("拨打电话失败,请30秒后再试一次");
				}

			})
	}
}
function countVerify(){
	if(jQuery(".bit-button-waiting.countVerify").length==1){
		var countVerifyNum = jQuery(".bit-button-waiting.countVerify").text();
		if(countVerifyNum*1<2){
			jQuery(".bit-button-waiting.countVerify").remove();
		}
		setTimeout(function(){
			countVerifyNum = countVerifyNum*1 -1;
			jQuery(".bit-button-waiting.countVerify").text(countVerifyNum);
			countVerify();
		},1000);

	}

}
function countVerifyCall(){
	if(jQuery(".tocallbutton").css("opacity")!="1"){
		var countVerifyNum = jQuery(".tocallbutton").attr("data-second");
		if(countVerifyNum*1<2){
			jQuery(".tocallbutton").css("opacity","1").attr("title","").attr("data-second",0).css("cursor","pointer");
		}
		setTimeout(function(){
			countVerifyNum = countVerifyNum*1 -1;
			jQuery(".tocallbutton").attr("title","等待"+countVerifyNum+"s后可以重拨").attr("data-second",countVerifyNum);
			countVerifyCall();
		},1000);

	}

}
function toSubmitPhoneSms(){
	smsWarning("");
	var p = jQuery("[name='sms_phone']").val();
	if(jQuery.trim(p)=="" || p==null){
		smsWarning("手机号码不能为空");
		return ;
	}
	var c = jQuery("[name='sms_code']").val();
	if(jQuery.trim(c)=="" || c==null){
		smsWarning("手机验证码不能为空");
		return ;
	}
	var image_code = jQuery("[name='sms_image']").val();
	if(jQuery.trim(image_code)=="" || image_code==null){
		smsWarning("图形验证码不能为空");
		return ;
	}
	var hidden_rand = jQuery("[name='hidden_rand']").val();
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	if(parentDIv.find(".bitButtonSubmitDiv .bit-button-waiting").length==1){
		return ;
	}
	var str ='<a class="bit-button-waiting" style="background:none;border:0;position:relative;"><img style=" height: 20px;margin-left: 10px;position: relative;top: 5px;" src="/qfy-content/plugins/qfyuser/skins/elegant/img/loading.gif"></a>';
	parentDIv.find(".bitButtonSubmit").after(str);
	parentDIv.find(".bitButtonSubmit").css("opacity","0.65").css("cursor","default");
	jQuery.post("/admin/admin-ajax.php",{"action":"successToVerify","phone":jQuery.trim(p),"code":jQuery.trim(c),"image_code":jQuery.trim(image_code),hidden_rand:hidden_rand},
		function(data){
			parentDIv.find(".bit-button-waiting").remove();
			parentDIv.find(".bitButtonSubmit").css("opacity","1").css("cursor","pointer");
			if(data=="success"){

				if(!jQuery("body").hasClass("only_show_sms_content")){
					smsWarning("手机验证成功，系统正在自动跳转到网站管理页面",1);
					if(jQuery("#redirect_sms_url").val()==""){
						location.href="/";
					}else{
						location.href=jQuery("#redirect_sms_url").val();
					}
				}else{
					smsWarning("手机验证成功，请关闭弹框，继续下面的操作",1);
				}
			}else if(data=="loginout"||data=="0"){
				smsWarning("会话已经过期，请重新登录");
			}else if(data=="None"){
				smsWarning("验证失败，请认真填写相关信息");
			}else if(data=="image_empty"){
				smsWarning("图形验证码不能为空");
			}else if(data=="image_error"||data=="image_notmatch"){
				smsWarning("图形验证码填写错误");
			}else if(data=="fail"){
				smsWarning("验证失败，一个手机验证码只能使用一次，请重新获取");
			}else if(data=="expire"){
				smsWarning("验证失败，手机验证码已经过期，请重新获取");
			}else if(data=="nomatch"){
				smsWarning("验证失败，验证码发送手机与当前绑定手机不符");
			}else if(data=="nomatchcode"){
				smsWarning("验证失败，手机验证码错误");
			}else {
				smsWarning("验证失败,未知异常，请尝试重新验证");
			}
		})

}
*/
function smsWarning(content,flag){
	var parentDIv = jQuery("[name='sms_code']").parents(".verifyDiv");
	parentDIv.find(".sms-warning").html("");
	parentDIv.find(".btn-warning").html("");
	if(content==""){
		return false;
	}
	if(flag=="1"){
		parentDIv.find(".sms-warning").html("<span style='color:green;'>"+content+"...</span>");
	}else {
		parentDIv.find(".btn-warning").html(content);
	}
}

function init_usermange_detail(){
	if(jQuery("#usermanage_container").length <= 0) return;

	if (typeof window['_init_usermange_detail'] !== 'function'){
		jQuery.getScript("/FeiEditor/bitSite/js/users.js").done(function() {
			_init_usermange_detail();
		})
	}else{
		_init_usermange_detail();
	}
}

function chang_city_init(){
	// wc_country_select_params is required to continue, ensure the object exists
	if (typeof wc_country_select_params === "undefined")
		return false;

	/* State/Country select boxes */
	var states_json = wc_country_select_params.countries.replace(/&quot;/g, '"');
	var states = $.parseJSON( states_json );

	$('select.country_to_state, input.country_to_state').change(function(){
		var country = $(this).val();

		var $statebox = $(this).closest('div').find('#billing_state, #shipping_state, #calc_shipping_state');
		var $parent = $statebox.parent();

		var input_name = $statebox.attr('name');
		var input_id = $statebox.attr('id');
		var value = $statebox.val();
		var placeholder = $statebox.attr('placeholder');

		if (states[country]) {
			if (states[country].length == 0) {

				$statebox.parent().hide().find('.chosen-container').remove();
				$statebox.replaceWith('<input type="hidden" class="hidden" name="' + input_name + '" id="' + input_id + '" value="" placeholder="' + placeholder + '" />');

				$('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

			} else {

				var options = '';
				var state = states[country];
				for(var index in state) {
					options = options + '<option value="' + index + '">' + state[index] + '</option>';
				}
				$statebox.parent().show();
				if ($statebox.is('input')) {
					// Change for select
					$statebox.replaceWith('<select name="' + input_name + '" id="' + input_id + '" class="state_select" placeholder="' + placeholder + '"></select>');
					$statebox = $(this).closest('div').find('#billing_state, #shipping_state, #calc_shipping_state');
				}
				$statebox.html( '<option value="">' + wc_country_select_params.i18n_select_state_text + '</option>' + options);

				$statebox.val(value);

				$('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

			}
		} else {
			if ($statebox.is('select')) {

				$parent.show().find('.chosen-container').remove();
				$statebox.replaceWith('<input type="text" class="input-text" name="' + input_name + '" id="' + input_id + '" placeholder="' + placeholder + '" />');

				$('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

			} else if ($statebox.is('.hidden')) {

				$parent.show().find('.chosen-container').remove();
				$statebox.replaceWith('<input type="text" class="input-text" name="' + input_name + '" id="' + input_id + '" placeholder="' + placeholder + '" />');

				$('body').trigger('country_to_state_changed', [country, $(this).closest('div')]);

			}
		}

		$('body').trigger('country_to_state_changing', [country, $(this).closest('div')]);

	}).change();
	
}


function qfy_secode_check(obj){
	var form = jQuery(obj).closest("form");	
	var code = form.find("[name='secode']").val();
	var imagecode = form.find("[name='secode_check']").val();
	form.find(".qfyuser-warning,.qfyuser-success").remove();

	form.find(".qfyuser-loading").show().addClass('inline');
	jQuery.ajax({
			type: "POST",
	        url:"/admin/admin-ajax.php",
			dataType: "JSON",
			data:{"action":"secode_check","code":code,"imagecode":imagecode},
			error: function(request) {
				form.find(".qfyuser-loading").hide().removeClass('inline');
				console.log("Connent error");
			},
			success:function(data){
				
				form.find(".imageCodeClass").click();
				form.find(".qfyuser-loading").hide().removeClass('inline');
				if(data.status && data.key=="secodeinfo"){
					form.find("[name='secode_check']").val("");
					form.find("#secodeinfo").html("<div class='qfyuser-success' style='color:green;'>"+data.msg+"</div>");
					var bz_size = form.find("#secodeinfo").attr("data-bz_size");
					if(bz_size) form.find("#secodeinfo .comment_content").css("font-size",bz_size+"px");
					var bz_color = form.find("#secodeinfo").attr("data-bz_color");
					if(bz_color) form.find("#secodeinfo .comment_content").css("color",bz_color);
					var bzdate_color = form.find("#secodeinfo").attr("data-bzdate_color");
					if(bzdate_color) form.find("#secodeinfo .comment_date").css("color",bzdate_color);
					var bzdate_size = form.find("#secodeinfo").attr("data-bzdate_size");
					if(bzdate_size) form.find("#secodeinfo .comment_date").css("font-size",bzdate_size+"px");
					
					
				}else if(data.status && data.status=="error"){
						if(data.key!="secode_check"){
							form.find("[name='secode_check']").val("");
						}
						var element1 = form.find("."+data.key);
						if (element1.parent().find('.qfyuser-warning').length==0 ) {
							element1.addClass('warning').removeClass('ok');
							element1.after('<div class="qfyuser-warning"><i class="qfyuser-icon-caret-up"></i>'+data.msg+'</div>');
							element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
						} else {
							element1.parent().find('.qfyuser-warning').html('<i class="qfyuser-icon-caret-up"></i>'+data.msg );
							element1.parent().find('.qfyuser-warning').css({'top' : '0px', 'opacity' : '1'});
						}
				}else if(data.status && data.status=="success"){
					form.find("[name='secode_check']").val("");
					form.find("#secodeinfo").html("<div class='qfyuser-success' style='color:green;'>"+data.msg+"</div>");
				}
			}
	});
}

if(typeof(position_follow_function)!='function'){
	function position_follow_function(){
		//手机，编辑，自由区块不适用。添加类position-follow
		if(is_edit_model){
			return;
		}
		 var body_width = jQuery("body").width();
		setTimeout(function(){
			jQuery(".position-follow").each(function(){
				
				var is_run = true;
				if(jQuery(this).hasClass("mobile_follow") && body_width>992){
					is_run = false;
				}else if(body_width<992 && !jQuery(this).hasClass("mobile_follow") && !jQuery(this).hasClass("all_follow")){
					//default pc follow
					is_run = false;
				}
				var $this = this;
				if(jQuery(this).hasClass("qfy-column-inner")){
					$this = jQuery(this).find(">.column_inner")[0];
				}
				if(is_run && jQuery(this).closest(".section-special").length==0){
					var scrTop_init = 0,scrtop_isMoved = false,scrtop_isMoved2 = false;
					var scrtop_threshold = jQuery($this).offset().top;
					var scrtop_threshold_left = jQuery($this).offset().left;
					var scrtop_threshold_width =  jQuery($this).width();
					var scrtop_threshold_height =  jQuery($this).height();
					var scrtop_bottom =  jQuery("#footer").offset().top*1 -  scrtop_threshold_height*1;
					var phantom_height = 0;
					if(jQuery("#phantom").length>0){
						phantom_height = jQuery("#phantom").height()+10;
						scrtop_threshold =scrtop_threshold -  phantom_height;
						scrtop_bottom = scrtop_bottom - phantom_height;
					}
					if(jQuery(".dl-menu-fixedheader").length>0){
						phantom_height = jQuery(".dl-menu-fixedheader").height();
						scrtop_threshold =scrtop_threshold -  phantom_height;
						scrtop_bottom = scrtop_bottom - phantom_height;
					}
				
					jQuery(window).on("scroll", function() {
					  var scrtop_tempScrTop = jQuery(window).scrollTop();
					  if (scrtop_tempScrTop > scrtop_threshold && scrtop_isMoved === false) {
						  scrtop_isMoved = true;
						  jQuery($this).addClass("positionfixed0").width(scrtop_threshold_width).height(scrtop_threshold_height).css("top",phantom_height+"px").css("left",scrtop_threshold_left+"px");
						  jQuery($this).parent().css("min-height",scrtop_threshold_height+"px");
						  jQuery($this).closest("section.section").addClass("positionfixedTopindex");
					  }else if ( scrtop_tempScrTop <=  scrtop_threshold &&  scrtop_isMoved === true) {
						  scrtop_isMoved = false;
						  jQuery($this).removeClass("positionfixed0").css("top","0").css("left","0");
						  jQuery($this).closest("section.section").removeClass("positionfixedTopindex");
					  };
					  if (scrtop_tempScrTop > scrtop_bottom ) {
						  scrtop_isMoved2 = true;
						  jQuery($this).css("top",scrtop_bottom-scrtop_tempScrTop);
						
					  }else if ( scrtop_tempScrTop <=  scrtop_bottom &&  scrtop_isMoved2 === true) {
						  scrtop_isMoved2 = false;
						  jQuery($this).css("top",phantom_height+"px");
					  };
					 
					});
				}
			});
			if(	jQuery(".position-follow").length>0){
				jQuery(window).on("scroll");
			}
		},300);
	}

}

var pop_scrollTop = 0;
function pop_stopScroll() {
	if( jQuery(window).width()>760){
		return;
	}

	pop_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	// 使body脱离文档流
	jQuery("body").addClass('dialog-open');
	jQuery("body").css('top',-pop_scrollTop + 'px');
}

function pop_recoverScroll() {
	if( jQuery(window).width()>760){
		return;
	}
	jQuery("body").removeClass('dialog-open');
	document.body.scrollTop = document.documentElement.scrollTop = pop_scrollTop;
}

;

/* thickbox: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	jQuery('body').on('click', domChunk, tb_click);
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='60' /></div>");//add loader to the page

		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 50;
			var y = pagesize[1] - 20;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='"+thickboxL10n.close+"'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				e.stopImmediatePropagation();

				if ( e.which == 27 ){ // close
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keyup.thickbox', function(e){

				if ( e.which == 27 ){ // close
					e.stopImmediatePropagation();
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

					return false;
				}
			});
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'});
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
	
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}
;

/* jquery-lazy: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-includes/js/jquery.lazy.min.js) */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);;

/* ts_vcsc: (http://w-60772-71652-72385.4752133136.sites.hk37.qifeiye.com/qfy-content/themes/qfy-01/js/ts_vcsc.js) */
/**
 * 
 */
function TS_VCSC_IsTouchDevice(){return!!("ontouchstart"in window)||!!("onmsgesturechange"in window)}function TS_VCSC_SimulateTouchEvents(t,e){var a=jQuery;return a(t)[0]?(window.__touchTypes||(window.__touchTypes={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},window.__touchInputs={INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,input:1,textarea:1,select:1,option:1}),a(t).bind("touchstart touchmove touchend",function(t){var i=t.target===this;if(!e||i){var r=!i&&t.target.__ajqmeclk,s=t.originalEvent;if(r!==!0&&s.touches&&!(s.touches.length>1)&&window.__touchTypes[s.type]){var n=i||"boolean"==typeof r?!1:a(t.target).data("events");if(r=i?!1:t.target.__ajqmeclk=n?n.click||n.mousedown||n.mouseup||n.mousemove:!1,!r&&!window.__touchInputs[t.target.tagName]){var o=s.changedTouches[0],d=document.createEvent("MouseEvent");d.initMouseEvent(window.__touchTypes[s.type],!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(d),s.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault()}}}}),!0):!1}function TS_VCSC_isPortrait(){return window.innerHeight>window.innerWidth}function TS_VCSC_isLandscape(){return 90===window.orientation||-90===window.orientation||270===window.orientation}function TS_VCSC_Countdown_Degrees(t){return Math.PI/180*t-Math.PI/2}function TS_VCSC_Countdown_DrawCircle(t,e,a,i,r,s){var n=t.getContext("2d");null!=n&&null!=t&&(n.clearRect(0,0,t.width,t.height),n.lineWidth=s,n.beginPath(),n.arc(t.width/2,t.height/2,t.width/2-n.lineWidth,TS_VCSC_Countdown_Degrees(0),TS_VCSC_Countdown_Degrees(360/a*(a-e)),!1),n.strokeStyle=i,n.stroke(),n.beginPath(),n.arc(t.width/2,t.height/2,t.width/2-n.lineWidth,TS_VCSC_Countdown_Degrees(0),TS_VCSC_Countdown_Degrees(360/a*(a-e)),!0),n.strokeStyle=r,n.stroke())}function TS_VCSC_Countdown_SetBar(t,e,a){barWidth=100-100/a*e,t.width(barWidth+"%")}function TS_VCSC_Countdown_Animate(t){t.each(function(){var t=jQuery(this),e=t.text(),a=t.attr("data-value"),i=t.attr("data-old");"undefined"==typeof i&&t.attr("data-old",e),e!=a&&(t.attr("data-value",e).attr("data-old",a).addClass("animate"),window.setTimeout(function(){t.removeClass("animate").attr("data-old",e)},300))})}function TS_VCSC_Countdown_Animate3D(t){t.each(function(){var t=jQuery(this),e=t.find(".ce-flip-front"),a=t.find(".ce-flip-back"),i=a.text(),r=t.attr("data-old");"undefined"==typeof r&&t.attr("data-old",i),i!=r&&(t.addClass("animate"),window.setTimeout(function(){e.text(i),t.removeClass("animate").attr("data-old",i)},800))})}function TS_VCSC_GetBasicRoman(t){for(var e="",a=0,i=0;i<roman.length&&0!=t;i++)for(;t>=decimal[i];)t-=decimal[i],e+=roman[i],"M"==roman[i]&&a++;return{numThousands:a,romanNumeral:e}}function TS_VCSC_DecimalToRoman(t){if(0>=t||t>3888888)return t;var e=TS_VCSC_GetBasicRoman(t);if(e.numThousands>4){for(var a="",i=0;i<e.numThousands;i++)a+="M";var r=TS_VCSC_GetBasicRoman(e.numThousands),s="<span style='border-top:1px solid #000'>"+r.romanNumeral+"</span>";romanNumeral=e.romanNumeral.replace(a,s)}else romanNumeral=e.romanNumeral;return romanNumeral}function TS_VCSC_CodeToCharacter(t){for(var e="";t>=0;)e=String.fromCharCode(t%26+97)+e,t=Math.floor(t/26)-1;return e}"ontouchstart"in document.documentElement||(document.documentElement.className+=" no-touch"),jQuery.exists=function(t){return jQuery(t).length>0},jQuery.fn.reverse=[].reverse;var TS_VCSC_MobileDevice=!1,TS_VCSC_Amaran_Overlay="",TS_VCSC_Supports3D=function(){if(document.body&&void 0!==document.body.style.perspective)return!0;var t=document.createElement("div"),e=t.style,a=["Webkit","Moz","O","Ms","ms"],i=a.length;if(void 0!==t.style.perspective)return!0;for(;--i>-1;)if(void 0!==e[a[i]+"Perspective"])return!0;return!1}();!function(t){var e=/iPhone/i,a=/iPod/i,i=/iPad/i,r=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,n=/IEMobile/i,o=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,u=/BB10/i,l=/Opera Mini/i,c=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),p=function(t,e){return t.test(e)},m=function(t){var m=t||navigator.userAgent;return this.apple={phone:p(e,m),ipod:p(a,m),tablet:p(i,m),device:p(e,m)||p(a,m)||p(i,m)},this.android={phone:p(r,m),tablet:!p(r,m)&&p(s,m),device:p(r,m)||p(s,m)},this.windows={phone:p(n,m),tablet:p(o,m),device:p(n,m)||p(o,m)},this.other={blackberry:p(d,m),blackberry10:p(u,m),opera:p(l,m),firefox:p(c,m),device:p(d,m)||p(u,m)||p(l,m)||p(c,m)},this.seven_inch=p(h,m),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},f=function(){var t=new m;return t.Class=m,t};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=m:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=f():"function"==typeof define&&define.amd?define(t.TS_VCSC_isMobile=f()):t.TS_VCSC_isMobile=f(),TS_VCSC_MobileDevice=TS_VCSC_isMobile.apple.phone||TS_VCSC_isMobile.apple.ipod||TS_VCSC_isMobile.android.phone||TS_VCSC_isMobile.windows.phone?!0:TS_VCSC_isMobile.apple.tablet||TS_VCSC_isMobile.android.tablet||TS_VCSC_isMobile.windows.tablet||TS_VCSC_isMobile.seven_inch?!0:!1}(this),function(t){t.fn.alterClass=function(e,a){var i=this;if(-1===e.indexOf("*"))return i.removeClass(e),a?i.addClass(a):i;var r=new RegExp("\\s"+e.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(e,a){for(var i=" "+a.className+" ";r.test(i);)i=i.replace(r," ");a.className=t.trim(i)}),a?i.addClass(a):i},t.fn.moveTo=function(e){return this.each(function(){var a=t(this).clone();t(a).appendTo(e),t(this).remove()})},t.fn.unwrapUntil=function(){var e=arguments[0],a=typeof arguments[0];return"number"===a?t.each(this,function(){for(var a=t(this),i=0;e>i;i++)a.unwrap()}):"string"===a?t.each(this,function(){var a=t(this);if(a.closest(e).length>0)for(;0===a.parent(e).length;)a.unwrap()}):"object"===a&&t.each(this,function(){var a=t(this);if(a.closest(e).length>0)for(;a.parent()[0]!==e[0];)a.unwrap()}),this},t.fn.hasDataSet=function(e){return"undefined"!=typeof t(this).data(e)};var e=0;t.fn.translate3d=function(a,i,r,s){var n=t.speed(i,r,s);return n.easing=n.easing||"ease",a=t.extend({x:0,y:0,z:0},a),this.each(function(){var i=t(this);i.css({transitionDuration:n.duration+"ms",transitionTimingFunction:n.easing,transform:"translate3d("+a.x+"px, "+a.y+"px, "+a.z+"px)"}),setTimeout(function(){i.css({transitionDuration:"0s",transitionTimingFunction:"ease"}),n.complete()},n.duration+(e||0))})}}(jQuery);var TS_VCSC_Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,a,i,r,s,n,o,d="",u=0;for(t=TS_VCSC_Base64._utf8_encode(t);u<t.length;)e=t.charCodeAt(u++),a=t.charCodeAt(u++),i=t.charCodeAt(u++),r=e>>2,s=(3&e)<<4|a>>4,n=(15&a)<<2|i>>6,o=63&i,isNaN(a)?n=o=64:isNaN(i)&&(o=64),d=d+this._keyStr.charAt(r)+this._keyStr.charAt(s)+this._keyStr.charAt(n)+this._keyStr.charAt(o);return d},decode:function(t){var e,a,i,r,s,n,o,d="",u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)r=this._keyStr.indexOf(t.charAt(u++)),s=this._keyStr.indexOf(t.charAt(u++)),n=this._keyStr.indexOf(t.charAt(u++)),o=this._keyStr.indexOf(t.charAt(u++)),e=r<<2|s>>4,a=(15&s)<<4|n>>2,i=(3&n)<<6|o,d+=String.fromCharCode(e),64!=n&&(d+=String.fromCharCode(a)),64!=o&&(d+=String.fromCharCode(i));return d=TS_VCSC_Base64._utf8_decode(d)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",a=0;a<t.length;a++){var i=t.charCodeAt(a);128>i?e+=String.fromCharCode(i):i>127&&2048>i?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e},_utf8_decode:function(t){for(var e="",a=0,i=c1=c2=0;a<t.length;)i=t.charCodeAt(a),128>i?(e+=String.fromCharCode(i),a++):i>191&&224>i?(c2=t.charCodeAt(a+1),e+=String.fromCharCode((31&i)<<6|63&c2),a+=2):(c2=t.charCodeAt(a+1),c3=t.charCodeAt(a+2),e+=String.fromCharCode((15&i)<<12|(63&c2)<<6|63&c3),a+=3);return e}};!function(t){t.fn.picstrips=function(e){var a=t.extend({splits:8,hgutter:"10px",vgutter:"60px",bgcolor:"#fff"},e);return this.each(function(){function e(){var e=i(r,null);t(r).show(),e=i(r,e)}function i(e,i){var r=t(e).height(),s=t(e).width(),n=parseInt(a.hgutter,10),o=(s-n*a.splits)/a.splits,d="position: relative; float:left; margin-right: "+a.hgutter+"; background-image: url("+e.src+"); width: "+o+"px; height: "+r+"px; background-size: auto "+r+"px; ",u="position: absolute; left: 0px; width: "+o+"px; height: "+a.vgutter+"; background-color: "+a.bgcolor+"; top: ",l="position: relative; float:left; background-image: url("+e.src+"); width: "+o+"px; height: "+r+"px; background-size: auto "+r+"px; ";i&&i.remove();var c=t("[id^=molbars_]").length+1;i=t('<div id="molbars_'+c+'" class="molbars"></div>'),i.insertAfter(t(e));for(var h=0,p=0;p<a.splits;p++){var m=p%2!==0?"0px":r-parseInt(a.vgutter,10)+"px";d+=" background-position: -"+h+"px 100%;",l+=" background-position: -"+h+"px 100%;",p===a.splits-1?t('<div style="'+l+'"><span style="'+u+m+'"></span></div>').appendTo(i):t('<div style="'+d+'"><span style="'+u+m+'"></span></div>').appendTo(i),h+=o+n}return t(e).hide(),i}var r=this;if(this.complete&&this.width+this.height!==0)e();else{var s=new Image;s.src=this.src,t(s).load(function(){e()})}})}}(jQuery),function(t){"use strict";function e(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}function a(t,a){this.el=t,this.options=e({},this.options),e(this.options,a),this._init()}a.prototype.options={start:0},a.prototype._init=function(){this.tabs=this.el.find("nav > ul > li"),this.items=this.el.find(".content-wrap > section"),this.current=-1,0!=this.tabs.length&&(this._show(),this._initEvents())},a.prototype._initEvents=function(){var t=this;this.el.find("nav > ul > li").each(function(){var e=jQuery(this).attr("data-order");jQuery(this).on("click touchstart",function(a){a.preventDefault(),t._show(e)})})},a.prototype._show=function(t){this.current>=0&&(this.tabs[this.current].className=this.items[this.current].className=""),this.current=void 0!=t?t:this.options.start>=0&&this.options.start<this.items.length?this.options.start:0,this.tabs[this.current].className="tab-current",this.items[this.current].className="content-current"},t.TS_VCVSC_CBPFWTabs=a}(window),function(t){t.fn.addBack=t.fn.addBack||t.fn.andSelf,t.fn.extend({actual:function(e,a){if(!this[e])throw'$.actual => The jQuery method "'+e+'" you called does not exist';var i,r,s={absolute:!1,clone:!1,includeMargin:!1},n=t.extend(s,a),o=this.eq(0);if(n.clone===!0)i=function(){var t="position: absolute !important; top: -1000 !important; ";o=o.clone().attr("style",t).appendTo("body")},r=function(){o.remove()};else{var d,u=[],l="";i=function(){d=o.parents().addBack().filter(":hidden"),l+="visibility: hidden !important; display: block !important; ",n.absolute===!0&&(l+="position: absolute !important; "),d.each(function(){var e=t(this),a=e.attr("style");u.push(a),e.attr("style",a?a+";"+l:l)})},r=function(){d.each(function(e){var a=t(this),i=u[e];void 0===i?a.removeAttr("style"):a.attr("style",i)})}}i();var c=/(outer)/.test(e)?o[e](n.includeMargin):o[e]();return r(),c}})}(jQuery);var roman=new Array;roman=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];var decimal=new Array;decimal=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],function(t){function e(){jQuery(".ts-background").each(function(){if("false"==jQuery(this).attr("data-inline")){var e="true"==jQuery(this).attr("data-vc-full-width")?!0:!1,a=0,i=(jQuery(window).width(),"true"==jQuery(this).attr("data-svgshape")?!0:!1,parseInt(jQuery(this).attr("data-random")),jQuery(this).attr("data-type")),r=jQuery(this).attr("data-height"),s=jQuery(this).attr("data-screen"),n=parseInt(jQuery(this).attr("data-offset")),o=jQuery(this).hasClass("ts-background-blur");if(o)var d=parseInt(jQuery(this).attr("data-blur"));else var d=0;if("undefined"==typeof jQuery(this).attr("data-break-parents")||1==e)return;var u=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(u)||0==u&&"video"!=i)return;"movement"==i?($horizontalAdjust=parseInt(jQuery(this).attr("data-movex")),$verticalAdjust=parseInt(jQuery(this).attr("data-movey"))):($horizontalAdjust=0,$verticalAdjust=0);for(var l=jQuery(this).parent(),c=l,h=0;u>h&&!c.is("html");h++)c=c.parent(),"none"!=c.css("max-width")&&(a=parseInt(c.css("max-width").replace("px","").replace("%","").replace("em","")));var p=(c.width()+parseInt(c.css("paddingLeft"))+parseInt(c.css("paddingRight"))+parseInt(c.css("marginLeft"))+parseInt(c.css("marginRight")),-(l.offset().left-c.offset().left+1));if(p>0&&(p=0),jQuery(this).css("min-height","0px"),$heightMin=jQuery(this).parent().outerHeight(),$heightBrowser=t(window).height()-n,$widthMin=c.outerWidth(),$heightMin>parseInt(r));else{parseInt(r)}if("true"==s&&($heightMin=$heightBrowser),jQuery(this).addClass("fullwidth"),jQuery(this).css({position:"absolute","min-height":$heightMin+"px",width:$widthMin+d+"px","min-width":$widthMin+d+"px",left:parseInt(p)-d+"px"}),d>0&&jQuery(this).css({clip:"rect("+d+"px, "+($widthMin+d)+"px, "+$heightMin+"px, "+d+"px)"}),jQuery(this).attr("data-set-height",$heightMin),jQuery(this).attr("data-set-width",$widthMin+d),jQuery(this).attr("data-set-ratio",($widthMin+d)/$heightMin),"true"==s?l.addClass("fullwidth").css("min-height",parseInt($heightMin)+"px"):l.addClass("fullwidth").css("min-height",parseInt(r)+"px"),"video"==i){var m=$widthMin+d,f=$heightMin;jQuery(this).find(".ts-background-video-holder").width(m),jQuery(this).find(".ts-background-video-holder").height(f),jQuery(this).find(".ts-background-video-holder").find(".wallpaper-container").width(m).height(f),jQuery(this).find(".ts-background-video-holder").find("video").width(m)}if("movement"==i){var g=jQuery(this).width(),y=jQuery(this).height(),v=g/y,j=$widthMin+2*$horizontalAdjust*v,Q=-1*parseInt(jQuery(this).css("left"));jQuery(this).width(j).css("left","-"+(Q+$horizontalAdjust)+"px").css("max-width",j+"px")}}})}function i(){jQuery(".ts-image-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0),a="true"==jQuery(this).attr("data-svgshape")?!0:!1,i=parseInt(jQuery(this).attr("data-random")),r=jQuery(this).hasClass("ts-background-blur");if(r)var s=parseInt(jQuery(this).attr("data-blur")),n=1;else var s=0,n=0;if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var o=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(o)||0==o)return;jQuery(this).hasClass("ts-image-full-movement")?($horizontalAdjust=parseInt(jQuery(this).attr("data-movex")),$verticalAdjust=parseInt(jQuery(this).attr("data-movey")),jQuery(this).find("img.ts-imagefull").width("100%")):($horizontalAdjust=0,$verticalAdjust=0);for(var d=jQuery(this).parent(),u=d,l=0;o>l&&!u.is("html");l++)u=u.parent(),"none"!=u.css("max-width")&&(t=parseInt(u.css("max-width").replace("px","").replace("%","").replace("em","")));var c=(u.width()+parseInt(u.css("paddingLeft"))+parseInt(u.css("paddingRight"))+parseInt(u.css("marginLeft"))+parseInt(u.css("marginRight")),-(d.offset().left-u.offset().left+1)-parseInt(d.css("marginLeft"))-parseInt(d.css("paddingLeft")));if(c>0&&(c=0),$heightMin=jQuery(this).find("img.ts-imagefull").height(),$widthMin=u.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}if(jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px"}),s>0&&jQuery(this).css({clip:"rect("+s+"px, "+($widthMin+s)+"px, "+$heightMin+"px, "+s+"px)"}),jQuery(this).hasClass("ts-image-full-movement")){var h=jQuery(this).find("img.ts-imagefull").width(),p=jQuery(this).find("img.ts-imagefull").height(),m=h/p,f=$widthMin+2*$horizontalAdjust*m;jQuery(this).find("img.ts-imagefull").width(f).css("left","-"+$horizontalAdjust+"px").css("max-width",f+"px"),$horizontalAdjust=jQuery(this).find("img.ts-imagefull").height()-p,jQuery(this).find("img.ts-imagefull").css("top","-"+$horizontalAdjust/2+"px")}a&&(jQuery("#ts-background-separator-top-"+i).css({position:"absolute",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px","margin-top":-1-s-n+"px"}),jQuery("#ts-background-separator-bottom-"+i).css({position:"absolute",width:$widthMin+s+"px","min-width":$widthMin+s+"px",left:parseInt(c)-s+"px","margin-bottom":-1-s-n+"px"}))}})}function r(){jQuery(".ts-iframe-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0),a=2*parseInt(jQuery(this).attr("data-border"));if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var i=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(i)||0==i)return;for(var r=jQuery(this).parent(),s=r,n=0;i>n&&!s.is("html");n++)s=s.parent(),"none"!=s.css("max-width")&&(t=parseInt(s.css("max-width").replace("px","").replace("%","").replace("em","")));var o=(s.width()+parseInt(s.css("paddingLeft"))+parseInt(s.css("paddingRight"))+parseInt(s.css("marginLeft"))+parseInt(s.css("marginRight")),-(r.offset().left-s.offset().left+1)-parseInt(r.css("marginLeft"))-parseInt(r.css("paddingLeft")));if(o>0&&(o=0),$heightMin=0,$widthMin=s.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin-a+"px","min-width":$widthMin-a+"px",left:parseInt(o)+"px"})}})}function s(){jQuery(".ts-lightbox-nacho-full-frame").each(function(){if("false"==jQuery(this).attr("data-inline")){var t=0,e=(jQuery(window).width(),0);if("undefined"==typeof jQuery(this).attr("data-break-parents"))return;var a=parseInt(jQuery(this).attr("data-break-parents"));if(isNaN(a)||0==a)return;for(var i=jQuery(this).parent(),r=i,s=0;a>s&&!r.is("html");s++)r=r.parent(),"none"!=r.css("max-width")&&(t=parseInt(r.css("max-width").replace("px","").replace("%","").replace("em","")));var n=(r.width()+parseInt(r.css("paddingLeft"))+parseInt(r.css("paddingRight"))+parseInt(r.css("marginLeft"))+parseInt(r.css("marginRight")),-(i.offset().left-r.offset().left+1)-parseInt(i.css("marginLeft"))-parseInt(i.css("paddingLeft")));if(n>0&&(n=0),$heightMin=0,$widthMin=r.outerWidth(),$heightMin>parseInt(e));else{parseInt(e)}jQuery(this).addClass("fullwidth"),jQuery(this).css({"min-height":$heightMin+"px",width:$widthMin+"px","min-width":$widthMin+"px",left:parseInt(n)+"px"})}})}t(document).ready(function(){function n(){jQuery(".ts-skillset-raphael-container").each(function(){var t=jQuery(this).find("svg");0!=t.length&&(t.children().off().unbind(),t.off().remove());var e=jQuery(this).find(".ts-skillset-raphael-chart"),i=e.attr("data-raphael"),r=e.parent().width(),s=r/2,n="true"==e.attr("data-randomstart")?!0:!1,o="true"==e.attr("data-circlecustom")?!0:!1;if(o)var d=e.attr("data-circlecolor");else var d="none";var u=e.attr("data-textcolor"),l=e.attr("data-textdefault"),c=parseInt(e.attr("data-textsize")),h=parseInt(e.attr("data-maxstroke")),p=parseInt(e.attr("data-spacestroke")),m=l,f=140,g=250,v=20,j=Raphael(i,r,r);j.customAttributes.arc=function(t,e,i){var r=3.6*t,o=360==r?359.99:r;if(n)var d=240,u=91;else var d=0,u=0;return random=Math.floor(Math.random()*(d-u+1)+u),a=(random-o)*Math.PI/180,b=random*Math.PI/180,sx=s+i*Math.cos(b),sy=s-i*Math.sin(b),x=s+i*Math.cos(a),y=s-i*Math.sin(a),path=[["M",sx,sy],["A",i,i,0,+(o>180),1,x,y]],{path:path,stroke:e}};var Q=(j.circle(s,s,f/2).attr({stroke:"none",fill:d}),j.text(s,s,m).attr({font:c+"px Verdana",fill:u}).toFront()),w=jQuery(this).find(".ts-skillset-raphael-arch").length;if(p>0)var C=(w+1)*p+v/2;else var C=w+5;var _=Math.floor((r-f)/2),k=Math.floor((_-C)/w);k>h&&(k=h);var I=k+p,S=f/2-k/2;jQuery(this).find(".ts-skillset-raphael-arch").each(function(){var t=jQuery(this),e=t.find(".color").val(),a=t.find(".percent").val(),i=t.find(".name").val(),r={"stroke-width":k};S+=I;var s=j.path().attr(r).attr({arc:[a,e,S]});s.mouseover(function(){this.animate({"stroke-width":k+v,opacity:.9},800,"elastic"),"VML"!=Raphael.type&&this.toFront(),Q.stop().animate({opacity:0},g,">",function(){this.attr({text:i+"\n"+a+"%"}).animate({opacity:1},g,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":k,opacity:1},4*g,"elastic"),Q.stop().animate({opacity:0},g,">",function(){Q.attr({text:m}).animate({opacity:1},g,"<")})})})})}function o(){jQuery(".ts-figure-navigation-container").each(function(){var t="true"==jQuery(this).attr("data-frontend")?!0:!1,e=jQuery(this).width(),a=parseInt(jQuery(this).attr("data-minwidth")),i="true"==jQuery(this).attr("data-widthfull")?!0:!1,r=jQuery(this).find(".ts-figure-navigation-item").length,s=a*r;if(0==t)if(s>e&&i===!1){for(var n=0;r>n;n++)if(e>=(r-n)*a){$itemwidth=100/(r-n),jQuery(this).find(".ts-figure-navigation-item").css("width",$itemwidth+"%").attr("data-width",$itemwidth);break}}else a>e||i===!0?jQuery(this).find(".ts-figure-navigation-item").css("width","100%").attr("data-width","100"):($itemwidth=100/r,jQuery(this).find(".ts-figure-navigation-item").css("width",$itemwidth+"%").attr("data-width",$itemwidth));else jQuery(this).find(".ts-figure-navigation-item").css("width","100%").attr("data-width","100");jQuery(this).find(".ts-figure-navigation-item").each(function(){if(jQuery(this).hasClass("ts-figure-navigation-hover")){var t=jQuery(this),e=(t.attr("data-frontend"),t.attr("data-group"),t.find(".ts-figure-navigation-title")),a=t.find(".ts-figure-navigation-image"),i=t.find(".ts-figure-navigation-handle"),r=t.find(".ts-figure-navigation-content"),s=t.find(".ts-figure-navigation-button");t.css("height","100px"),r.css("height","auto");var n=e.outerHeight(!0)+a.outerHeight(!0)+i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0);t.css("height",n+"px");var o=t.find(".ts-figure-navigation-image").height();r.css("height",r.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:o+"px"}),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}})})}function d(){jQuery(".ts-horizontal-steps").each(function(){var t=jQuery(this),e="true"==t.attr("data-frontend")?!0:!1,a=t.width(),i=parseInt(t.attr("data-lastwidth")),r=0,s=0,n=parseInt(t.attr("data-minwidth")),o=parseInt(t.attr("data-iconsize")),d=parseInt(t.attr("data-iconmax")),u=t.find(".ts-horizontal-steps-item").length,l=n*u,c=t.find(".ts-horizontal-steps-item"),h=t.find(".ts-horizontal-step-icon"),p=0,m=0,f=0,g=0,y=[],v=[],j=!1;if(1==e);else if(a!=i){if(t.attr("data-lastwidth",a),c.css("height","auto"),l>a){for(var Q=0;u>Q;Q++)if(a>=(u-Q)*n){r=100/(u-Q),s=a/100*r/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,p=a/100*r,t.find(".ts-horizontal-steps-item").css("width",Math.floor(a/100*r)+"px").attr("data-width",Math.floor(a/100*r)),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon").css("width",s+"px").css("height",s+"px"),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon i").css("line-height",s+"px").css("font-size",$height_icon+"px"),t.find(".ts-horizontal-steps-item").find(".ts-horizontal-step-icon img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px");break}}else n>a?(p=a,s=a/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,c.css("width","100%").attr("data-width","100"),h.css("width",s+"px").css("height",s+"px"),h.find("i").css("line-height",s+"px").css("font-size",$height_icon+"px"),h.find("img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px")):(r=100/u,s=a/100*r/100*75,$height_icon=s*o>d?d:s*o,$margin_image=(s-$height_icon)/2,p=a/100*r,c.css("width",Math.floor(a/100*r)+"px").attr("data-width",Math.floor(a/100*r)),h.css("width",s+"px").css("height",s+"px"),h.find("i").css("line-height",s+"px").css("font-size",$height_icon+"px"),h.find("img").css("height",$height_icon+"px").css("width",$height_icon+"px").css("margin-top",$margin_image+"px"));setTimeout(function(){c.each(function(t){m+=jQuery(this).width(),m>a?(y.push(t),m=jQuery(this).width()):v.push(t)}),c.first().addClass("ts-horizontal-steps-first"),jQuery.each(y,function(t,e){c.eq(e-1).addClass("ts-horizontal-steps-break").addClass("ts-horizontal-steps-arrow")}),jQuery.each(v,function(t,e){c.eq(e-1).removeClass("ts-horizontal-steps-break").removeClass("ts-horizontal-steps-arrow")}),c.last().addClass("ts-horizontal-steps-break").addClass("ts-horizontal-steps-last"),t.find(".ts-horizontal-steps-break").length==u?(j=!0,c.css("height","auto").addClass("ts-horizontal-steps-full")):(j=!1,c.removeClass("ts-horizontal-steps-full"),jQuery.each(y,function(t,e){f=0,c.slice(g,e).each(function(){jQuery(this).height()>f&&(f=jQuery(this).height())}),c.slice(g,e).css("height",f+"px"),g=e}))},500)}})}function u(){jQuery(".ts-hover-effects-container").each(function(){var t=jQuery(this),e=t.find(".ts-hover-effects-grid"),a=t.find("figure");e.css("height","auto");var i=t.find("img");i.css("height","auto"),i.css("width","100%");var r=i.height(),s=i.width();e.height(r),a.hasClass("ts-hover-effect-lily")?i.width(s+50):a.hasClass("ts-hover-effect-layla")?i.height(r+40):a.hasClass("ts-hover-effect-roxy")||a.hasClass("ts-hover-effect-milo")?i.width(s+60):a.hasClass("ts-hover-effect-sarah")?i.width(s+20):a.hasClass("ts-hover-effect-lexi")&&i.width(s+15)})}function l(){[].slice.call(document.querySelectorAll(".ts-image-svg-main > .ts-image-svg-wrapper")).forEach(function(t){function e(){r.animate({path:d.to},s,o)}function a(){r.animate({path:d.from},s,o)}t.style.display="none";{var i=Snap(t.querySelector("svg")),r=i.select("path"),s=parseInt(t.getAttribute("data-speed")),n=t.getAttribute("data-easing");t.clientWidth,t.clientHeight}if("easeinout"==n)var o=mina.easeinout;else var o=mina.backout;var d={from:r.attr("d"),to:t.getAttribute("data-path-hover")};t.addEventListener("mouseenter",e,!1),t.addEventListener("touchstart",e,!1),t.addEventListener("touchenter",e,!1),t.addEventListener("mouseleave",a,!1),t.addEventListener("touchend",a,!1),t.addEventListener("touchleave",a,!1),t.style.display="block"})}jQuery(window).on("orientationchange",function(){}),jQuery(".ts-device-visibility").each(function(){var t=jQuery(this),e=t.next(),a=e.next();a.hasClass("vc_row-full-width")||(a=e);var i="true"==t.attr("data-showremove")?!0:!1,r=!1,s=!1,n="true"==t.attr("data-largeshow")?!0:!1,o=parseInt(t.attr("data-largelimit")),d="true"==t.attr("data-mediumshow")?!0:!1,u=parseInt(t.attr("data-mediumlimit")),l="true"==t.attr("data-smallshow")?!0:!1,c=parseInt(t.attr("data-smalllimit")),h="true"==t.attr("data-extrashow")?!0:!1,p=parseInt(t.attr("data-extralimit")),m=jQuery(window).width(),f=function(){m=jQuery(window).width(),m>=p&&c>m&&!h?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=c&&u>m&&!l?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=u&&o>m&&!d?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):m>=o&&!n?i&&!r?(e.off().remove(),a.off().remove(),t.off().remove(),r=!0):(e.addClass("ts-device-row-hidden"),a.addClass("ts-device-row-hidden"),jQuery(this).addClass("ts-device-row-hidden"),s=!0):(e.removeClass("ts-device-row-hidden"),a.removeClass("ts-device-row-hidden"),jQuery(this).removeClass("ts-device-row-hidden"),s=!1)};f(),jQuery(window).on("debouncedresize",function(){f()})}),jQuery(window).on("debouncedresize",function(){n()});var c=0;jQuery(document).on("mouseenter touchstart",".ts-figure-navigation-item-hover",function(){var t=jQuery(this),e=t.attr("data-frontend"),a=t.attr("data-group"),i=t.find(".ts-figure-navigation-title"),r=t.find(".ts-figure-navigation-image"),s=t.find(".ts-figure-navigation-handle"),n=t.find(".ts-figure-navigation-content"),o=t.find(".ts-figure-navigation-button"),d="true"==jQuery(this).attr("data-multiple")?!0:!1;if("false"==e){0==d&&jQuery(".ts-figure-navigation-hover.ts-figure-navigation-group"+a).trigger("mouseleave");var u=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);t.css("height",u+"px");var l=t.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:l+"px"}),t.addClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}}),jQuery(document).on("mouseleave touchend",".ts-figure-navigation-item-hover",function(){{var t=jQuery(this),e=t.attr("data-frontend");t.attr("data-group")}"false"==e&&(t.removeClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:0},100),t.find(".ts-figure-navigation-figure").css({height:"0px"}),t.css("height","100px"),t.find(".ts-figure-navigation-content").css("height","auto"))}),jQuery(document).on("click",".ts-figure-navigation-item-click",function(t){var e=jQuery(this),a=(e.attr("data-frontend"),e.attr("data-group")),i=e.find(".ts-figure-navigation-title"),r=e.find(".ts-figure-navigation-image"),s=e.find(".ts-figure-navigation-handle"),n=e.find(".ts-figure-navigation-content"),o=e.find(".ts-figure-navigation-button"),d="true"==jQuery(this).attr("data-multiple")?!0:!1;if(e.hasClass("ts-figure-navigation-hover")&&!jQuery(t.target).hasClass("ts-figure-navigation-button"))e.removeClass("ts-figure-navigation-hover"),e.find(".ts-figure-navigation-content").stop(!0).animate({opacity:0},100),e.find(".ts-figure-navigation-figure").css({height:"0px"}),e.css("height","100px"),e.find(".ts-figure-navigation-content").css("height","auto");else{0==d&&jQuery(".ts-figure-navigation-hover.ts-figure-navigation-group"+a).trigger("click");var u=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);e.css("height",u+"px");var l=e.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),e.find(".ts-figure-navigation-figure").css({height:l+"px"}),e.addClass("ts-figure-navigation-hover"),e.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}}),jQuery(".ts-figure-navigation-container").each(function(){c++;var t=(jQuery(this).find(".ts-figure-navigation-item").length,jQuery(this).attr("data-numbering")),e=parseInt(jQuery(this).attr("data-start")),a=jQuery(this).attr("data-trigger"),i="true"==jQuery(this).attr("data-multiple")?!0:!1,r=0+e-1;jQuery(this).find(".ts-figure-navigation-item").each(function(){jQuery(this).addClass("ts-figure-navigation-group"+c).addClass("ts-figure-navigation-item-"+a).attr("data-group",c).attr("data-multiple",i),jQuery(this).find(".ts-figure-navigation-handle-text").length>0&&(r++,"number"==t?$running=r:"roman"==t?$running=TS_VCSC_DecimalToRoman(r):"letter"==t&&($running=TS_VCSC_CodeToCharacter(r-1).toUpperCase()),jQuery(this).find(".ts-figure-navigation-handle-text").empty().html($running))})}),o(),jQuery(window).on("debouncedresize",function(){o()}),d(),jQuery(window).on("debouncedresize",function(){d()}),jQuery(window).on("debouncedresize",function(){u()}),"undefined"!=typeof jQuery.fn.waypoint?0==TS_VCSC_MobileDevice&&jQuery(".ts-textillate").waypoint({handler:function(){var t=jQuery(this).attr("data-in-effect"),e=jQuery(this).attr("data-in-sync"),a=jQuery(this).attr("data-in-shuffle"),i=jQuery(this).attr("data-in-reverse"),r=jQuery(this).attr("data-out-effect"),s=jQuery(this).attr("data-out-sync"),n=jQuery(this).attr("data-out-shuffle"),o=jQuery(this).attr("data-in-reverse"),d=jQuery(this).attr("data-loop"),u=jQuery(this).attr("data-pause"),l=parseInt(jQuery(this).attr("data-delay"));jQuery(this).textillate({selector:".texts",loop:"true"==d?!0:!1,minDisplayTime:u,initialDelay:l,autoStart:!0,inEffects:[t],outEffects:[r],"in":{effect:t,delayScale:1.5,delay:50,sync:"true"==e?!0:!1,shuffle:"true"==a?!0:!1,reverse:"true"==i?!0:!1,callback:function(){}},out:{effect:r,delayScale:1.5,delay:50,sync:"true"==s?!0:!1,shuffle:"true"==n?!0:!1,reverse:"true"==o?!0:!1,callback:function(){}},callback:function(){}})
},offset:"85%",triggerOnce:!0}):0==TS_VCSC_MobileDevice&&jQuery(".ts-textillate").each(function(){var t=jQuery(this).attr("data-in-effect"),e=jQuery(this).attr("data-in-sync"),a=jQuery(this).attr("data-in-shuffle"),i=jQuery(this).attr("data-in-reverse"),r=jQuery(this).attr("data-out-effect"),s=jQuery(this).attr("data-out-sync"),n=jQuery(this).attr("data-out-shuffle"),o=jQuery(this).attr("data-in-reverse"),d=jQuery(this).attr("data-loop"),u=parseInt(jQuery(this).attr("data-delay"));jQuery(this).textillate({selector:".texts",loop:"true"==d?!0:!1,minDisplayTime:3e3,initialDelay:u,autoStart:!0,inEffects:[t],outEffects:[r],"in":{effect:t,delayScale:1.5,delay:50,sync:"true"==e?!0:!1,shuffle:"true"==a?!0:!1,reverse:"true"==i?!0:!1,callback:function(){}},out:{effect:r,delayScale:1.5,delay:50,sync:"true"==s?!0:!1,shuffle:"true"==n?!0:!1,reverse:"true"==o?!0:!1,callback:function(){}},callback:function(){}})}),jQuery(".ts-title-typed-container").each(function(){var t=jQuery(this),e="true"==t.attr("data-viewport")?!0:!1,a="true"==t.attr("data-frontend")?!0:!1,i="true"==t.attr("data-mobile")?!0:!1,r=t.find(".ts-title-typed-string"),s=t.attr("data-pretext"),n=t.attr("data-strings"),o=t.attr("data-title"),d=n.split(","),u=parseInt(t.attr("data-startdelay")),l=parseInt(t.attr("data-typespeed")),c=parseInt(t.attr("data-backdelay")),h=parseInt(t.attr("data-backspeed")),p=parseInt(t.attr("data-wrapper")),m="true"==t.attr("data-loop")?!0:!1;if(m)var f="false"==t.attr("data-loopcount")?!1:parseInt(t.attr("data-loopcount"));else var f=0;var g=0,y="true"==t.attr("data-showcursor")?!0:!1,v="true"==t.attr("data-removecursor")?!0:!1,j="true"==t.attr("data-showall")?!0:!1;1==a?r.text(s+n):1==TS_VCSC_MobileDevice&&0==i?(t.empty().html(""!=o?o:s+n),t.wrapInner("<"+p+' class="ts-title-typed-mobile"></'+p+">")):1==e?t.waypoint({handler:function(){r.typed({strings:d,typeSpeed:l,backSpeed:h,startDelay:u,backDelay:c,loop:m,loopCount:f,showCursor:y,cursorChar:"|",attr:null,callback:function(){g++,m?m&&0!=f&&(v&&g==f&&t.find(".typed-cursor").remove(),j&&g==f&&r.empty().text(s+n.replace(",",", "))):(v&&t.find(".typed-cursor").remove(),j&&r.empty().text(s+n.replace(",",", ")))},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}})},offset:"100%",triggerOnce:!0}):r.typed({strings:d,typeSpeed:l,backSpeed:h,startDelay:u,backDelay:c,loop:m,loopCount:f,showCursor:y,attr:null,callback:function(){g++,m?m&&0!=f&&(v&&g==f&&t.find(".typed-cursor").remove(),j&&g==f&&r.empty().text(s+n.replace(",",", "))):(v&&t.find(".typed-cursor").remove(),j&&r.empty().text(s+n.replace(",",", ")))},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}})}),jQuery(".ts-title-ticker-container").each(function(){var t=jQuery(this),e=t.find(".ts-title-ticker-animated"),a=t.find(".ts-title-ticker-list").find("li"),i=a.length,r=t.attr("data-direction"),s="true"==t.attr("data-controls")?!0:!1,n="true"==t.attr("data-reverse")?!0:!1,o="true"==t.attr("data-viewport")?!0:!1,d=("true"==t.attr("data-frontend")?!0:!1,"true"==t.attr("data-showall")?!0:!1),u=parseInt(t.attr("data-items")),l=parseInt(t.attr("data-delay")),c=parseInt(t.attr("data-speed")),h=parseInt(t.attr("data-break")),p=t.attr("data-alignment"),m="true"==t.attr("data-pretext")?!0:!1,f="true"==t.attr("data-hover")?!0:!1,g=t.find(".ts-title-ticker-controls"),y=t.attr("data-position");if("left"==y||"right"==y)var v="inline-block";else var v="block";var j=t.find(".ts-title-ticker-prev"),Q=t.find(".ts-title-ticker-next"),w=t.find(".ts-title-ticker-pause"),b=t.find(".ts-title-ticker-play");1==o?t.waypoint({handler:function(){setTimeout(function(){e.TS_VCSC_vTicker({speed:c,pause:h,showItems:d?i:u,mousePause:f,height:0,animate:!0,margin:0,padding:0,startPaused:!1,controls:s,controlsPosition:y,preText:m,direction:r,alignment:p,reverseList:n}),g&&g.css("display",v)},l)},offset:"100%",triggerOnce:!0}):setTimeout(function(){e.TS_VCSC_vTicker({speed:c,pause:h,showItems:d?i:u,mousePause:f,height:0,animate:!0,margin:0,padding:0,startPaused:!1,controls:s,controlsPosition:y,preText:m,direction:r,alignment:p,reverseList:n}),g&&g.css("display",v)},l),g&&(Q.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("next",{speed:250,animate:!0})}).on("mouseenter touchstart",function(){e.TS_VCSC_vTicker("pause",!0)}).on("mouseleave touchend",function(){"false"==w.attr("data-active")&&e.TS_VCSC_vTicker("pause",!1)}),j.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("prev",{speed:250,animate:!0})}).on("mouseenter touchstart",function(){e.TS_VCSC_vTicker("pause",!0)}).on("mouseleave touchend",function(){"false"==w.attr("data-active")&&e.TS_VCSC_vTicker("pause",!1)}),w.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("pause",!0),w.css("display","none").attr("data-active","true"),b.css("display","inline-block").attr("data-active","false")}),b.on("mousedown touchstart",function(){event.preventDefault(),e.TS_VCSC_vTicker("pause",!1),b.css("display","none").attr("data-active","true"),w.css("display","inline-block").attr("data-active","false")}))}),jQuery(".ts-splitflap-wrapper").each(function(){var t=jQuery(this),e="true"==t.attr("data-frontend")?!0:!1,a="true"==t.attr("data-mobile")?!0:!1,i="true"==t.attr("data-restart")?!0:!1,r=t.attr("data-chars"),s=t.attr("data-text"),n=t.attr("data-start"),o="true"==t.attr("data-equalize")?!0:!1,d="true"==t.attr("data-dotted")?!0:!1,u=parseInt(t.attr("data-speed")),l=(t.attr("data-size"),t.attr("data-image")),c=t.attr("data-wrapper"),h=parseInt(t.attr("data-height")),p=parseInt(t.attr("data-width")),m="true"==t.attr("data-viewport")?!0:!1,f=parseInt(t.attr("data-delay"));0==e&&(1==TS_VCSC_MobileDevice&&0==a?t.wrapInner("<"+c+' class="ts-splitflap-mobile"></'+c+">"):1==m?t.waypoint({handler:function(){t.TS_VCSC_SplitFlap({autoplay:!0,text:s,textInit:n,textFill:" ",textEqual:o,textDots:d,delay:f,restart:i,image:l,charWidth:p,charHeight:h,charsMap:r,padDir:"left",padChar:" ",speed:u,speedVariation:2})},offset:"100%",triggerOnce:!0}):t.TS_VCSC_SplitFlap({autoplay:!0,text:s,textInit:n,textFill:" ",textEqual:o,textDots:d,delay:f,restart:i,image:l,charWidth:p,charHeight:h,charsMap:r,padDir:"left",padChar:" ",speed:u,speedVariation:2}))}),jQuery(".ts-login-form-container").each(function(){jQuery(this).find(".ts-tab-login-form").hide(),jQuery(this).find("ul.ts-tab-login-tabs li:first").addClass("ts-tab-active-login").show(),jQuery(this).find(".ts-tab-login-form:first").show(),jQuery(this).find("ul.ts-tab-login-tabs li").click(function(){jQuery("ul.ts-tab-login-tabs li").removeClass("ts-tab-active-login"),jQuery(this).addClass("ts-tab-active-login"),jQuery(".ts-tab-login-form").hide();var t=jQuery(this).find("a").attr("href");return jQuery.browser.msie,jQuery(t).show(),!1})}),jQuery(document).on("mouseenter touchstart",".ts-list-item",function(){var t=jQuery(this),e=t.find("i"),a=t.attr("data-animation");""!=a&&e.addClass(a)}),jQuery(document).on("mouseleave touchend",".ts-list-item",function(){var t=jQuery(this),e=t.find("i"),a=t.attr("data-animation");""!=a&&e.removeClass(a)}),jQuery(".ts-image-full-frame").each(function(){$image=jQuery(this),$image.hasClass("ts-image-full-movement")&&($allowX="true"==$image.attr("data-allowx")?!0:!1,$allowY="true"==$image.attr("data-allowy")?!0:!1,$moveX=parseInt($image.attr("data-movex")),$moveY=parseInt($image.attr("data-movey")),jQuery(this).find("img").attr("data-parallaxify-range-x",$moveX),jQuery(this).find("img").attr("data-parallaxify-range-y",$moveY),$image.parallaxify({horizontalParallax:$allowX,verticalParallax:$allowY,parallaxBackgrounds:!1,parallaxElements:!0,positionProperty:"transform",responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05}))}),0==TS_VCSC_MobileDevice&&jQuery(".ts-image-full-frame").each(function(){var t=jQuery(this).attr("data-marginleft"),e=jQuery(this).attr("data-marginright"),a=jQuery(this).attr("data-index");jQuery(this).css({"margin-left":parseInt(t)+"px","margin-right":parseInt(e)+"px","z-index":parseInt(a)})}),jQuery(window).on("debouncedresize",function(){l()}),jQuery(".ts-pageback-image").each(function(){var t=jQuery(this),e=(jQuery(this).attr("data-image"),jQuery(this).attr("data-raster"),jQuery(this).attr("data-inline"));0!=TS_VCSC_MobileDevice||"false"!=e||jQuery("body").hasClass("ts-body-background-image")?(1==TS_VCSC_MobileDevice||"false"==e)&&t.remove():(jQuery("body").prepend(t),jQuery("body").addClass("ts-body-background-image"))}),"undefined"!=typeof jQuery.fn.YTPlaylist&&jQuery(".ts-pageback-youtube").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-video"),a=jQuery(this).attr("data-mute"),i=jQuery(this).attr("data-loop"),r=jQuery(this).attr("data-start"),s=jQuery(this).attr("data-raster"),n=jQuery(this).attr("data-controls"),o=jQuery(this).attr("data-inline");if(n="true"==n?!0:!1,r="true"==r?!0:!1,a="true"==a?!0:!1,i="true"==i?!0:!1,s="true"==s?!0:!1,0!=TS_VCSC_MobileDevice||"false"!=o||jQuery("body").hasClass("ts-body-background-video"))(1==TS_VCSC_MobileDevice||"false"==o)&&t.remove();else{var d=[{videoURL:e,showControls:n,autoPlay:r,mute:a,startAt:0,opacity:1,loop:i,addRaster:s}];jQuery(this).YTPlaylist(d,!0),jQuery("body").addClass("ts-body-background-video")}}),"undefined"!=typeof jQuery.fn.TS_VCSC_Wallpaper&&jQuery(".ts-pageback-video").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-mp4"),a=jQuery(this).attr("data-ogv"),i=jQuery(this).attr("data-webm"),r=jQuery(this).attr("data-image"),s=jQuery(this).attr("data-mute"),n=jQuery(this).attr("data-loop"),o=jQuery(this).attr("data-remove"),d=jQuery(this).attr("data-start"),u=(jQuery(this).attr("data-stop"),jQuery(this).attr("data-hover"),jQuery(this).attr("data-controls")),l=jQuery(this).attr("data-index"),c=jQuery(this).attr("data-raster"),h=jQuery(this).attr("data-overlay"),p=jQuery(this).attr("data-inline");if(0!=TS_VCSC_MobileDevice||"false"!=p||jQuery("body").hasClass("ts-body-background-video"))(1==TS_VCSC_MobileDevice||"false"==p)&&t.remove();else{jQuery("body").prepend(t),u="true"==u?!0:!1,d="true"==d?!0:!1,s="true"==s?!0:!1,n="true"==n?!0:!1,o="true"==o?!0:!1;var m=jQuery(this).find(".ts-background-video-holder");m.TS_VCSC_Wallpaper({embedRatio:1.777777,controls:u,autoPlay:d,loop:n,mute:s,hoverPlay:!1,raster:c,overlay:h,source:{poster:r,mp4:e,ogg:a,webm:i},onReady:function(){jQuery("body").addClass("ts-body-background-video");var t=m.find("video"),e=m.find(".wallpaper-play").show(),a=m.find(".wallpaper-pause").show(),i=m.find(".wallpaper-mute").show(),r=m.find(".wallpaper-unmute").show();1==u?(e.on("mousedown touchend",function(){m.TS_VCSC_Wallpaper("play")}),a.on("mousedown touchstart",function(){m.TS_VCSC_Wallpaper("stop")}),i.on("mousedown touchend",function(){t.prop("muted",!0)}),r.on("mousedown touchend",function(){t.prop("muted",!1)}),t.bind("contextmenu",function(){return!1})):(e.hide(),a.hide(),i.hide(),r.hide())},onLoad:function(){},onFinish:function(){0==n&&1==o&&(m.TS_VCSC_Wallpaper("unload"),m.TS_VCSC_Wallpaper("destroy"),m.off().remove(),t.find(".ts-background-raster").remove(),""!=r&&t.css({"background-image":'url("'+r+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","margin-left":parseInt($margin_left)+"px","margin-right":parseInt($margin_right)+"px","z-index":parseInt(l)}))}})}}),jQuery(".ts-background-image").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft")),a=jQuery(this).attr("data-marginright"),i=jQuery(this).attr("data-paddingtop"),r=jQuery(this).attr("data-paddingbottom"),s=jQuery(this).attr("data-image"),n=jQuery(this).attr("data-size"),o=jQuery(this).attr("data-position"),d=jQuery(this).attr("data-repeat"),u=jQuery(this).attr("data-index"),l=jQuery(this).attr("data-height");0==TS_VCSC_MobileDevice?(t.addClass("ts-image-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-image-visible")}else{var r=jQuery(this);r.removeClass("ts-image-visible")}}),"contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-attachment":"scroll","margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-image-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-position":o,"background-attachment":"scroll","margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-single").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft"),jQuery(this).attr("data-marginright"),jQuery(this).attr("data-paddingtop")),a=jQuery(this).attr("data-paddingbottom"),i=jQuery(this).attr("data-index"),r=jQuery(this).attr("data-height"),s=(jQuery(this).attr("data-color"),jQuery(this).attr("data-inline"));0==TS_VCSC_MobileDevice&&"false"==s?(t.addClass("ts-single-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-single-visible")}else{var r=jQuery(this);r.removeClass("ts-single-visible")}}),jQuery(this).css({"z-index":parseInt(i)}).prependTo(t.addClass("ts-background-single-parent")).show(),t.css({background:"","background-image":"","background-repeat":"","background-size":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-single-processing"),jQuery(this).addClass("ts-background-processed")):(t.css({"background-image":"","background-repeat":"","background-size":"","background-position":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).prependTo(t.addClass("ts-background-single-parent")).show(),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-gradient").each(function(){var t=jQuery(this).next(),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).attr("data-marginleft"),jQuery(this).attr("data-marginright"),jQuery(this).attr("data-paddingtop")),a=jQuery(this).attr("data-paddingbottom"),i=jQuery(this).attr("data-index"),r=jQuery(this).attr("data-height"),s=(jQuery(this).css("background"),jQuery(this).attr("data-inline"));0==TS_VCSC_MobileDevice&&"false"==s?(t.addClass("ts-gradient-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-gradient-visible")}else{var r=jQuery(this);r.removeClass("ts-gradient-visible")}}),jQuery(this).css({"z-index":parseInt(i)}).prependTo(t.addClass("ts-background-gradient-parent")).show(),t.css({background:"","background-image":"","background-repeat":"","background-size":"","background-color":"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-gradient-processing"),jQuery(this).addClass("ts-background-processed")):(t.css({"background-image":"","background-repeat":"","background-size":"","background-position":"",background:"","padding-top":parseInt(e)+"px","padding-bottom":parseInt(a)+"px","min-height":parseInt(r)+"px"}),"undefined"!=typeof t.attr("style")&&($row_styles=t.attr("style")+";"),t.attr("style",$row_styles+" background-image: none !important; background-color: transparent !important;"),jQuery(this).prependTo(t.addClass("ts-background-gradient-parent")).show(),jQuery(this).addClass("ts-background-processed"))}),jQuery(".ts-background-fixed").each(function(){var t=(jQuery(this),"true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),e=jQuery(this).attr("data-marginleft"),a=jQuery(this).attr("data-marginright"),i=jQuery(this).attr("data-paddingtop"),r=jQuery(this).attr("data-paddingbottom"),s=jQuery(this).attr("data-image"),n=jQuery(this).attr("data-size"),o=jQuery(this).attr("data-position"),d=jQuery(this).attr("data-repeat"),u=jQuery(this).attr("data-index"),l=jQuery(this).attr("data-height"),c="",h=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==h?(t.addClass("ts-fixed-processing"),jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-fixed-visible")}else{var r=jQuery(this);r.removeClass("ts-fixed-visible")}}),"contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-attachment":"fixed","-webkit-background-attachment":"fixed","background-position":o,"margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-fixed-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&(c=t.attr("style")+";"),t.attr("style",c+" background-image: none !important; background-color: transparent !important;"),t.removeClass("ts-fixed-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==t.css("backgroundSize")&&t.css("backgroundSize","cover"),t.css("backgroundSize",n),jQuery(this).css({"background-image":'url("'+s+'")',"background-repeat":d,"background-size":n,"-webkit-background-size":n,"background-position":o,"margin-left":parseInt(e)+"px","margin-right":parseInt(a)+"px","z-index":parseInt(u)}),jQuery(this).prependTo(t.addClass("ts-background-image-parent")),t.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(i)+"px","padding-bottom":parseInt(r)+"px","min-height":parseInt(l)+"px"}),"undefined"!=typeof t.attr("style")&&(c=t.attr("style")+";"),t.attr("style",c+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-fixed").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-automove").each(function(){var t=jQuery(this),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-image"),o=jQuery(this).attr("data-size"),d=jQuery(this).attr("data-position"),u=jQuery(this).attr("data-repeat"),l=jQuery(this).attr("data-index"),c=jQuery(this).attr("data-height"),h=jQuery(this).attr("data-alignment"),p=jQuery(this).attr("data-direction"),m=jQuery(this).attr("data-speed"),f=jQuery(this).attr("data-scroll"),g="",y=jQuery(this).attr("data-inline"),v=0,j=0,Q=null;0==TS_VCSC_MobileDevice&&"false"==y?(e.addClass("ts-automove-processing"),jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-automove-visible")}else{var s=jQuery(this);s.removeClass("ts-automove-visible")}}),"contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",o),jQuery(this).css({"background-image":'url("'+n+'")',"background-repeat":"repaet 0 0","background-size":o,"-webkit-background-size":o,"background-attachment":"true"==f?"scroll":"fixed","background-position":d,"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(l)}),jQuery(this).prependTo(e.addClass("ts-background-automove-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(c)+"px"}),"undefined"!=typeof e.attr("style")&&(g=e.attr("style")+";"),e.attr("style",g+" background-image: none !important; background-color: transparent !important;"),t.css("backgroundPosition",v+"px "+j+"px"),Q=window.setInterval(function(){t.hasClass("ts-automove-visible")&&(t.css("backgroundPosition",v+"px "+j+"px"),"vertical"==h?"bottomtop"==p?j--:"topbottom"==p&&j++:"horizontal"==h&&("leftright"==p?v--:"rightleft"==p&&v++))},m),e.removeClass("ts-automove-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",o),jQuery(this).css({"background-image":'url("'+n+'")',"background-repeat":u,"background-size":o,"-webkit-background-size":o,"background-position":d,"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(l)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(c)+"px"}),"undefined"!=typeof e.attr("style")&&(g=e.attr("style")+";"),e.attr("style",g+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-automove").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-parallax").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this)),i=jQuery(this).attr("data-marginleft"),r=jQuery(this).attr("data-marginright"),s=jQuery(this).attr("data-paddingtop"),n=jQuery(this).attr("data-paddingbottom"),o=jQuery(this).attr("data-image"),d=jQuery(this).attr("data-size"),u=jQuery(this).attr("data-position"),l=(jQuery(this).attr("data-alignment"),jQuery(this).attr("data-repeat")),c=(jQuery(this).attr("data-direction"),jQuery(this).attr("data-index")),h=jQuery(this).attr("data-height"),p=(jQuery(this).attr("data-momentum"),""),u="",m=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==m?(e.addClass("ts-parallax-processing"),a.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-parallax-visible")}else{var s=jQuery(this);s.removeClass("ts-parallax-visible")}}),"contain"==e.css("background-size")&&e.css("background-size","cover"),e.css("background-size","cover"),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-parallax-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(p=e.attr("style")+";"),e.attr("style",p+" background-image: none !important; background-color: transparent !important;"),("up"==jQuery(this).attr("data-direction")||"down"==jQuery(this).attr("data-direction"))&&jQuery(this).css("background-attachment","fixed"),jQuery(this).scrollParallax().trigger("scroll"),e.removeClass("ts-parallax-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",d),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(p=e.attr("style")+";"),e.attr("style",p+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-parallax").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-movement").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this)),i=jQuery(this).attr("data-marginleft"),r=jQuery(this).attr("data-marginright"),s=jQuery(this).attr("data-paddingtop"),n=jQuery(this).attr("data-paddingbottom"),o=jQuery(this).attr("data-image"),d=jQuery(this).attr("data-size"),u=jQuery(this).attr("data-position"),l=jQuery(this).attr("data-repeat"),c=jQuery(this).attr("data-index"),h=jQuery(this).attr("data-height"),p="true"==jQuery(this).attr("data-allowx")?!0:!1,m=parseInt(jQuery(this).attr("data-movex")),f="true"==jQuery(this).attr("data-allowy")?!0:!1,g=parseInt(jQuery(this).attr("data-movey")),y="true"==jQuery(this).attr("data-allowcontent")?!0:!1,v="",u="",j=jQuery(this).attr("data-inline");0==TS_VCSC_MobileDevice&&"false"==j?(e.addClass("ts-movement-processing"),a.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")||s.addClass("ts-movement-visible")}else{var s=jQuery(this);s.removeClass("ts-movement-visible")}}),"contain"==e.css("background-size")&&e.css("background-size","cover"),e.css("background-size","cover"),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-movement-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(v=e.attr("style")+";"),e.attr("style",v+" background-image: none !important; background-color: transparent !important;"),jQuery(this).attr("data-parallaxify-background-range-x",m),jQuery(this).attr("data-parallaxify-background-range-y",g),y&&(jQuery(this).siblings().not(".ts-background-separator-container").attr("data-parallaxify-range-x",m),jQuery(this).siblings().not(".ts-background-separator-container").attr("data-parallaxify-range-y",g)),e.parallaxify({horizontalParallax:p,verticalParallax:f,parallaxBackgrounds:!0,parallaxElements:y,positionProperty:"transform",responsive:!1,useMouseMove:!0,useGyroscope:!0,alphaFilter:.9,motionType:"natural",mouseMotionType:"gaussian",inputPriority:"mouse",motionAngleX:80,motionAngleY:80,adjustBasePosition:!0,alphaPosition:.05}),e.removeClass("ts-movement-processing"),jQuery(this).addClass("ts-background-processed")):("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),e.css("backgroundSize",d),jQuery(this).css({"background-image":'url("'+o+'")',"background-repeat":l,"background-size":d,"-webkit-background-size":d,"background-position":u,"margin-left":parseInt(i)+"px","margin-right":parseInt(r)+"px","z-index":parseInt(c)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(s)+"px","padding-bottom":parseInt(n)+"px","min-height":parseInt(h)+"px"}),"undefined"!=typeof e.attr("style")&&(v=e.attr("style")+";"),e.attr("style",v+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-movement").addClass("ts-background-image").addClass("ts-background-processed"))}),"undefined"!=typeof jQuery.fn.YTPlaylist&&jQuery(".ts-background-youtube").each(function(){var t=jQuery(this),e=("true"==jQuery(this).attr("data-svgshape")?!0:!1,jQuery(this).next()),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-height"),o=jQuery(this).attr("data-video"),d=jQuery(this).attr("data-image"),u=jQuery(this).attr("data-mute"),l=jQuery(this).attr("data-loop"),c=jQuery(this).attr("data-start"),h=jQuery(this).attr("data-stop"),p=jQuery(this).attr("data-hover"),m=jQuery(this).attr("data-raster"),f=jQuery(this).attr("data-remove"),g=jQuery(this).attr("data-controls"),y=jQuery(this).attr("data-index"),v=!1,j="",Q=jQuery(this).attr("data-inline");if(0==TS_VCSC_MobileDevice&&"false"==Q){e.addClass("ts-youtube-processing"),g="true"==g?!0:!1,c="true"==c?!0:!1,u="true"==u?!0:!1,l="true"==l?!0:!1,m="true"==m?!0:!1,f="true"==f?!0:!1,p="true"==p?!0:!1,jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")?s.pauseYTP():(s.addClass("ts-youtube-visible"),"true"==h&&0==v&&s.playYTP())}else{var s=jQuery(this);s.removeClass("ts-youtube-visible"),"true"==h&&0==v&&s.pauseYTP()}}),jQuery(this).css({"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(y)}).prependTo(e.addClass("ts-background-youtube-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(j=e.attr("style")+";"),e.attr("style",j+" background-image: none !important; background-color: transparent !important;"),e.removeClass("ts-youtube-processing");var w=[{videoURL:o,containment:jQuery(this),showControls:g,autoPlay:c,mute:u,startAt:0,opacity:1,loop:l,addRaster:m}];jQuery(this).YTPlaylist(w,!0),jQuery(this).addClass("ts-background-processed"),0==l&&1==f&&jQuery(this).on("YTPEnd",function(e){e.time;t.stopYTP(),t.muteYTPVolume(),t.find(".mbYTP_wrapper").hide(),t.find(".mb_YTVPBar").hide(),t.removeClass("mb_YTVPlayer").removeClass("ts-youtube-visible").removeClass("ts-background-youtube").addClass("ts-background-image"),v=!0,t.css("background","transparent")
})}else""!=d&&("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),jQuery(this).css({"background-image":'url("'+d+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","background-position":"center","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(y)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(j=e.attr("style")+";"),e.attr("style",j+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-youtube").addClass("ts-background-image").addClass("ts-background-processed"))}),jQuery(".ts-background-video").each(function(){var t=jQuery(this),e=jQuery(this).next(),a=jQuery(this).attr("data-marginleft"),i=jQuery(this).attr("data-marginright"),r=jQuery(this).attr("data-paddingtop"),s=jQuery(this).attr("data-paddingbottom"),n=jQuery(this).attr("data-height"),o=jQuery(this).attr("data-mp4"),d=jQuery(this).attr("data-ogv"),u=jQuery(this).attr("data-webm"),l=jQuery(this).attr("data-image"),c=jQuery(this).attr("data-mute"),h=jQuery(this).attr("data-loop"),p=jQuery(this).attr("data-remove"),m=jQuery(this).attr("data-start"),f=jQuery(this).attr("data-stop"),g=jQuery(this).attr("data-hover"),y=jQuery(this).attr("data-raster"),v=jQuery(this).attr("data-overlay"),j=jQuery(this).attr("data-controls"),Q=jQuery(this).attr("data-index"),w="",b=jQuery(this).attr("data-inline");if(0==TS_VCSC_MobileDevice&&"false"==b){j="true"==j?!0:!1,m="true"==m?!0:!1,c="true"==c?!0:!1,h="true"==h?!0:!1,p="true"==p?!0:!1,g="true"==g?!0:!1,e.addClass("ts-video-processing"),jQuery(this).bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);t.hasClass("ts-device-row-hidden")?C.TS_VCSC_Wallpaper("stop"):(s.addClass("ts-video-visible"),"true"==f&&0==g&&C.TS_VCSC_Wallpaper("play"))}else{var s=jQuery(this);s.removeClass("ts-video-visible"),"true"==f&&0==g&&C.TS_VCSC_Wallpaper("stop")}}),jQuery(this).css({"margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}).prependTo(e.addClass("ts-background-video-parent")),e.css({background:"","background-color":"","background-image":"","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(w=e.attr("style")+";"),e.attr("style",w+" background-image: none !important; background-color: transparent !important;"),e.removeClass("ts-video-processing");var C=(parseInt(jQuery(this).attr("data-set-width")),parseInt(jQuery(this).attr("data-set-height")),jQuery(this).find(".ts-background-video-holder"));C.TS_VCSC_Wallpaper({embedRatio:1.777777,controls:j,autoPlay:m,loop:h,mute:c,hoverPlay:g,raster:y,overlay:v,source:{poster:l,mp4:o,ogg:d,webm:u},onReady:function(){var t=C.find("video"),e=C.find(".wallpaper-play").show(),a=C.find(".wallpaper-pause").show(),i=C.find(".wallpaper-mute").show(),r=C.find(".wallpaper-unmute").show();1==j?(0==g?(e.on("mousedown touchend",function(){C.TS_VCSC_Wallpaper("play")}),a.on("mousedown touchstart",function(){C.TS_VCSC_Wallpaper("stop")})):(e.hide(),a.hide()),i.on("mousedown touchend",function(){t.prop("muted",!0)}),r.on("mousedown touchend",function(){t.prop("muted",!1)}),t.bind("contextmenu",function(){return!1})):(e.hide(),a.hide(),i.hide(),r.hide())},onLoad:function(){},onFinish:function(){0==h&&1==p&&(C.TS_VCSC_Wallpaper("unload"),C.TS_VCSC_Wallpaper("destroy"),C.off().remove(),t.find(".ts-background-raster").remove(),""!=l&&t.css({"background-image":'url("'+l+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}))}}),1==g&&e.on("mouseover touchstart",function(){C.TS_VCSC_Wallpaper("play")}).on("mouseout touchend",function(){C.TS_VCSC_Wallpaper("stop")})}else""!=l&&("contain"==e.css("backgroundSize")&&e.css("backgroundSize","cover"),jQuery(this).css({"background-image":'url("'+l+'")',"background-repeat":"no-repeat","background-size":"cover","-webkit-background-size":"cover","background-position":"center","margin-left":parseInt(a)+"px","margin-right":parseInt(i)+"px","z-index":parseInt(Q)}),jQuery(this).prependTo(e.addClass("ts-background-image-parent")),e.css({background:"","background-color":"transparent !important","background-image":"none !important","background-repeat":"","background-size":"","padding-top":parseInt(r)+"px","padding-bottom":parseInt(s)+"px","min-height":parseInt(n)+"px"}),"undefined"!=typeof e.attr("style")&&(w=e.attr("style")+";"),e.attr("style",w+" background-image: none !important; background-color: transparent !important;"),jQuery(this).removeClass("ts-background-video").addClass("ts-background-image").addClass("ts-background-processed"))}),"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-icon-counter").each(function(){var t=jQuery(this).find(".ts-counter-value"),e="true"==t.attr("data-viewport")?!0:!1,a=parseInt(t.attr("data-start")),i=parseInt(t.attr("data-end")),r=parseInt(t.attr("data-speed")),s=t.attr("data-before"),n=t.attr("data-after"),o=t.attr("data-format"),d=t.attr("data-plus"),u=t.attr("data-seperator"),l=t.attr("data-animation"),c=jQuery(this).find(".ts-font-icon");0==e?t.countTo({from:a,to:i,speed:r,refreshInterval:50,decimals:0,formatter:function(t,e){return s+t.toFixed(e.decimals)+n},onUpdate:function(){},onComplete:function(){jQuery(this).empty().html("true"==o?"true"==d&&""!=u?s+jQuery.number(i,0,"",u)+"+"+n:"true"==d?s+i+"+"+n:""!=u?s+jQuery.number(i,0,"",u)+n:s+i+n:i),c.addClass(l),setTimeout(function(){c.removeClass(l)},2e3)}}):jQuery(this).waypoint({handler:function(){t.countTo({from:a,to:i,speed:r,refreshInterval:50,decimals:0,formatter:function(t,e){return s+t.toFixed(e.decimals)+n},onUpdate:function(){},onComplete:function(){jQuery(this).empty().html("true"==o?"true"==d&&""!=u?s+jQuery.number(i,0,"",u)+"+"+n:"true"==d?s+i+"+"+n:""!=u?s+jQuery.number(i,0,"",u)+n:s+i+n:i),c.addClass(l),setTimeout(function(){c.removeClass(l)},2e3)}})},offset:"100%",triggerOnce:!0})}),"undefined"!=typeof jQuery.fn.waypoint&&"undefined"!=typeof jQuery.fn.circliful&&jQuery(".ts-circliful-counter").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);"top"==i||"bottom"==i||r.addClass("ts-circliful-visible")}else{var r=jQuery(this);r.removeClass("ts-circliful-visible")}})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-circliful-counter").each(function(){if("true"==jQuery(this).attr("data-responsive")){var t=jQuery(this),e=parseInt(jQuery(this).parent().width()),a=parseInt(jQuery(this).attr("data-size"));e!=a&&(t.empty(),t.circliful())}})}),jQuery(".ts-countdown-parent").each(function(){
$TS_VCSC_Countdown_DaysLabel = $TS_VCSC_Countdown_DayLabel = jQuery(this).parent().find(".hidecountdownlabel").data("day");
$TS_VCSC_Countdown_HoursLabel =  $TS_VCSC_Countdown_HourLabel = jQuery(this).parent().find(".hidecountdownlabel").data("hour");
$TS_VCSC_Countdown_MinutesLabel =  $TS_VCSC_Countdown_MinuteLabel = jQuery(this).parent().find(".hidecountdownlabel").data("minute");
$TS_VCSC_Countdown_SecondsLabel =  $TS_VCSC_Countdown_SecondLabel  = jQuery(this).parent().find(".hidecountdownlabel").data("second");	
function t(_){var k=new Date,z=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),P=k.getTimezoneOffset()/-60;if(0==u&&(u=P),1==r&&0==o){k.setHours(k.getHours()+parseInt(Q)),k.setMinutes(k.getMinutes()+parseInt(w)),k.setSeconds(k.getSeconds()+parseInt(b)),z=Date.UTC(k.getFullYear(),k.getMonth(),k.getDate()),$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=k.getHours(),$countdown_target_minute=k.getMinutes(),$countdown_target_second=k.getSeconds();{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else if(1==o){$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=k.getHours(),$countdown_target_minute=k.getMinutes(),$countdown_target_second=k.getSeconds();{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else if(1==s){k.getHours()>=parseInt(y)&&k.getMinutes()>=parseInt(v)&&k.getSeconds()>=parseInt(j)&&k.setDate(k.getDate()+1),$countdown_target_day=k.getDate(),$countdown_target_month=k.getMonth()+1,$countdown_target_year=k.getFullYear(),$countdown_target_hour=parseInt(y),$countdown_target_minute=parseInt(v),$countdown_target_second=parseInt(j);{var E=new Date($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,k.getMonth(),$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}else{$countdown_target_day=parseInt(m),$countdown_target_month=parseInt(f),$countdown_target_year=parseInt(g),$countdown_target_hour=parseInt(y),$countdown_target_minute=parseInt(v),$countdown_target_second=parseInt(j);{var E=new Date($countdown_target_year,$countdown_target_month-1,$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0);Date.UTC($countdown_target_year,$countdown_target_month-1,$countdown_target_day,$countdown_target_hour,$countdown_target_minute,$countdown_target_second,0)}}n=0==s&&(k>E&&1==n||1==o)?!0:!1,e.countEverest({day:$countdown_target_day,month:$countdown_target_month,year:$countdown_target_year,hour:$countdown_target_hour,minute:$countdown_target_minute,second:$countdown_target_second,countUp:n,leftHandZeros:d,timeZone:u,wrapDigits:"horizontal"==i?!1:!0,daysLabel:$TS_VCSC_Countdown_DaysLabel,dayLabel:$TS_VCSC_Countdown_DayLabel,daysWrapper:"horizontal"==i?".ce-days .ce-flip-back":".ce-days",hoursLabel:$TS_VCSC_Countdown_HoursLabel,hourLabel:$TS_VCSC_Countdown_HourLabel,hoursWrapper:"horizontal"==i?".ce-hours .ce-flip-back":".ce-hours",minutesLabel:$TS_VCSC_Countdown_MinutesLabel,minuteLabel:$TS_VCSC_Countdown_MinuteLabel,minutesWrapper:"horizontal"==i?".ce-minutes .ce-flip-back":".ce-minutes",secondsLabel:$TS_VCSC_Countdown_SecondsLabel,secondLabel:$TS_VCSC_Countdown_SecondLabel,secondsWrapper:"horizontal"==i?".ce-seconds .ce-flip-back":".ce-seconds",onInit:function(){},beforeCalculation:function(){},afterCalculation:function(){if("flipboard"==i){var t=this,a={days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds},r={hours:"23",minutes:"59",seconds:"59"},s="active",o="before";1==L&&1==_?(L=!1,e.find(".unit-wrap div").each(function(){for(var t=jQuery(this),e=t.attr("class"),i=a[e],r="",s="",n=0;10>n;n++)r+=['<div class="digits-inner">','<div class="flip-wrap">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+n+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+n+"</div>","</div>","</div>","</div>"].join("");for(var o=0;o<i.length;o++)s+='<div class="digits">'+r+"</div>";t.append(s)})):1==L&&0==_&&(L=!1),jQuery.each(a,function(a){for(var i,d=e.find("."+a+" .digits").length,u=r[a],l=t.strPad(this,d,"0"),c=l.length-1;c>=0;c--){var h=e.find("."+a+" .digits:eq("+c+")"),p=h.find("div.digits-inner");i=u?n?9==u[c]?0:u[c]:0==u[c]?9:u[c]:n?0:9;var m=parseInt(l[c]);if(n)var f=m==i?9:m-1;else var f=m==i?0:m+1;p.eq(f).hasClass(s)&&p.parent().addClass("play"),p.removeClass(s).removeClass(o),p.eq(m).addClass(s),p.eq(f).addClass(o)}})}},onChange:function(){if("bars"==i&&("true"==l&&TS_VCSC_Countdown_SetBar(I,this.days,365),"true"==c&&TS_VCSC_Countdown_SetBar(S,this.hours,24),"true"==h&&TS_VCSC_Countdown_SetBar(T,this.minutes,60),"true"==p&&TS_VCSC_Countdown_SetBar($,this.seconds,60)),"columns"==i&&"true"==x){var t=0;e.find(".col").each(function(){jQuery(this).width()>t&&(t=jQuery(this).width())}),e.find(".col").each(function(){jQuery(this).width(t)})}"clock2"==i&&TS_VCSC_Countdown_Animate(e.find(".number")),"circles"==i&&("true"==l&&TS_VCSC_Countdown_DrawCircle(document.getElementById("days_"+a),this.days,365,D,M,H),"true"==c&&TS_VCSC_Countdown_DrawCircle(document.getElementById("hours_"+a),this.hours,24,D,V,H),"true"==h&&TS_VCSC_Countdown_DrawCircle(document.getElementById("minutes_"+a),this.minutes,60,D,A,H),"true"==p&&TS_VCSC_Countdown_DrawCircle(document.getElementById("seconds_"+a),this.seconds,60,D,F,H)),"horizontal"==i&&TS_VCSC_Countdown_Animate3D(e.find(".col").find("div:first-child"),this)},onComplete:function(){1==r&&(e.countEverest("destroy"),jQuery("#ts-vcsc-countdown-"+a+"_link").click(),"true"==C&&t(!1)),1==s&&(e.countEverest("destroy"),t(!0))}})}var e=jQuery(this).find(".ts-countdown"),a=jQuery(this).attr("data-id"),i=jQuery(this).attr("data-type"),r="true"==jQuery(this).attr("data-reset")?!0:!1,s="true"==jQuery(this).attr("data-repeat")?!0:!1,n="true"==jQuery(this).attr("data-countup")?!0:!1,o="true"==jQuery(this).attr("data-pageload")?!0:!1,d="true"==jQuery(this).attr("data-zeros")?!0:!1,u=jQuery(this).attr("data-zone");u="false"!=u?parseInt(u):!1;{var l=jQuery(this).attr("data-show-days"),c=jQuery(this).attr("data-show-hours"),h=jQuery(this).attr("data-show-minutes"),p=jQuery(this).attr("data-show-seconds"),m=jQuery(this).attr("data-day"),f=jQuery(this).attr("data-month"),g=jQuery(this).attr("data-year"),y=jQuery(this).attr("data-hour"),v=jQuery(this).attr("data-minute"),j=jQuery(this).attr("data-second"),Q=jQuery(this).attr("data-resethours"),w=jQuery(this).attr("data-resetminutes"),b=jQuery(this).attr("data-resetseconds"),C=jQuery(this).attr("data-resetrestart"),_=jQuery(this).attr("data-resetlink");jQuery(this).attr("data-resettarget")}if(""!=_&&jQuery("#ts-vcsc-countdown-"+a+"_link").click(function(t){t.preventDefault();var e=jQuery(this),a=e.attr("target");jQuery.trim(a).length>0?window.open(e.attr("href"),a):window.location=e.attr("href")}),"columns"==i)var x=jQuery(this).attr("data-equalize");if("bars"==i){var k=jQuery(this),I=(k.find("#ce-days_"+a),k.find("#ce-hours_"+a),k.find("#ce-minutes_"+a),k.find("#ce-seconds_"+a),jQuery("#bar-days_"+a).find(".fill")),S=jQuery("#bar-hours_"+a).find(".fill"),T=jQuery("#bar-minutes_"+a).find(".fill"),$=jQuery("#bar-seconds_"+a).find(".fill"),z=new Date;new Date(z.getTime()+12096e5)}if("circles"==i)var D=jQuery(this).attr("data-color-back"),M=jQuery(this).attr("data-color-days"),V=jQuery(this).attr("data-color-hours"),A=jQuery(this).attr("data-color-minutes"),F=jQuery(this).attr("data-color-seconds"),H=jQuery(this).attr("data-color-width");if("horizontal"==i&&(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0)&&jQuery("html").addClass("internet-explorer"),"flipboard"==i)var L=!0;t(!0)});var h=function(t){t.preventDefault();var e=jQuery(this),a=e.find(".ts-imageswitch-overlay"),i="true"==a.attr("data-remove")?!0:!1,r=t.originalEvent.touches&&t.originalEvent.touches[0]&&t.originalEvent.touches[0].pageX,s=e.offset(),n=(r||t.pageX)-s.left;n=Math.round(n),jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",e).css("left",n+"px"),jQuery(".ts-imageswitch__after img",e).css("right",n+"px"),i&&a.removeClass("active")},p=function(t){t.preventDefault();var e=jQuery(this),a=e.find(".ts-imageswitch-overlay"),i="true"==a.attr("data-remove")?!0:!1,r=e.width()/2,s=100,n=200;"true"==jQuery(".ts-imageswitch__handle",jQuery(this)).attr("data-center")&&(jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",e).delay(s).animate({left:r},n),jQuery(".ts-imageswitch__after img",e).delay(s).animate({right:r},n)),i&&a.addClass("active")};jQuery(".ts-imageswitch-slide > .ts-switch-wrapper > div").each(function(){jQuery(this).on("mousemove touchmove",h).on("mouseleave touchend",p)}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-slide > .ts-switch-wrapper > div").each(function(){var t=jQuery(this),e=t.width()/2,a=100,i=200;jQuery(".ts-imageswitch__after, .ts-imageswitch__handle",jQuery(this)).delay(a).animate({left:e},i),jQuery(".ts-imageswitch__after img",jQuery(this)).delay(a).animate({right:e},i)})}),jQuery(".ts-imageswitch.ts-imageswitch-flip.ts-trigger-click").each(function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-before"),t.on("click",function(){t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))})}),jQuery(".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover").each(function(){var e=t(this);e.addClass("ts-imageswitch-before")}),jQuery(document).on("mouseenter touchstart",".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))}),jQuery(document).on("mouseleave touchend",".ts-imageswitch.ts-imageswitch-flip.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch-overlay"),a="true"==e.attr("data-remove")?!0:!1;t.addClass("ts-imageswitch-activated"),t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a&&(t.hasClass("ts-imageswitch-before")?e.addClass("active"):e.removeClass("active"))}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-fade").find(".ts-imageswitch-items").find("li").each(function(){var t=jQuery(this),e=t.find("img").height(),a=t.hasClass("active");t.css("height",e+"px").attr("data-height",e),a&&t.parent().css("height",e+"px")})}),jQuery(document).on("mouseenter touchstart",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(document).on("mouseleave touchend",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-hover",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(document).on("click",".ts-imageswitch.ts-imageswitch-fade.ts-trigger-click",function(){var t=jQuery(this),e=t.find(".ts-imageswitch__before"),a=t.find(".ts-imageswitch__after"),i=t.find(".ts-imageswitch-overlay"),r="true"==i.attr("data-remove")?!0:!1;t.toggleClass("ts-imageswitch-before ts-imageswitch-after"),a.toggleClass("active"),e.toggleClass("active"),e.hasClass("active")?e.parent().css("height",e.find("img").height()+"px"):a.hasClass("active")&&a.parent().css("height",a.find("img").height()+"px"),r&&(t.hasClass("ts-imageswitch-before")?i.addClass("active"):i.removeClass("active"))}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-imageswitch-overlay").each(function(){var t=jQuery(this),e=t.siblings(".ts-imageswitch-items"),a=e.height(),i=(e.width(),t.find(".ts-imageswitch-overlay-image")),r=i.height()/2,s=i.width()/2;t.css({height:a+"px","line-height":a+"px"}),i.css({"margin-left":"-"+s+"px","margin-top":"-"+r+"px"})})}),jQuery(".ts-image-hotspot-switch").each(function(){var t=jQuery(this),e="true"==jQuery(this).attr("data-toggle")?!0:!1,a=t.find(".ts-image-hotspot-trigger-dot"),i=t.parents().parents().siblings(".ts-image-hotspot-image"),r=i.attr("src"),s=t.attr("data-image");t.attr("data-original",r),a.on("mousedown touchend",function(a){a.preventDefault();var n=i.attr("src");s!=r&&n!=s?(i.fadeOut(250,function(){i.attr("src",s),t.attr("data-switch","true")}),i.fadeIn(250)):e&&n!=r&&(i.fadeOut(250,function(){i.attr("src",r),t.attr("data-switch","false")}),i.fadeIn(250))})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-image-hotspot-container").each(function(){var t=jQuery(this),e=parseInt(t.attr("data-large")),a=parseInt(t.attr("data-medium")),i=t.width();i>=e?t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-large"):i>=a&&e>i?t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-medium"):t.alterClass("ts-image-hotspot-container-size-*","ts-image-hotspot-container-size-small")})}),jQuery(".ts-qrcode-parent").each(function(){var t=jQuery(this).attr("data-render"),e=jQuery(this).attr("data-responsive"),a=jQuery(this).attr("data-size"),i=jQuery(this).attr("data-min"),r=jQuery(this).attr("data-max"),s=jQuery(this).attr("data-qrcode"),n=jQuery(this).attr("data-color");if("true"==e){var o=jQuery(this).width()*a/100;a=i>o?i:o>r?r:o}else a=a;jQuery(this).qrcode({render:t,size:a,width:a,height:a,fill:n,fontcolor:n,text:s})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-qrcode-parent.responsive").each(function(){jQuery(this).empty();var t=jQuery(this).attr("data-render"),e=jQuery(this).attr("data-responsive"),a=jQuery(this).attr("data-size"),i=jQuery(this).attr("data-min"),r=jQuery(this).attr("data-max"),s=jQuery(this).attr("data-qrcode"),n=jQuery(this).attr("data-color");if("true"==e){var o=jQuery(this).width()*a/100;a=i>o?i:o>r?r:o}else a=a;jQuery(this).qrcode({render:t,size:a,width:a,height:a,fill:n,fontcolor:n,text:s})})}),jQuery(document).on("click","a.ts-to-top",function(){return t("html, body").animate({scrollTop:0},500),!1}),jQuery(".ts-teampage-member-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-teampage-member-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-teampage-member-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=e.attr("data-level"),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){a=a.substring(0,a.length-1);var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")})}else{jQuery(this)}})}),jQuery(".ts-teammate-member-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-teammate-member-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-teammate-member-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=e.attr("data-level"),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){a=a.substring(0,a.length-1);var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")})}else{jQuery(this)}})}),jQuery(".ts-post-skills").find(".ts-skillbars-style1-value").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style2-skillbar").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style3-countbar").css("width","0%").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style1-tooltip").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style2-tooltip").css("opacity","0"),jQuery(".ts-post-skills").find(".ts-skillbars-style3-tooltip").css("opacity","0"),jQuery(".ts-skillbars-style2-wrapper").each(function(){$full_width=jQuery(this).width(),$title_width=jQuery(this).find(".ts-skillbars-style2-title").width(),jQuery(this).find(".ts-skillbars-style2-area").css("margin-left",$title_width+"px").width($full_width-$title_width)}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-skillbars-style2-wrapper").each(function(){$full_width=jQuery(this).width(),$title_width=jQuery(this).find(".ts-skillbars-style2-title").width(),jQuery(this).find(".ts-skillbars-style2-area").css("margin-left",$title_width+"px").width($full_width-$title_width)})}),jQuery(".ts-post-skills").each(function(){jQuery(this).bind("inview",function(t,e,a,i){if(e){{jQuery(this)}"top"==i||"bottom"==i||(jQuery(this).find(".ts-skillbars-style1-value").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style1-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}),jQuery(this).find(".ts-skillbars-style2-skillbar").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","1"),e.find(".ts-skillbars-style2-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}),jQuery(this).find(".ts-skillbars-style3-countbar").each(function(){var t=0,e=jQuery(this),a=parseInt(e.attr("data-level")),i=e.width();if(e.css("opacity","0.75"),e.find(".ts-skillbars-style3-tooltip").css("opacity","1"),0==i){var r=function(){return t>=a||t>=100?(jQuery(this).unbind("inview"),!1):(t+=1,t>a?t=a:t>100&&(t=100),e.css("width",t+"%"),setTimeout(r,2),void 0)};r()}else jQuery(this).unbind("inview")}))}else{jQuery(this)}})}),jQuery(".ts-animation-container-enabled").each(function(){jQuery(this).css(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")?{opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0}:{opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1})}),"undefined"!=typeof jQuery.fn.waypoint?jQuery(".ts-animation-container-viewport").waypoint({handler:function(){if(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")){var t=jQuery(this),e=t.attr("data-animation"),a=parseInt(t.attr("data-delay")),i=parseInt(t.attr("data-duration")),r=parseInt(t.attr("data-repeat")),s=t.attr("data-infinite"),n=t.attr("data-once");setTimeout(function(){t.addClass(e).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1}),"false"==s?setTimeout(function(){"true"==n?(t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-animation-frame").removeClass("ts-animation-container-viewport"),t.waypoint("destroy")):t.removeClass(e)},i*r):t.waypoint("destroy")},a)}},offset:"100%",triggerOnce:!1}):(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile"))&&jQuery(".ts-animation-container-viewport").each(function(){jQuery(this).addClass("ts-animation-container-instant").removeClass("ts-animation-container-viewport")}),jQuery(".ts-animation-container-instant").each(function(){if(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-mobile")){var t=jQuery(this),e=t.attr("data-animation"),a=parseInt(t.attr("data-delay")),i=parseInt(t.attr("data-duration")),r=parseInt(t.attr("data-repeat")),s=t.attr("data-infinite");setTimeout(function(){t.addClass(e).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1}),"false"==s&&setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-animation-frame").removeClass("ts-animation-container-viewport")},i*r)},a)}}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-rating-stars-frame").each(function(){var t=jQuery(this).attr("data-auto");if("true"==t){var e=Math.floor(jQuery(this).width());if(0!=jQuery(this).find(".ts-rating-caption").length)var a=jQuery(this).find(".ts-rating-caption").outerWidth(!0),i=jQuery(this).find(".ts-rating-caption").find(".label").outerHeight(!0);else var a=0,i=0;var r=Math.floor(jQuery(this).outerWidth(!0)-a),s=(parseInt(jQuery(this).attr("data-rating")),parseInt(jQuery(this).attr("data-width"))),n=parseInt(jQuery(this).attr("data-size"));if(r>s){if(r-s>25)var o=0;else var o=25;r=s}else var o=25;if(0==a)if(e>s)var d=n;else var d=Math.floor((r-o)/5);else var d=Math.floor((r-o)/5);jQuery(this).find(".ts-star-rating").css({"font-size":d+"px","line-height":(d>i?d+5:i+5)+"px"}).attr("data-width",r).attr("data-caption",a),jQuery(this).find(".ts-star-rating-rtl").css({"font-size":d+"px","line-height":(d>i?d+5:i+5)+"px"}).attr("data-width",r).attr("data-caption",a)}})}),jQuery(".ts-font-icon-generator").css({opacity:jQuery(this).attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-opacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-opacity")+")","-moz-opacity":jQuery(this).attr("data-opacity"),"-khtml-opacity":jQuery(this).attr("data-opacity")}),jQuery(document).on("mouseenter",".ts-font-icon-generator",function(){"true"==jQuery(this).attr("data-hover")&&jQuery(this).css({color:jQuery(this).attr("data-hovercolor"),background:jQuery(this).attr("data-hoverbackground"),opacity:jQuery(this).attr("data-hoveropacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-hoveropacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-hoveropacity")+")","-moz-opacity":jQuery(this).attr("data-hoveropacity"),"-khtml-opacity":jQuery(this).attr("data-hoveropacity")})}),jQuery(document).on("mouseleave",".ts-font-icon-generator",function(){"true"==jQuery(this).attr("data-hover")&&jQuery(this).css({color:jQuery(this).attr("data-color"),background:jQuery(this).attr("data-background"),opacity:jQuery(this).attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*jQuery(this).attr("data-opacity")+')"',filter:"alpha(opacity="+100*jQuery(this).attr("data-opacity")+")","-moz-opacity":jQuery(this).attr("data-opacity"),"-khtml-opacity":jQuery(this).attr("data-opacity")})}),"undefined"!=typeof jQuery.fn.waypoint?(jQuery(".ts-font-icon-generator-viewport").each(function(){jQuery(this).css({opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0})}),jQuery(".ts-font-icon-generator-viewport").waypoint({handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=parseInt(t.attr("data-delay"));setTimeout(function(){t.addClass(e).css({opacity:t.attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*t.attr("data-opacity")+')"',filter:"alpha(opacity="+100*t.attr("data-opacity")+")","-moz-opacity":t.attr("data-opacity"),"-khtml-opacity":t.attr("data-opacity")}),setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-font-icon-generator-viewport")},2e3)},a)},offset:"100%",triggerOnce:!0})):jQuery(".ts-font-icon-generator-viewport").each(function(){jQuery(this).css({opacity:1,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"',filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1})
}),jQuery(".ts-imagehover").each(function(){var t=jQuery(this),e=t.attr("data-closer"),a=t.attr("data-trigger");"ts-trigger-click"==a&&t.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),jQuery(this).find(".mask").show(),0!=jQuery(this).find(".badonkatrunc-wrapper").length&&jQuery(this).find(".badonkatrunc-wrapper").parent().badonkatrunc("refresh"))}),0!=e.length&&jQuery("body").on("click","#"+e,function(){jQuery("#"+jQuery(this).attr("data-mask")).toggleClass("active"),t.find(".mask").hide()})}),jQuery(".ts-posts-timeline-view").each(function(){function t(){s.alterClass("ts-timeline-*","ts-timeline-asc"),listItem.alterClass("ts-timeline-order-*","ts-timeline-order-asc").attr("data-order","asc"),setTimeout(function(){r()},100)}function e(){s.alterClass("ts-timeline-*","ts-timeline-desc"),listItem.alterClass("ts-timeline-order-*","ts-timeline-order-desc").attr("data-order","desc"),setTimeout(function(){r()},100)}function a(){show=0,listItem.each(function(){"true"==jQuery(this).attr("data-visible")&&show++}),show=parseInt(show)+parseInt(loadmore),listCount>=parseInt(show)?(visible=0,listItem=s.find("li.ts-timeline-list-item"),listItem.each(function(){visible++,visible<=parseInt(show)&&jQuery(this).attr("data-visible","true").addClass("ts-timeline-visible").fadeIn()}),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):(listItem.fadeIn().addClass("ts-timeline-visible").attr("data-visible","true"),moreButton.hide()),setTimeout(function(){listHolder.isotope("reloadItems"),r(),listHolder.isotope("reLayout")},750)}function i(t){("spineTimeline"==layoutSelect||"straightDown"==layoutSelect)&&"postDate"==sortCriteria?(breakItem.addClass("ts-timeline-visible"),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):breakItem.removeClass("ts-timeline-visible").hide(),listHolder.isotope({itemSelector:".ts-timeline-list-item.ts-timeline-visible",animationEngine:"best-available",itemPositionDataEnabled:!1,transformsEnabled:!0,resizesContainer:!0,sortAscending:t,getSortData:{postDate:function(t){return parseInt(t.attr("data-date"))},postModified:function(t){return parseInt(t.attr("data-modified"))},postName:function(t){return t.attr("data-title")},postAuthor:function(t){return t.attr("data-author")},postComments:function(t){return parseInt(t.attr("data-comments"))},postID:function(t){return parseInt(t.attr("data-id"))},postPrice:function(t){return parseInt(t.attr("data-price"))},postRatings:function(t){return parseInt(t.attr("data-rating"))}},sortBy:sortCriteria,layoutMode:layoutMode,filter:listFilter,spineTimeline:{gutterWidth:20,columnPadding:50,spineHolder:spineHolder},onLayout:function(){}},function(){setTimeout(function(){"spineTimeline"==layoutSelect?jQuery("#"+spineHolder).height(listHolder.height()):jQuery("span",jQuery("#"+spineHolder)).remove()},750)})}function r(){s.each(function(){$this=jQuery(this),$this.width(n.width()),listHolder.width(n.width()),"spineTimeline"==layoutSelect?("postDate"==sortCriteria?breakItem.addClass("ts-timeline-visible").show():breakItem.removeClass("ts-timeline-visible").hide(),s.removeClass("ts-postsgrid").addClass("ts-timeline"),jQuery("#"+spineHolder).show(),$this.outerWidth()<=mediaQuery?(layoutMode="masonry",layoutSelect="spineTimeline",listItem.each(function(){jQuery(this).width("100%").removeClass("ts-timeline-layout-straightDown").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry")}),jQuery("span",jQuery("#"+spineHolder)).remove()):(layoutMode="spineTimeline",layoutSelect="spineTimeline",listItem.each(function(){jQuery(this).width("50%").removeClass("ts-timeline-layout-straightDown").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine")}))):("straightDown"==layoutSelect?(s.removeClass("ts-postsgrid").addClass("ts-timeline"),jQuery("#"+spineHolder).hide(),"postDate"==sortCriteria?(breakItem.addClass("ts-timeline-visible").show(),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide()):breakItem.removeClass("ts-timeline-visible").hide()):(s.removeClass("ts-timeline").addClass("ts-postsgrid"),jQuery("#"+spineHolder).hide(),breakItem.removeClass("ts-timeline-visible").hide()),listItem.each(function(){"straightDown"==layoutSelect?(layoutMode="masonry",layoutSelect="straightDown",jQuery(this).width("100%").addClass("ts-timeline-layout-straightDown").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry")):jQuery(this).css("width",columnWidth).removeClass("ts-timeline-layout-straightDown")})),listHolder.attr("data-layout",layoutMode),jQuery("#"+spineHolder).alterClass("ts-posts-spine-layout-*","ts-posts-spine-layout-"+layoutMode),setTimeout(function(){listHolder.hasClass("isotope")&&listHolder.isotope("reloadItems"),i(o),listHolder.isotope("reLayout"),"spineTimeline"==layoutSelect&&jQuery("#"+spineHolder).height(listHolder.height())},750)})}var s=jQuery(this),n=s.parent();if(loadLazy=s.attr("data-lazy"),loadPosts=s.attr("data-ajax"),order=s.attr("data-order"),sortCriteria=s.attr("data-sort"),columnWidth=parseInt(s.attr("data-column")),postType=s.attr("data-type"),shown=loadPosts,loadmore=loadPosts,loadMethod=s.attr("data-trigger"),controlBar=s.find(".ts-isotope-posts-grid-controls"),controlsUp=s.find(".ts-timeline-css-controls-asc"),controlsDown=s.find(".ts-timeline-css-controls-desc"),listHolder=s.find("ul.ts-timeline-list"),listTarget=s.find("ul.ts-timeline-list").attr("id"),listItem=s.find("li.ts-timeline-list-item"),breakItem=s.find("li.ts-timeline-break"),dateHolder=listItem.find(".ts-timeline-date"),listCount=parseInt(listItem.length),listCounter=0,listFilter="",moreButton=s.find(".ts-timeline-load-more"),mediaQuery=parseInt(s.attr("data-break")),spineHolder=s.find(".ts-timeline-spine").attr("id"),layoutSelect=s.attr("data-layout"),layoutMode=s.attr("data-layout"),"desc"==order)var o=!1;else var o=!0;controlsUp.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),controlsDown.toggleClass("active"),o=o?!1:!0,breakItem.each(function(){jQuery(this).attr("data-date",jQuery(this).attr("data-start"))}),t())}),controlsDown.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),controlsUp.toggleClass("active"),o=o?!1:!0,breakItem.each(function(){jQuery(this).attr("data-date",jQuery(this).attr("data-end"))}),e())}),"postDate"==sortCriteria?sortAttribute="data-date":"postModified"==sortCriteria?sortAttribute="data-modified":"postName"==sortCriteria?sortAttribute="data-title":"postAuthor"==sortCriteria?sortAttribute="data-author":"postComments"==sortCriteria?sortAttribute="data-comments":"postID"==sortCriteria?sortAttribute="data-id":"postRating"==sortCriteria?sortAttribute="data-rating":"postPrice"==sortCriteria&&(sortAttribute="data-price"),jQuery("ul#"+listTarget+">li").tsort({order:order,attr:sortAttribute}),listItem.each(function(){listCounter++,jQuery(this).addClass("ts-timeline-order-"+order).attr("data-order",order).attr("data-number",listCounter)}),"true"==loadLazy?(s.find("li.ts-timeline-list-item:lt("+shown+")").addClass("ts-timeline-visible").attr("data-visible","true").fadeIn(),s.find('li[data-visible*="false"]').removeClass("ts-timeline-visible").hide(),moreButton.on("click",a)):listItem.fadeIn().attr("data-visible","true").addClass("ts-timeline-visible"),"true"==loadLazy&&"scroll"==loadMethod&&moreButton.bind("inview",function(t,e,i,r){if(e){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-loadmore-visible"),a())}else{var s=jQuery(this);s.removeClass("ts-loadmore-visible")}}),jQuery(window).on("debouncedresize",function(){r()}),jQuery(this).find(".ts-isotope-posts-sort").change(function(){return sortCriteria=jQuery(this).attr("data-sort"),r(o),!1}),jQuery(this).find(".ts-isotope-posts-layout").change(function(){return s.width("100%"),layoutSelect=jQuery(this).attr("data-layout"),layoutMode=jQuery(this).attr("data-layout"),i(o),r(),("spineTimeline"==layoutSelect||"straightDown"==layoutSelect)&&setTimeout(function(){r()},100),!1}),jQuery(this).find(".ts-isotope-posts-filter").change(function(){var t=s.find(".ts-isotope-posts-filter").length-1,e=0,a=jQuery(this).attr("data-type"),i=jQuery(this).attr("data-key"),r=s.find(".ts-isotope-posts-filter-all"),n=[];return"all"==a?(jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"single"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1)}),n=jQuery(this).attr("data-filter")):(jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"all"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1),jQuery(this).attr("data-key")==i&&jQuery(this).is(":checked")&&(e++,n.push(jQuery(this).attr("data-filter")))}),0==e?r.prop("checked",!0):e==t&&(r.prop("checked",!0),jQuery(".ts-isotope-posts-filter").each(function(){jQuery(this).attr("data-key")==i&&"single"==jQuery(this).attr("data-type")&&jQuery(this).prop("checked",!1)})),n=n.join(", ")),listFilter=n,listHolder.isotope({filter:listFilter}),!1})}),jQuery(".ts-newsticker-oneliner").each(function(){{var t=jQuery(this).attr("id"),e=jQuery(this).hasClass("ts-newsticker-fixed"),a=jQuery(this).attr("data-parent"),i=jQuery(this).attr("data-header"),r=jQuery(this).attr("data-direction"),s=jQuery(this).attr("data-ticker"),n=parseInt(jQuery(this).attr("data-break")),o=jQuery(this).attr("data-navigation"),d=jQuery(this).attr("data-controls"),u=jQuery(this).attr("data-auto"),l=parseInt(jQuery(this).attr("data-speed")),c=jQuery(this).attr("data-hover"),h=jQuery(this).attr("data-next"),p=jQuery(this).attr("data-prev"),m=jQuery(this).attr("data-stop"),f=jQuery(this).attr("data-play");jQuery(this).find(".newsticker").newsTicker({row_height:44,max_rows:1,speed:500,duration:l,direction:r,autostart:"true"==u?!0:!1,pauseOnHover:"true"==c?!0:!1,nextButton:jQuery("#"+h),prevButton:jQuery("#"+p),stopButton:jQuery("#"+m),startButton:jQuery("#"+f)})}jQuery("#"+m).on("click",function(){jQuery("#"+m).hide(),jQuery("#"+f).show()}),jQuery("#"+f).on("click",function(){jQuery("#"+f).hide(),jQuery("#"+m).show()}),jQuery(window).on("debouncedresize",function(){if("true"==o)var r=jQuery("#"+d).width()+10;else var r=0;1==e?jQuery("#"+t).width()<n?(jQuery("#"+t).addClass("breakline"),jQuery("#"+s).css("width","100%")):(jQuery("#"+t).removeClass("breakline"),setTimeout(function(){var e=jQuery("#"+i).width(),a=jQuery("#"+t).width()-r-e-10;jQuery("#"+s).css("width",a+"px")},500)):jQuery("#"+a).width()<n?(jQuery("#"+t).addClass("breakline"),jQuery("#"+s).css("width","100%")):(jQuery("#"+t).removeClass("breakline"),setTimeout(function(){var t=jQuery("#"+i).width(),e=jQuery("#"+a).width()-r-t-10;jQuery("#"+s).css("width",e+"px")},500))})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-lightbox-gallery-stack").each(function(){jQuery(this).stackslider()})}),jQuery(".ts_html5_video_hide").each(function(){1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-show")&&jQuery(this).attr("data-show","false")}),jQuery("body").on("click",".ts_html5_video_remove",function(t){t.preventDefault();var e=jQuery(this).attr("data-player");jQuery("#"+e).remove(),jQuery(this).off().remove()}),jQuery("body").on("click",".ts_html5_video_hide",function(t){t.preventDefault();var e=jQuery(this).attr("data-player"),a=jQuery(this).attr("data-position"),i=jQuery(this).attr("data-width"),r=jQuery(this).hasClass("active");r?(jQuery(this).removeClass("active").addClass("inactive"),"topleft"==a||"bottomleft"==a?(jQuery("#"+e).animate({left:0},250,function(){}),jQuery(this).animate({left:parseInt(i)+2},250,function(){})):("topright"==a||"bottomright"==a)&&(jQuery("#"+e).animate({right:0},250,function(){}),jQuery(this).animate({right:parseInt(i)+2},250,function(){}))):(jQuery(this).removeClass("inactive").addClass("active"),"topleft"==a||"bottomleft"==a?(jQuery("#"+e).animate({left:-(parseInt(i)+2)},250,function(){}),jQuery(this).animate({left:0},250,function(){})):("topright"==a||"bottomright"==a)&&(jQuery("#"+e).animate({right:-(parseInt(i)+2)},250,function(){}),jQuery(this).animate({right:0},250,function(){})),jQuery("#"+e).find("iframe").contents().find(".pppause").click())}),jQuery(".ts_html5_audio_hide").each(function(){1==TS_VCSC_MobileDevice&&"true"==jQuery(this).attr("data-show")&&jQuery(this).attr("data-show","false")}),jQuery("body").on("click",".ts_html5_audio_remove",function(t){t.preventDefault();var e=jQuery(this).attr("data-player"),a=jQuery(this).attr("data-info"),i=jQuery(this).attr("data-controls");jQuery("#"+e).remove(),jQuery("#"+a).off(),jQuery(this).off(),jQuery("#"+i).remove()}),jQuery("body").on("click",".ts_html5_audio_hide",function(t){t.preventDefault();var e=jQuery(this).attr("data-controls"),a=jQuery(this).attr("data-player"),i=jQuery(this).attr("data-position"),r=jQuery(this).attr("data-width"),s=jQuery(this).attr("data-info"),n=jQuery(this).hasClass("active");n?(jQuery(this).removeClass("active").addClass("inactive"),"topleft"==i||"bottomleft"==i?(jQuery("#"+a).animate({left:0},250,function(){}),jQuery("#"+s).show(),jQuery("#"+e).animate({left:parseInt(r)+2},250,function(){})):("topright"==i||"bottomright"==i)&&(jQuery("#"+a).animate({right:0},250,function(){}),jQuery("#"+s).show(),jQuery("#"+e).animate({right:parseInt(r)+2},250,function(){}))):(jQuery(this).removeClass("inactive").addClass("active"),"topleft"==i||"bottomleft"==i?(jQuery("#"+a).animate({left:-(parseInt(r)+2)},250,function(){}),jQuery("#"+s).hide(),jQuery("#"+e).animate({left:0},250,function(){})):("topright"==i||"bottomright"==i)&&(jQuery("#"+a).animate({right:-(parseInt(r)+2)},250,function(){}),jQuery("#"+s).hide(),jQuery("#"+e).animate({right:0},250,function(){})))}),jQuery(".ts-ipresenter-container").each(function(){var t=jQuery(this),e=t.find(".ts-ipresenter-main"),a="true"==t.attr("data-autoheight")?!0:!1,i="true"==t.attr("data-fixedheight")?!0:!1,r=parseInt(t.attr("data-setheight")),s=parseInt(t.attr("data-animationspeed")),n="true"==t.attr("data-randomstart")?!0:!1,o="true"==t.attr("data-zoomeffect")?!0:!1,d="true"==t.attr("data-autoplay")?!0:!1,u="true"==t.attr("data-viewport")?!0:!1,l="true"==t.attr("data-mobile")?!0:!1;1==TS_VCSC_MobileDevice&&0==l&&(d=!1);var c="true"==t.attr("data-replay")?!0:!1,h="true"==t.attr("data-pauseonhover")?!0:!1,p=parseInt(t.attr("data-pausetime")),m=t.attr("data-timer"),f=t.attr("data-timerposition"),g=parseInt(t.attr("data-timerdiameter")),y=t.attr("data-timerbackground"),v=t.attr("data-timercolor"),j=parseInt(t.attr("data-timeropacity"))/100,Q="true"==t.attr("data-directionnav")?!0:!1,w="true"==t.attr("data-controlnav")?!0:!1,b="true"==t.attr("data-controlnavthumbs")?!0:!1,C="true"==t.attr("data-controlnavtooltip")?!0:!1,_="true"==t.attr("data-keyboardnav")?!0:!1,x="true"==t.attr("data-touchnav")?!0:!1;e.TS_VCSC_iPresenter({autoHeight:a,fixedHeight:i,height:r,easing:"ease-in-out",animSpeed:s,itemsOpacity:.4,nextLabel:"Next",previousLabel:"Previous",playLabel:"Play",pauseLabel:"Pause",randomStart:n,startStep:1,zoomEffect:o,autoPlay:d,playViewport:u,replay:c,pauseOnHover:h,pauseTime:p,timer:m,timerPosition:f,timerDiameter:g,timerBg:y,timerColor:v,timerOpacity:j,timerPadding:4,timerStroke:4,timerBarStroke:1,timerBarStrokeColor:y,timerBarStrokeStyle:"solid",timerBarStrokeRadius:4,directionNav:Q,directionNavHoverOpacity:.6,controlNav:w,controlNavNextPrev:!1,controlNavHoverOpacity:.6,controlNavThumbs:b,controlNavTooltip:C,keyboardNav:_,touchNav:x,onPlay:function(){},onPause:function(){},onAfterLoad:function(){},onBeforeChange:function(){},onAfterChange:function(){},onSlideshowEnd:function(){},onLastStep:function(){}})}),"undefined"!=typeof jQuery.fn.tooltipster&&jQuery(".ts-has-tooltipster-tooltip").each(function(){$tipster_html="true"==jQuery(this).attr("data-tooltipster-html")?!0:!1,$tipster_title=jQuery(this).attr("data-tooltipster-title"),$tipster_text=jQuery(this).attr("data-tooltipster-text"),$tipster_html&&($tipster_text=decodeURIComponent(TS_VCSC_Base64.decode($tipster_text))),$tipser_image=jQuery(this).attr("data-tooltipster-image"),$tipster_content=0!=$tipser_image.length?'<img class="tooltipster-content-image" src="'+$tipser_image+'">':0!=$tipster_title.length?'<div class="tooltipster-content-title">'+$tipster_title+'</div><div class="tooltipster-content-text">'+$tipster_text+"</div>":'<div class="tooltipster-content-text">'+$tipster_text+"</div>",$tipster_trigger=jQuery(this).attr("data-tooltipster-trigger"),$tipster_theme=jQuery(this).attr("data-tooltipster-theme"),$tipster_position=jQuery(this).attr("data-tooltipster-position"),$tipster_animation=jQuery(this).attr("data-tooltipster-animation"),$tipster_arrow="true"==jQuery(this).attr("data-tooltipster-arrow")?!0:!1,$tipster_touchicon="true"==jQuery(this).attr("data-tooltipster-touch")?!0:!1,$tipster_offsetx=parseInt(jQuery(this).attr("data-tooltipster-offsetx")),$tipster_offsety=parseInt(jQuery(this).attr("data-tooltipster-offsety")),jQuery(this).tooltipster({theme:$tipster_theme,arrow:$tipster_arrow,content:$tipster_content,contentAsHTML:!0,trigger:$tipster_trigger,animation:$tipster_animation,onlyOne:!0,position:$tipster_position,delay:200,minWidth:75,maxWidth:300,iconDesktop:!1,iconTouch:$tipster_touchicon,offsetX:$tipster_offsetx,offsetY:$tipster_offsety,interactive:!0})}),"undefined"!=typeof jQuery.fn.nchlightbox&&(jQuery.fn.nchlightbox("addEvent","open",function(t,e){if(jQuery("body, html").addClass("ts-composer-extensions-noscroll"),jQuery(".ts_html5_media_frame_insert").each(function(){jQuery(this).contents().find(".projekktor").hasClass("ppstateplaying")&&($projekktor=jQuery(this).contents().find(".projekktor"),$projekktor.find(".pppause").click())}),jQuery(".ts-ihover-image-container").fadeTo(100,0),"undefined"!=typeof jQuery.fn.tooltipster&&jQuery(".tooltipstered").tooltipster("hide"),!e.numbered){var a,i=e.set,r=i.length;if(1!=i.length){for(var s=0;r>s;s++)i[s].opts.title=((a=i[s].opts.title)?a:"")+" ("+(s+1)+" / "+r+")";e.numbered=!0}}}),jQuery.fn.nchlightbox("addEvent","close",function(){jQuery("body, html").removeClass("ts-composer-extensions-noscroll"),jQuery(".ts-ihover-image-container").fadeTo(100,1)}),jQuery.fn.nchlightbox("addEvent","next",function(t,e,a){!e.playing||"youtube"!=a.opts.type&&"vimeo"!=a.opts.type&&"dailymotion"!=a.opts.type||jQuery.fn.nchlightbox("stop")}),jQuery("body").on("click",".nch-lightbox-trigger",function(t){t.preventDefault();var e=jQuery(this).attr("data-group");""!=e&&jQuery("#"+e+"-0").click()}),jQuery(".nch-lightbox-media").nchlightbox(),jQuery(".nch-lightbox-modal").nchlightbox({thumbs:0,share:0,zoom:0,fxspeed:$TS_VCSC_Lightbox_FXSpeed,keyboard:!1,bgclose:!0,notouch:!1,backlight:$TS_VCSC_Lightbox_Backlight,usecolor:$TS_VCSC_Lightbox_UseColor}),jQuery(".nch-lightbox-html5").nchlightbox({share:0,zoom:0,fxspeed:$TS_VCSC_Lightbox_FXSpeed,keyboard:$TS_VCSC_Lightbox_Keyboard,bgclose:!0,notouch:!1,backlight:$TS_VCSC_Lightbox_Backlight,usecolor:$TS_VCSC_Lightbox_UseColor,fullscreen:!1}),jQuery(".ts-image-link-grid").each(function(){var t=jQuery(this).find("img"),e=jQuery(this).attr("data-grid").split(","),a=parseInt(jQuery(this).attr("data-margin")),i=parseInt(jQuery(this).attr("data-random")),r="true"==jQuery(this).attr("data-order")?!0:!1,s="true"==jQuery(this).attr("data-always")?!0:!1,n=jQuery(this).attr("data-gridavailable"),o=jQuery(this).attr("data-gridselected"),d=jQuery(this).attr("data-gridnogroups"),u=jQuery(this).attr("data-gridtoggle"),l=jQuery(this).attr("data-gridtogglestyle"),c=jQuery(this).attr("data-gridshowall"),h=jQuery(this).attr("data-gridshowallstyle");t.nchgrid({margin:a,grid:e,order:r,captions:!0,linkGrid:!0,target:!1,random:i,filter:!0,titles:s,selector:"nch-lb-filter-"+i,toggle:"nch-lb-toggle-"+i,showall:"nch-lb-showall-"+i,textAvailable:n,textSelected:o,textNoGroups:d,textToggle:u,textToggleStyle:l,textShowAll:c,textShowAllStyle:h})})),e(),i(),r(),s()}),jQuery(window).load(function(){function a(){jQuery(".ts-image-picstrips").each(function(){var t=parseInt(jQuery(this).attr("data-strips")),e=parseInt(jQuery(this).attr("data-space")),a=parseInt(jQuery(this).attr("data-offset")),i=jQuery(this).attr("data-color");jQuery(this).height("100%");var r=jQuery(this).find("img").height();jQuery(this).find(".molbars").remove(),jQuery(this).find("img").picstrips({splits:t,hgutter:e+"px",vgutter:a+"px",bgcolor:i}),jQuery(this).height(r)})}function n(){jQuery(".ts-image-caman-canvas").each(function(){jQuery("#ts-image-caman-process-"+t).show();var t=jQuery(this).attr("data-number"),e=jQuery("#ts-image-caman-original-"+t).width();jQuery("#ts-image-caman-original-"+t).attr("data-width",e);var a=jQuery("#ts-image-caman-original-"+t).height();jQuery("#ts-image-caman-original-"+t).attr("data-height",a),jQuery(this).attr("data-camanwidth",e).attr("data-camanheight",a),jQuery(this).height(a),jQuery("#ts-image-caman-process-"+t).hide(),jQuery("#ts-image-caman-handle-"+t).show()})}function o(){jQuery(".flip-container-frame.auto").each(function(){var t=0;jQuery(this).find(".flip-container-flipper-front > *").each(function(e,a){t+=jQuery(a).outerHeight(!0)});var e=0;jQuery(this).find(".flip-container-flipper-back > *").each(function(t,a){e+=jQuery(a).outerHeight(!0)});var a=t>e?t:e;jQuery(this).css("height",a+"px"),jQuery(this).find(".flip-container-flipper-front").css("height",a+"px"),jQuery(this).find(".flip-container-flipper-back").css("height",a+"px")}),jQuery(".ts-flip-cube.auto").each(function(){var t=20;jQuery(this).find(".ts-front").find(".ts-flip-content > *").each(function(e,a){t+=jQuery(a).outerHeight(!0)});var e=20;jQuery(this).find(".ts-back").find(".ts-flip-content > *").each(function(t,a){e+=jQuery(a).outerHeight(!0)});var a=t>e?t:e;jQuery(this).css("height",a+"px"),jQuery(this).find(".ts-front").find(".ts-flip-content").css("height",a+"px"),jQuery(this).find(".ts-back").find(".ts-flip-content").css("height",a+"px")})}if("undefined"!=typeof jQuery.fn.nchlightbox&&jQuery(".nch-lightbox-open").each(function(){if("true"==jQuery(this).attr("data-open")){var t=jQuery(this).attr("data-delay");setTimeout(function(){jQuery(".nch-lightbox-open").nchlightbox({thumbs:0,share:0,social:"",zoom:0,bgclose:!0}).nchlightbox("open")},t)}}),"undefined"!=typeof jQuery.fn.adipoli&&(jQuery("img.ts-imageadipoli").each(function(){var t=jQuery(this).attr("data-start"),e=jQuery(this).attr("data-hover"),a=jQuery(this).attr("data-text"),i=jQuery(this).attr("data-frame"),r=jQuery(this).height(),s=jQuery(this).width();jQuery(this).height(r),jQuery(this).width(s),jQuery("#"+i).width(s),jQuery("#"+i+"-counter").width(s),jQuery(this).adipoli({startEffect:t,hoverEffect:e,overlayText:a})}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-image-adipoli-frame").each(function(){var t=jQuery(this).find("img.ts-imageadipoli"),e=t.attr("data-responsive");if("true"==e){jQuery(this).find(".adipoli-before").remove(),jQuery(this).find(".adipoli-after").remove(),t.show();var a=t.attr("data-frame"),i=t.attr("data-width"),r=t.attr("data-height"),s=t.attr("data-handle"),n=parseInt(jQuery(this).find(".ts-image-adipoli-padding").css("padding-bottom"));jQuery("#"+a).width(i+"%"),jQuery("#"+a+"-counter").width("100%"),t.width("100%"),t.height(r),"true"==s?(t.unwrapUntil(".ts-image-adipoli-padding"),jQuery("#"+a+"-counter").height(t.height()+n+"px")):(t.unwrapUntil("#"+a+"-counter"),jQuery("#"+a+"-counter").height(t.height()+"px"));var o=t.attr("data-start"),d=t.attr("data-hover"),u=t.attr("data-text");r=t.height(),i=t.width(),jQuery("#"+a).width(i),jQuery("#"+a+"-counter").width(i),t.adipoli({startEffect:o,hoverEffect:d,overlayText:u})}else{var a=t.attr("data-frame"),s=t.attr("data-handle"),n=parseInt(jQuery(this).find(".ts-image-adipoli-padding").css("padding-bottom"));jQuery("#"+a+"-counter").height("true"==s?t.height()+n+"px":t.height()+"px")}})})),"undefined"!=typeof jQuery.fn.picstrips&&jQuery(window).on("debouncedresize",function(){a()}),jQuery(".ts-image-caman-canvas").each(function(){var t=jQuery(this).attr("data-effect"),e=jQuery(this).attr("data-number");Caman(this,function(){"vintage"==t?this.vintage():"lomo"==t?this.lomo():"clarity"==t?this.clarity():"sinCity"==t?this.sinCity():"sunrise"==t?this.sunrise():"crossProcess"==t?this.crossProcess():"orangePeel"==t?this.orangePeel():"love"==t?this.love():"grungy"==t?this.grungy():"jarques"==t?this.jarques():"pinhole"==t?this.pinhole():"oldBoot"==t?this.oldBoot():"glowingSun"==t?this.glowingSun():"hazyDays"==t?this.hazyDays():"herMajesty"==t?this.herMajesty():"nostalgia"==t?this.nostalgia():"hemingway"==t?this.hemingway():"concentrate"==t?this.concentrate():"emboss"==t?this.emboss():"greyscale"==t?this.greyscale():"invert"==t&&this.invert(),this.render(function(){var t=jQuery("#ts-image-caman-original-"+e).width();jQuery("#ts-image-caman-original-"+e).attr("data-width",t);var a=jQuery("#ts-image-caman-original-"+e).height();jQuery("#ts-image-caman-original-"+e).attr("data-height",a),jQuery(this).attr("data-camanwidth",t).attr("data-camanheight",a),jQuery(this).height(a),jQuery("#ts-image-caman-process-"+e).hide(),jQuery("#ts-image-caman-handle-"+e).show()})})}),jQuery(window).on("debouncedresize",function(){n()}),jQuery(".ts-image-magnify-container").each(function(){function t(){var t=s.width()*h,e=s.height()*h,a=s.offset();b.css("background-size",t,e);var i=b.width()/2,r=b.height()/2,n=-z*h+i+a.left*h,o=-D*h+r+a.top*h,d=n+"px "+o+"px";b.css({backgroundPosition:d});var u=(Math.round(100*h)/100).toFixed(1);b.attr("data-zoom",u),C.empty().html(u+"x"),_&&(k.val(u),x.empty().html(u+"x")),h=100*h/100,j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll")}function e(t){clearTimeout(l),T=S.width()/100*n-b.width()/2,$=S.height()/100*o-b.height()/2;{var e=s.offset();s.width(),s.height()}z=e.left+T+b.width()/2,D=e.top+$+b.height()/2;var a=s.width()*h,i=s.height()*h,e=s.offset();b.css("background-size",a,i);var r=b.width()/2,d=b.height()/2,u=-z*h+r+e.left*h,c=-D*h+d+e.top*h,p=u+"px "+c+"px",m=z-r-e.left,f=D-d-e.top;t?b.animate({top:f,left:m},{duration:500,easing:"easeInOutBack",complete:function(){b.css({backgroundPosition:p}),b.attr("data-position",p)}}):(b.css({left:m,top:f,backgroundPosition:p}),b.attr("data-position",p))}function a(){clearTimeout(l),s.height("100%");var t=parseInt(s.attr("data-zoomsize")),a=s.find(".ts-image-magnify-preview"),i=s.find(".ts-image-magnify-glass"),r=0;s.height(a.height()),a.height()/2<i.height()?(r=a.height()/2,r>t&&(r=t),i.css("width",r),i.css("height",r)):a.height()/2<t?(r=a.height()/2,r>t&&(r=t),i.css("width",r),i.css("height",r)):(r=t,r>a.height()/2&&(r=a.height()/2),i.css("width",r),i.css("height",r)),e(!1)}var i=!1,r=!1,s=jQuery(this),n=parseInt(s.attr("data-zoomstartx")),o=parseInt(s.attr("data-zoomstarty")),d="true"==s.attr("data-zoomrestore")?!0:!1,u=parseInt(s.attr("data-zoomtimeout")),l="",c=parseInt(s.attr("data-zoomlevel")),h=(Math.round(100*c)/100).toFixed(1),p=0,m=((Math.round(100*c)/100).toFixed(1),parseInt(s.attr("data-zoomsize")),"true"==s.attr("data-zoomdrag")?!0:!1),f="true"==s.attr("data-zoomcircle")?!0:!1,g="true"==s.attr("data-zoomreflect")?!0:!1,y="true"==s.attr("data-zoomshow")?!0:!1,v="true"==s.attr("data-zoomoutside")?!0:!1;v||s.addClass("ts-image-magnify-contained");var j="true"==s.attr("data-zoommouse")?!0:!1,Q=parseInt(s.attr("data-zoomwheel"))/100,w="true"==s.attr("data-zoompinch")?!0:!1,b=s.find(".ts-image-magnify-glass"),C=s.find(".ts-image-magnify-level"),_="true"==s.attr("data-zoomrange")?!0:!1,x=s.find(".ts-image-magnify-scale"),k=s.find(".ts-image-magnify-range"),I=s.find(".ts-image-magnify-link");0!=I.length&&"undefined"!=typeof $TS_VCSC_Magnify_Lightbox&&I.attr("title",$TS_VCSC_Magnify_Lightbox);var S=s.find(".ts-image-magnify-preview"),T=0,$=0,z=0,D=0;if(f?(b.addClass("ts-image-magnify-circle"),b.children(".ts-image-magnify-zoomed").addClass("ts-image-magnify-circle")):(b.removeClass("ts-image-magnify-circle"),b.children(".ts-image-magnify-zoomed").removeClass("ts-image-magnify-circle")),g?b.children(".ts-image-magnify-zoomed").addClass("ts-image-magnify-reflected"):b.children(".ts-image-magnify-zoomed").removeClass("ts-image-magnify-reflected"),m?(s.addClass("ts-image-magnify-dragging"),s.on("mousedown touchstart",function(){i=!0,s.trigger("mouseenter"),b.fadeIn(200)}),s.on("mouseup touchend",function(){i=!1,s.trigger("mouseleave"),y||b.fadeOut(200)})):(s.removeClass("ts-image-magnify-dragging"),s.on("touchstart",function(){s.trigger("mouseenter")}),s.on("mouseup touchend",function(){s.trigger("mouseleave")})),_&&(k.on("mousedown touchstart mouseenter",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll"),r=!0}),k.on("mouseup touchend",function(){h=jQuery(this).val(),t(),r=!1}),k.on("mouseleave",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll")}),"undefined"!=typeof $TS_VCSC_Magnify_ChangeLevel&&x.attr("title",$TS_VCSC_Magnify_ChangeLevel),x.on("click",function(){j&&jQuery("body, html").addClass("ts-composer-extensions-noscroll"),r=!0,k.slideToggle(),r=!1})),s.bind("mousemove "+b,function(t){if(t.preventDefault(),s.trigger("hover"),!r){var e=s.offset(),a=s.width(),n=s.height();if(t.pageX<a+e.left&&t.pageY<n+e.top&&t.pageX>0+e.left&&t.pageY>0+e.top?b.fadeIn(200):y||b.fadeOut(200),!m||i&&m){z=t.pageX,D=t.pageY;var o=s.width()*h,d=s.height()*h,e=s.offset();b.css("background-size",o,d);var u=b.width()/2,l=b.height()/2,c=-t.pageX*h+u+e.left*h,p=-t.pageY*h+l+e.top*h,f=c+"px "+p+"px",g=t.pageX-u-e.left,v=t.pageY-l-e.top;b.css({left:g,top:v,backgroundPosition:f}),b.attr("data-position",f)}}}),s.on("mouseleave touchend",function(){d&&(clearTimeout(l),l=setTimeout(function(){e(!0)},u),clearTimeout(l))}),TS_VCSC_SimulateTouchEvents(b,!1),w&&TS_VCSC_IsTouchDevice){Hammer(s).on("pinchin",function(t){return t.preventDefault(),r=!0,scale=t.gesture.scale,p=-Math.round(100*scale).toFixed(0)/100,!1}).on("pinchout",function(t){return t.preventDefault(),r=!0,scale=t.gesture.scale,p=(Math.round(400*scale)/4).toFixed(0)/100,p>10&&(p=10),!1}).on("release",function(e){return e.preventDefault(),r&&(h=parseInt(b.attr("data-zoom"))+p,1>h?h=1:h>10&&(h=10),t(),r=!1),!1})}j&&!TS_VCSC_MobileDevice&&(s.on("mouseenter",function(){jQuery("body, html").addClass("ts-composer-extensions-noscroll")}),s.on("mouseleave",function(){r||jQuery("body, html").removeClass("ts-composer-extensions-noscroll")}),s.bind("mousewheel",function(e,a){a>0?h+=Q:h>1&&(h-=Q),1>h?h=1:h>10&&(h=10),t()})),y&&b.fadeIn(200),b.attr("data-zoom",h),C.empty().html(h+"x"),h=parseInt(h),_&&(k.val(h),x.empty().html(h+"x")),jQuery(window).on("debouncedresize",function(){a()})}),jQuery(".ts-image-zoomer-container").each(function(){function e(){"tall"==n?(i.height("100%"),i.width("100%"),h=a.width(),p=h/o/2,i.css("width",h+"px"),i.css("height",p+"px")):(i.height("100%"),i.width("100%"),h=r.width(),p=r.height(),i.css("width",h+"px"),i.css("height",p+"px")),i.TS_VCSC_ImageZoomer("resize"),i.TS_VCSC_ImageZoomer("pan",50,50)}var a=jQuery(this),i=a.find(".ts-image-zoomer-viewer"),r=(a.find(".ts-image-zoomer-preview"),a.find(".ts-image-zoomer-holder")),s=a.attr("data-position"),n=a.attr("data-aspect"),o=a.attr("data-ratio"),d=(parseInt(a.attr("data-width")),parseInt(a.attr("data-height")),"true"==a.attr("data-scale")?!0:!1),u="true"==a.attr("data-reset")?!0:!1,l="true"==a.attr("data-rotate")?!0:!1,c="true"==a.attr("data-lightbox")?!0:!1,h=(a.width(),r.width()),p=r.height();r.show(),"tall"==n?(i.height("100%"),i.width("100%"),h=a.width(),p=h/o/2,i.css("width",h+"px"),i.css("height",p+"px")):(i.height("100%"),i.width("100%"),h=r.width(),p=r.height(),i.css("width",h+"px"),i.css("height",p+"px")),i.TS_VCSC_ImageZoomer({callback:t.noop,controls:{position:s,zoomIn:null,zoomOut:null,zoomLevel:null,next:null,previous:null,reset:null,rotate:null,lightbox:null},text:{zoomIn:$TS_VCSC_Magnify_ZoomIn,zoomOut:$TS_VCSC_Magnify_ZoomOut,zoomLevel:$TS_VCSC_Magnify_ZoomLevel,next:$TS_VCSC_Magnify_Next,previous:$TS_VCSC_Magnify_Previous,reset:$TS_VCSC_Magnify_Reset,rotate:$TS_VCSC_Magnify_Rotate,lightbox:$TS_VCSC_Magnify_Lightbox},customClass:"",enertia:.2,increment:.01,marginMin:0,marginMax:0,zoomLevel:d,reset:u,rotate:l,lightbox:c,retina:!1,source:null}),jQuery(window).on("debouncedresize",function(){e()
})}),jQuery(".ts_html5_audio_hide").each(function(){"false"==jQuery(this).attr("data-show")&&jQuery(this).click()}),jQuery(".ts_html5_video_hide").each(function(){"false"==jQuery(this).attr("data-show")&&jQuery(this).click()}),jQuery(".ts-imagehover-truncate").each(function(){var t=jQuery(this),e=t.find(".maskcontent");jQuery(window).on("debouncedresize",function(){e.css("height","auto");var a=t.find(".mask").height(),i=t.find(".ts-image-hover-title").outerHeight(!0),r=t.find(".ts-image-hover-button").outerHeight(!0);if(""!=e)var s=parseInt(e.css("paddingTop").replace("px",""))+parseInt(e.css("paddingBottom").replace("px","")),n=parseInt(e.css("marginTop").replace("px",""))+parseInt(e.css("marginBottom").replace("px",""));else var s=0,n=0;var o=a-i-r-s-n;0!=e.find(".badonkatrunc-wrapper").length&&e.badonkatrunc("destroy"),e.css("height",o+"px"),e.badonkatrunc({automaticSizeTracking:!1,fitDirection:"vertical",minimumFontSize:1,fontSizeSynced:!0,letterSpacingSynced:!0,truncate:!0,truncateOnlyWholeWords:!0}),setTimeout(function(){e.badonkatrunc("refresh"),e.height(e.find(".badonkatrunc-wrapper").outerHeight(!0))},100)})}),jQuery(".ts-logohover-truncate").each(function(){var t=jQuery(this),e=t.find(".logotitle");jQuery(window).on("debouncedresize",function(){if(0!=e.length){e.css("height","auto");var a=t.find(".mask").height(),i=t.find(".maskcontent").outerHeight(!0),r=parseInt(e.css("paddingTop").replace("px",""))+parseInt(e.css("paddingBottom").replace("px","")),s=parseInt(e.css("marginTop").replace("px",""))+parseInt(e.css("marginBottom").replace("px","")),n=a-i-r-s;0!=e.find(".badonkatrunc-wrapper").length&&e.badonkatrunc("destroy"),e.css("height",n+"px"),e.badonkatrunc({automaticSizeTracking:!1,fitDirection:"horizontal",minimumFontSize:.75,maximumFontSize:1.75,fontSizeSynced:!0,letterSpacingSynced:!0,truncate:!0,truncateOnlyWholeWords:!1}),setTimeout(function(){e.badonkatrunc("refresh"),e.height("auto")},100)}})}),jQuery(window).on("debouncedresize",function(){e(),i(),r(),s(),e(),i(),r(),s()}),"undefined"!=typeof jQuery.fn.waypoint&&(jQuery(".ts-vcsc-font-icon-viewport").each(function(){jQuery(this).css({opacity:0,"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"',filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0})}),jQuery(".ts-vcsc-font-icon-viewport").waypoint({handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=parseInt(t.attr("data-delay"));setTimeout(function(){t.css({opacity:t.attr("data-opacity"),"-ms-filter":'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+100*t.attr("data-opacity")+')"',filter:"alpha(opacity="+100*t.attr("data-opacity")+")","-moz-opacity":t.attr("data-opacity"),"-khtml-opacity":t.attr("data-opacity")}),t.addClass(e),setTimeout(function(){t.removeAttr("data-viewport"),t.removeClass(e),t.removeClass("ts-vcsc-font-icon-viewport"),t.waypoint("destroy")},2e3)},a)},offset:"100%",triggerOnce:!0})),o(),jQuery(window).on("debouncedresize",function(){jQuery(".flip-container-frame.auto").each(function(){jQuery(this).height("100%"),jQuery(this).find(".flip-container-flipper-front").css("height","100%"),jQuery(this).find(".flip-container-flipper-back").css("height","100%")}),jQuery(".ts-flip-cube.auto").each(function(){jQuery(this).find(".ts-front").find(".ts-flip-content").css("height","100%"),jQuery(this).find(".ts-back").find(".ts-flip-content").css("height","100%"),jQuery(this).height("100%")}),o()}),TS_VCSC_Supports3D?jQuery(".flip-container-frame").on("mouseenter mouseleave",function(t){var e=jQuery(this).find(".ts-font-icon"),a=jQuery(this).find(".ts-font-icon").attr("data-animation"),i=jQuery(this).find(".flip-container-main").attr("data-speed");"mouseenter"===t.type||"touchstart"===t.type?e.removeClass(a):("mouseleave"===t.type||"touchend"===t.type)&&window.setTimeout(function(){e.addClass(a)},parseInt(i))}):jQuery(".flip-container-frame").on("mouseenter mouseleave",function(t){var e=jQuery(this).find(".ts-font-icon"),a=jQuery(this).find(".ts-font-icon").attr("data-animation"),i=jQuery(this).find(".flip-container-main").attr("data-speed"),r=jQuery(this).find(".flip-container-flipper-front"),s=jQuery(this).find(".flip-container-flipper-back");"mouseenter"===t.type||"touchstart"===t.type?(e.removeClass(a),r.fadeOut(i),s.fadeIn(i)):("mouseleave"===t.type||"touchend"===t.type)&&(window.setTimeout(function(){e.addClass(a)},parseInt(i)),s.fadeOut(i),r.fadeIn(i))}),jQuery(".ts-owlslider-parent").each(function(){function t(){S=jQuery("#"+$).find(".owl-item").length-1,Q=(new Date).setTime((new Date).getTime()+0),w=(new Date).setTime((new Date).getTime()+1e3*k),b=100,jQuery("#ts-owlslider-progressbar-"+z).prependTo(jQuery("#"+$)),h?jQuery("#"+$).find(".owl-dots").show():jQuery("#"+$).find(".owl-dots").hide(),window.setTimeout(function(){e(),jQuery(window).trigger("debouncedresize")},250),window.setTimeout(function(){B.trigger("refresh.owl.carousel"),r()},500)}function e(){if(1==o&&1==d){r(),jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),v=!1,isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;Q=(new Date).setTime((new Date).getTime()+0),w=(new Date).setTime((new Date).getTime()+1e3*k);var s=w-Q;j=setInterval(function(){if(v===!1){C>0&&(w+=C,Q+=C,s=w-Q,C=0);var r=w-new Date,n=new Date-Q,o=parseInt(r/i),d=parseInt((r-o*i)/a),u=parseInt((r-o*i-d*a)/e),l=(parseInt((r-o*i-u*e-d*a)/t),n>0?n/s*b:0);jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width",l+"%").attr("data-progress",l)}l>=100&&(clearInterval(j),jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),jQuery("#ts-owlslider-controls-next-"+z).click())},b)}}function a(){0==I&&(v=!0)}function i(){0==I&&(v=!1,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),clearInterval(j),e())}function r(){if(1==n){var t=jQuery("#"+$).find(".owl-stage").find(".active").length,e=jQuery("#"+$).find(".owl-stage .owl-item.active").first().height();if(1==t)var a=e;else{var i=Math.max.apply(null,jQuery("#"+$).find(".owl-stage").find(".active").map(function(){return jQuery(this).height()}).get());if(i>e)var a=i;else var a=e}jQuery("#"+$).find(".owl-stage-outer").height(a+5)}}if(jQuery(this).hasClass("ts-vcsc-anyslider"))var s=!0;else var s=!1;var n=jQuery(this).attr("data-height");n="false"==n?!1:!0;var o=jQuery(this).attr("data-play");o="false"==o?!1:!0;var d=jQuery(this).attr("data-bar"),u=jQuery(this).attr("data-speed");1==o&&("false"==d?(d=!1,o=!0):(d=!0,o=!0));var l=jQuery(this).attr("data-hover");l="false"==l?!1:!0;var c=jQuery(this).attr("data-navigation");c="false"==c?!1:!0;var h=jQuery(this).attr("data-dots");h="false"==h?!1:!0;var p=jQuery(this).attr("data-loop");p="false"==p?!1:!0;var m=jQuery(this).attr("data-rtl");m="false"==m?!1:!0;var f=jQuery(this).attr("data-mobile");if(f="false"==f?!1:!0,0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==f)var g=jQuery(this).attr("data-animationin"),y=jQuery(this).attr("data-animationout");else var g="",y="";var v,j,Q,w,b,C,_=(jQuery(this).attr("data-color"),jQuery(this).attr("data-items")),x=jQuery(this).parent(),k=parseInt(u)/1e3,I=!1,S=0;$isLastItem=!1,$isFirstItem=!0;var T=($current=$before=$after=$change=null,o),$=jQuery(this).attr("id"),z=jQuery(this).attr("data-id"),D="true"==jQuery(this).attr("data-breakpointscustom")?!0:!1,M=jQuery(this).attr("data-breakpointitems");if(""!=M&&void 0!=M&&1==D?(M=M.split(","),8!=M.length&&(D=!1)):D=!1,D)var V=1==parseInt(_)?1:parseInt(_)>M[0]?M[0]:parseInt(_),A=1==parseInt(_)?1:parseInt(_)>M[1]?M[1]:parseInt(_),F=1==parseInt(_)?1:parseInt(_)>M[2]?M[2]:parseInt(_),H=1==parseInt(_)?1:parseInt(_)>M[3]?M[3]:parseInt(_),L=1==parseInt(_)?1:parseInt(_)>M[4]?M[4]:parseInt(_),P=1==parseInt(_)?1:parseInt(_)>M[5]?M[5]:parseInt(_),E=1==parseInt(_)?1:parseInt(_)>M[6]?M[6]:parseInt(_),O=1==parseInt(_)?1:parseInt(_)>M[7]?M[7]:parseInt(_);else var V=1,A=1==parseInt(_)?1:parseInt(_)>2?2:parseInt(_),F=1==parseInt(_)?1:parseInt(_)>3?3:parseInt(_),H=1==parseInt(_)?1:parseInt(_)>4?4:parseInt(_),L=1==parseInt(_)?1:parseInt(_)>5?5:parseInt(_),P=1==parseInt(_)?1:parseInt(_)>6?6:parseInt(_),E=1==parseInt(_)?1:parseInt(_)>7?7:parseInt(_),O=1==parseInt(_)?1:parseInt(_)>8?8:parseInt(_);"rtl"==jQuery("body").css("direction")&&0==m&&jQuery(this).css("direction","ltr");var B=jQuery(this).owlCarousel2({animateOut:y,animateIn:g,margin:10,smartSpeed:450,autoHeight:n,responsive:{0:{items:V},360:{items:A},720:{items:F},960:{items:H},1280:{items:L},1440:{items:P},1600:{items:E},1920:{items:O}},responsiveClass:!0,responsiveBaseElement:x,responsiveRefreshRate:250,items:parseInt(_),loop:p,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,stagePadding:0,startPosition:0,rtl:m,nav:!1,navRewind:!0,navText:["<",">"],dots:!0,dotsEach:!1,buttons:!1,autoplay:0==d?o:!1,autoplayTimeout:parseInt(u),autoplayHoverPause:l,onInitialized:t,onDrag:a,onDragged:i});1==o&&($play_start=jQuery("#ts-owlslider-controls-play-"+z),$play_start.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;v=!0,T=!1,I=!0,C=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==d&&B.trigger("stop.owl.autoplay"),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play")}else{var t=new Date;v=!1,T=!0,I=!1,C=t.getTime()-jQuery(this).attr("data-mouseenterTime"),1==d?jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"):B.trigger("play.owl.autoplay"),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause");var e=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){e++,e==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),(1==$isLastItem&&0==p&&0==d||jQuery("#"+$).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==p&&0==d)&&B.trigger("to.owl.carousel",[0,0])}})),(1==c||1==o)&&($play_prev=jQuery("#ts-owlslider-controls-prev-"+z),$play_next=jQuery("#ts-owlslider-controls-next-"+z),$play_prev.on("click",function(){if(1==o&&0==d&&B.trigger("stop.owl.autoplay"),1==d&&(v=!0,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==p){var t=0,e=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;S=e-1,jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,1==t&&jQuery(this).hasClass("active")&&($isLastItem=!1,$isFirstItem=!0)})}jQuery("#ts-owlslider-controls-play-"+z).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isFirstItem&&0==p||jQuery("#"+$).find(".owl-stage .owl-item:first-child").hasClass("active")&&0==p?(B.trigger("to.owl.carousel",[S,0]),$isFirstItem=!1):B.trigger("prev.owl.carousel")}),$play_next.on("click",function(){if(1==o&&0==d&&B.trigger("stop.owl.autoplay"),1==d&&(v=!0,jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==p){var t=0,e=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)})}jQuery("#ts-owlslider-controls-play-"+z).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isLastItem&&0==p||jQuery("#"+$).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==p?(B.trigger("to.owl.carousel",[0,0]),$isLastItem=!1):B.trigger("next.owl.carousel")})),B.find(".owl-stage-outer").on("mouseenter mouseleave",function(t){if(1==o&&1==d&&1==l)if(0==I){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(v=!0,C=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),T=!1):("mouseleave"===t.type||"touchend"===t.type)&&(v=!1,C=e.getTime()-jQuery(this).attr("data-mouseenterTime"),T=!0)}else v=!0,C=0,T=!1;else 1==o&&0==d&&1==l&&1==I&&(v=!0,C=0,T=!1)}),B.on("change.owl.carousel",function(t){if(t.namespace&&"position"==t.property.name){var e=t.relatedTarget;$current=t.item.index+1,S=t.item.count,$before=e.relative(e.normalize(e.current(),!1))+1,$after=e.relative(e.normalize(t.property.value,!1))+1,$change=!0,1==o&&1==d&&1==l||1==o&&1==d&&0==l?(1==d&&(jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(j)),0==T&&1==o&&0==I&&(T=!0),$after==S||jQuery("#"+$).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==T&&1==o&&0==I&&(T=!0)):1==o&&0==d&&1==l&&(0==T&&1==o&&0==I&&(T=!0),$after==S||jQuery("#"+$).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==T&&1==o&&0==I&&(T=!0))}}),B.on("changed.owl.carousel",function(t){!t.namespace||"position"!=t.property.name}),B.on("resized.owl.carousel",function(){window.setTimeout(function(){s&&(jQuery(window).trigger("debouncedresize"),r())},500)}),B.on("translated.owl.carousel",function(){if(1==o&&1==d&&1==l)jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),C=0,window.setTimeout(function(){e()},0);else if(1==o&&1==d&&0==l)jQuery("#ts-owlslider-progressbar-"+z).children(".ts-owlslider-progressbar").css("width","0%"),C=0,window.setTimeout(function(){e()},0);else if(1==o&&0==d&&1==l){C=0,1==I&&0==d&&B.trigger("stop.owl.autoplay");var t=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==p&&0==I&&1==o&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+z).click()},parseInt(u))}else if(1==o&&0==d&&0==l){var t=0,a=jQuery("#"+$).find(".owl-stage").children(".owl-item").length;jQuery("#"+$).find(".owl-stage").children(".owl-item").each(function(){t++,t==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==p&&0==I&&1==o&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+z).click()},parseInt(u))}r()})}),jQuery(".ts-flexslider-container").each(function(){function t(){if(h=r.width(),$slider_breaks=l.split(","),$slider_breaks.length>0){for(var t in $slider_breaks.sort(function(t,e){return t-e}))$checkup=a($slider_breaks,h);return 0==$checkup?1:$checkup}return 1}function e(){if(h=r.width(),$slider_items=1,$slider_breaks=u.split(","),$slider_breaks.length>0)for(var t in $slider_breaks.sort(function(t,e){return t-e}))$slider_items=a($slider_breaks,h);else $slider_items=1;return $slider_items>T?0==T?1:T:0==$slider_items?1:$slider_items}function a(t,e){for(var a=t.length;t[--a]>e;);return++a}function i(){if(1==Q&&1==_){jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;H=(new Date).setTime((new Date).getTime()+0),L=(new Date).setTime((new Date).getTime()+1e3*N);var r=L-H;F=setInterval(function(){if(A===!1&&w){E>0&&(L+=E,H+=E,r=L-H,E=0);var n=L-new Date,o=new Date-H,d=parseInt(n/i),u=parseInt((n-d*i)/a),l=parseInt((n-d*i-u*a)/e),c=(parseInt((n-d*i-l*e-u*a)/t),o>0?o/r*P:0);jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width",c+"%").attr("data-progress",c)}c>=100&&(clearInterval(F),jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","100%"),M.click())},P)}}if(!jQuery(this).hasClass("ts-timeline-css-flexslider-container")){var r=jQuery(this),s=r.attr("data-id"),n="true"==r.attr("data-combo")?!0:!1,o=r.attr("data-main"),d=r.attr("data-thumbs"),u=jQuery("#"+o).attr("data-breaks"),l=jQuery("#"+d).attr("data-breaks"),c="true"==r.attr("data-frontend")?!0:!1,h=r.width(),p=r.attr("data-animation"),m="true"==r.attr("data-navigation")?!0:!1,f="",g=0,y=!1,v=!0,j="true"==r.attr("data-rtl")?!0:!1,Q="true"==r.attr("data-play")?!0:!1,w=Q,b=parseInt(r.attr("data-speed")),C=600,_="true"==r.attr("data-bar")?!0:!1,x="true"==r.attr("data-hover")?!0:!1,k=!0,I=0,S=parseInt(r.attr("data-margin")),T=parseInt(r.attr("data-images"));if("fade"==p&&0==n&&(T=1),1==T&&0==n&&(S=0),r.hasClass("ts-anyslider-flexslider-container"))var $=".slides > div",z=!0;else var $=".slides > li",z=!1;var D,M,V,A,F,H,L,P,E,O="",B="",N=parseInt(b)/1e3,R=!1;if("rtl"==jQuery("body").css("direction")&&0==$page_rtl&&jQuery(this).css("direction","ltr"),jQuery("#"+o).find(".slides").on("mouseenter mouseleave",function(t){if(1==Q&&1==_&&1==x)if(0==R){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(A=!0,E=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),w=!1):("mouseleave"===t.type||"touchend"===t.type)&&(A=!1,E=e.getTime()-jQuery(this).attr("data-mouseenterTime"),w=!0)}else A=!0,E=0,w=!1;else 1==Q&&0==_&&1==x&&1==R&&(A=!0,E=0,w=!1)}),1==Q){var W=jQuery("#ts-flexslider-controls-play-"+s);W.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;A=!0,w=!1,R=!0,E=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==_&&O.stop(),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play"),1==Q&&1==_&&(jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),clearInterval(F),i())}else{var t=new Date;A=!1,w=!0,R=!1,E=0,1==_?jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"):O.play(),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==Q&&1==_&&(clearInterval(F),i())}})}var B;c||1!=n||jQuery("#"+d).TS_VCSC_FlexSlider({animation:"slide",direction:"horizontal",controlNav:m,animationLoop:!0,reverse:!1,smoothHeight:y,slideshow:!1,pauseOnAction:!1,pauseOnHover:!0,itemWidth:h/t()-S,itemMargin:S,startAt:0,minItems:t(),maxItems:t(),move:0,asNavFor:"#"+o,prevText:"",nextText:"",rtl:j,mousewheel:!0,start:function(e){B=e,e.slides.removeClass("current");for(var a=0,i=t(),r=0;i>r;r++)e.slides.eq(r).addClass("current"),1==v&&e.slides.eq(r).height()>a&&(a=e.slides.eq(r).height());1==v&&jQuery("#"+d).stop().animate({height:a},250)},before:function(e){var a=0,i=t();e.slides.removeClass("current");for(var r=0;i>r;r++)e.slides.eq(r+e.animatingTo*i).addClass("current"),1==v&&e.slides.eq(r+e.animatingTo*i).height()>a&&(a=e.slides.eq(r+e.animatingTo*i).height());1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+d).stop().animate({height:a},C/2)},after:function(){},end:function(){},added:function(){},removed:function(){}});var O;jQuery("#"+o).TS_VCSC_FlexSlider({animation:p,direction:"horizontal",selector:$,controlNav:1==n?!1:m,animationLoop:1==n?!1:!0,smoothHeight:y,reverse:!1,slideshow:1==Q&&1==_?!1:Q,slideshowSpeed:b,animationSpeed:C,pauseOnAction:!1,pauseOnHover:1==Q&&1==_?!1:x,pausePlay:!0,pauseText:"",playText:"",initDelay:0,itemWidth:1==n?0:h/e()-S,itemMargin:S,minItems:1==n?1:e(),maxItems:1==n?0:e(),move:1,startAt:0,prevText:"",nextText:"",sync:1==c||0==n?"":"#"+d,rtl:j,mousewheel:1==n?!1:!0,start:function(t){O=t,$isPlaying=t.playing,M=t.find(".flex-next"),V=t.find(".flex-prev"),jQuery("#ts-flexslider-controls-"+s).show(),Q&&_&&(H=(new Date).setTime((new Date).getTime()+0),L=(new Date).setTime((new Date).getTime()+1e3*N),P=100,A=!1,i()),t.slides.removeClass("current"),m&&(f=O.find(".flex-control-paging"),g=f.height()+10),z&&1==e()&&t.slides.each(function(){j?jQuery(this).css("margin","0 "+S+"px 0 0"):jQuery(this).css("margin","0 0 0 "+S+"px")});for(var a=0,r=0;r<e();r++)t.slides.eq(r).addClass("current"),1==v&&t.slides.eq(r).height()>a&&(a=t.slides.eq(r).height());1==v&&jQuery("#"+o).stop().animate({height:a+g},250)},before:function(t){$isPlaying=t.playing,Q&&_&&(clearInterval(F),window.setTimeout(function(){i()},C));var a=0;t.slides.removeClass("current");for(var r=0;r<e();r++)t.slides.eq(r+t.animatingTo).addClass("current"),1==v&&t.slides.eq(r+t.animatingTo).height()>a&&(a=t.slides.eq(r+t.animatingTo).height());a+=g,1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+o).stop().animate({height:a},C/2)},after:function(t){$isPlaying=t.playing,I=t.currentSlide,D=t.count,0==w&&1==Q&&0==R&&(w=!0),I==D-1?Q&&w&&setTimeout(function(){jQuery("#"+o).data("flexslider").flexAnimate(0,!0),1==n&&jQuery("#"+d).data("flexslider").flexAnimate(0,!0),0==_&&(O.stop(),O.play())},b):Q&&w&&0==_&&(O.stop(),O.play())},end:function(){}}),jQuery(window).on("debouncedresize",function(){if(h=r.width(),!c){if(1==n){var a=t(),i=h/a-S;""!=B&&(B.vars.minItems=a,B.vars.maxItems=a,B.vars.itemWidth=i,B.setup())}else if(0==n){var a=e(),i=h/a-S;""!=O&&(O.vars.minItems=a,O.vars.maxItems=a,O.vars.itemWidth=i)}""!=O&&O.setup(),setTimeout(function(){jQuery("#"+o).data("flexslider").flexAnimate(0,!0)},C),setTimeout(function(){var a=0;if(I=0,""!=O){O.slides.removeClass("current");for(var i=0;i<e();i++)O.slides.eq(i+I).addClass("current"),1==v&&O.slides.eq(i+I).height()>a&&(a=O.slides.eq(i+I).height());a+=g,1==v&&a!=jQuery("#"+o).height()&&jQuery("#"+o).stop().animate({height:a},C/2),O.update()}if(1==n&&""!=B){a=0,B.slides.removeClass("current");for(var r=t(),i=0;r>i;i++)B.slides.eq(i).addClass("current"),1==v&&B.slides.eq(i).height()>a&&(a=B.slides.eq(i).height());1==v&&a!=jQuery("#"+d).height()&&jQuery("#"+d).stop().animate({height:a},C/2),B.update(),jQuery("#"+d).find(".flex-control-nav").find("li:first").find("a").click()}else jQuery("#"+o).find(".flex-control-nav").find("li:first").find("a").click()},C)}}),k&&jQuery("#"+o).find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){_&&Q&&0==R?(A=!0,w=!1,R=!0,jQuery("#ts-flexslider-progressbar-container-"+s).children(".ts-flexslider-progressbar").css("width","0%"),E=0,clearInterval(F),W.click()):0==_&&Q&&(O.stop(),W.click())})})}}),jQuery(".ts-lightbox-gallery-slicebox").each(function(){var e,a,i,r,s,n,o=jQuery(this),d=o.attr("data-id"),u=o.find(".ts-slicebox-controls-arrows"),l=u.find(".ts-slicebox-controls-next"),c=u.find(".ts-slicebox-controls-prev"),h=o.find(".ts-slicebox-controls-options"),p=h.find(".ts-slicebox-controls-play"),m=h.find(".ts-slicebox-controls-pause"),f=o.find(".ts-slicebox-controls-dots"),g=o.find(".ts-lightbox-gallery-slicebox-slider"),y=!1,v="true"==o.attr("data-play")?!0:!1,j=v,Q=parseInt(o.attr("data-speed")),w="true"==o.attr("data-bar")?!0:!1,b="true"==o.attr("data-hover")?!0:!1,C=600,_=!0,x=parseInt(Q)/1e3,k=!1;"rtl"==jQuery("body").css("direction")&&0==y&&jQuery(this).css("direction","ltr");var I=function(){var o=u.hide(),y=h.hide(),I=f.hide(),S=I.children("span"),T=g.slicebox({orientation:"r",perspective:1200,cuboidsCount:3,cuboidsRandom:!0,maxCuboidsCount:6,disperseFactor:0,colorHiddenSides:"#222",sequentialFactor:150,speed:C,easing:"ease",autoplay:1==v&&1==w||1==v&&0==w&&1==b?!1:v,interval:Q+C,fallbackFadeSpeed:300,onReady:function(){y.show(),o.show(),I.show(),1!=v||1!=w&&1!=b||(i=(new Date).setTime((new Date).getTime()+0),r=(new Date).setTime((new Date).getTime()+1e3*x),s=100,e=!1,D())},onBeforeChange:function(t){S.removeClass("nav-dot-current"),S.eq(t).addClass("nav-dot-current"),1!=v||1!=w&&1!=b||(clearInterval(a),setTimeout(function(){D()},C))},onAfterChange:function(){return 0==j&&1==v&&0==k&&(j=!0),!1}}),$=function(){z()},z=function(){l.on("click",function(){return T.next(),1!=v||1!=w&&1!=b?1==v&&0==k?T.play():(m.hide(),p.show()):(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1}),c.on("click",function(){return T.previous(),1!=v||1!=w&&1!=b?1==v&&0==k?T.play():(m.hide(),p.show()):(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1}),p.on("click",function(){new Date;return e=!1,j=!0,k=!1,n=0,0==v||0==w&&0==b?T.play():1!=v||1!=w&&1!=b||(jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),clearInterval(a),D()),p.hide(),m.show(),!1}),m.on("click",function(){var t=new Date;return e=!0,j=!1,k=!0,n=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==v||0==w&&0==b?T.pause():1==v&&1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),1!=v||1!=w&&1!=b||(clearInterval(a),D()),m.hide(),p.show(),!1}),S.each(function(e){jQuery(this).on("click",function(){var i=t(this);return T.isActive()||(S.removeClass("nav-dot-current"),i.addClass("nav-dot-current")),T.jump(e+1),0==v||0==w?(m.hide(),p.show()):1!=v||1!=w&&1!=b||(clearInterval(a),jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","100%")),!1})}),g.on("mouseenter mouseleave",function(t){if(0==k){var a=new Date;"mouseenter"===t.type||"touchstart"===t.type?(e=!0,n=0,jQuery(this).attr("data-mouseenterTime",a.getTime()),j=!1):("mouseleave"===t.type||"touchend"===t.type)&&(e=!1,n=a.getTime()-jQuery(this).attr("data-mouseenterTime"),j=!0)}else e=!0,n=0,j=!1}),_&&g.find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){w&&v&&0==k?(e=!0,j=!1,k=!0,jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),n=0,clearInterval(a),m.hide(),p.show()):0==w&&v&&(T.pause(),m.hide(),p.show())})})},D=function(){if(1==v){1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width","0%"),isRunning=!1;var t=1e3,o=60*t,u=3600*t,c=86400*t;i=(new Date).setTime((new Date).getTime()+0),r=(new Date).setTime((new Date).getTime()+1e3*x);var h=r-i;a=setInterval(function(){if(e===!1&&j){n>0&&(r+=n,i+=n,h=r-i,n=0);var p=r-new Date,m=new Date-i,f=parseInt(p/c),g=parseInt((p-f*c)/u),y=parseInt((p-f*c-g*u)/o),v=(parseInt((p-f*c-y*o-g*u)/t),m>0?m/h*s:0);1==w&&jQuery("#ts-slicebox-progressbar-container-"+d).children(".ts-slicebox-progressbar").css("width",v+"%").attr("data-progress",v)}v>=100&&(clearInterval(a),1==w&&jQuery("#ts-flexslider-slicebox-container-"+d).children(".ts-slicebox-progressbar").css("width","100%"),l.click())},s)}};return{init:$}}();I.init()}),jQuery(".ts-nivoslider-container").each(function(){function t(){if(1==r&&1==g){jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),isRunning=!1;var t=1e3,e=60*t,a=3600*t,n=86400*t;h=(new Date).setTime((new Date).getTime()+0),p=(new Date).setTime((new Date).getTime()+1e3*Q);var o=p-h;c=setInterval(function(){if(l===!1&&s){f>0&&(p+=f,h+=f,o=p-h,f=0);var r=p-new Date,u=new Date-h,g=parseInt(r/n),y=parseInt((r-g*n)/a),v=parseInt((r-g*n-y*a)/e),j=(parseInt((r-g*n-v*e-y*a)/t),u>0?u/o*m:0);jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width",j+"%").attr("data-progress",j)}j>=100&&(clearInterval(c),jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","100%"),d.click())},m)}}var e=jQuery(this),a=e.find(".ts-nivoslider-parent"),i=a.attr("data-id"),r="true"==a.attr("data-play")?!0:!1,s=r,n=parseInt(a.attr("data-speed"));if("ontouchstart"in document.documentElement)var o=300;else var o=600;var d,u,l,c,h,p,m,f,g="true"==a.attr("data-bar")?!0:!1,y="true"==a.attr("data-hover")?!0:!1,v="true"==a.attr("data-navigation")?!0:!1,j=!0,Q=parseInt(n)/1e3,w=!1;if(a.TS_VCSC_NivoSlider({effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:o,pauseTime:n,startSlide:0,playpauseNav:1==r&&0==g?!0:!1,directionNav:!0,controlNav:v,controlNavThumbs:!1,pauseOnHover:1==r&&1==g?!1:!0,manualAdvance:1==r&&0==g?!1:!0,prevText:"",nextText:"",playText:"",pauseText:"",randomStart:!1,beforeChange:function(){r&&g&&clearInterval(c)},afterChange:function(){r&&g&&t()},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){d=a.find(".nivo-nextNav"),u=a.find(".nivo-prevNav"),$nivo_play=a.find(".nivo-playNav"),$nivo_pause=a.find(".nivo-pauseNav"),r&&g&&(h=(new Date).setTime((new Date).getTime()+0),p=(new Date).setTime((new Date).getTime()+1e3*Q),m=100,l=!1,t())}}),"ontouchstart"in document.documentElement||1==TS_VCSC_MobileDevice){1==TS_VCSC_MobileDevice&&(d.hide(),u.hide());{Hammer(a).on("swipeleft",function(){return d.trigger("click"),!1}),Hammer(a).on("swiperight",function(){return u.trigger("click"),!1})}}if(1==r&&1==g){var b=jQuery("#ts-nivoslider-controls-play-"+i),C=jQuery("#ts-nivoslider-controls-pause-"+i);b.on("click",function(){new Date;l=!1,s=!0,w=!1,f=0,jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),b.hide(),C.show(),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),clearInterval(c),t()}),C.on("click",function(){var e=new Date;l=!0,s=!1,w=!0,f=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),b.show(),C.hide(),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play"),jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),clearInterval(c),t()})}a.on("mouseenter mouseleave",function(t){if(1==r&&1==g&&1==y)if(0==w){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(l=!0,f=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),s=!1):("mouseleave"===t.type||"touchend"===t.type)&&(l=!1,f=e.getTime()-jQuery(this).attr("data-mouseenterTime"),s=!0)}else l=!0,f=0,s=!1;else 1==r&&0==g&&1==y&&1==w&&(l=!0,f=0,s=!1)}),j&&a.find(".nch-lightbox-media").each(function(){jQuery(this).on("click",function(){g&&r&&0==w?(l=!0,s=!1,w=!0,jQuery("#ts-nivoslider-progressbar-container-"+i).children(".ts-nivoslider-progressbar").css("width","0%"),f=0,clearInterval(c),C.click()):0==g&&r&&$nivo_pause.click()})})}),jQuery(".ts-timeline.ts-timeline-view").each(function(){function t(){show=i.find("li.ts-timeline-list-item.ts-timeline-visible").size()+d,f>=show?jQuery(this).closest(".ts-timeline").find("li.ts-timeline-list-item:lt("+show+")").fadeIn().addClass("ts-timeline-visible"):(p.fadeIn().addClass("ts-timeline-visible"),"desc"==n&&y.fadeIn(),w.hide()),setTimeout(function(){h.isotope("reloadItems"),e(),h.isotope("reLayout")},750)}function e(t){h.isotope({itemSelector:".ts-timeline-list-item.ts-timeline-visible",animationEngine:"best-available",itemPositionDataEnabled:!1,transformsEnabled:!0,resizesContainer:!0,sortAscending:t,getSortData:{eventOrder:function(t){return t.attr("data-order")}},sortBy:"eventOrder",layoutMode:layoutMode,spineTimeline:{gutterWidth:20,columnPadding:50,spineHolder:spineHolder},onLayout:function(){}},function(){setTimeout(function(){m.each(function(){if(jQuery(this).hasClass("ts-timeline-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}),jQuery("#"+spineHolder).height(h.height())},750)})}function a(){i.each(function(){$this=jQuery(this),$this.width("100%"),h.width("100%"),$this.outerWidth()<=b?(layoutMode="masonry",p.each(function(){jQuery(this).width("100%").removeClass("colA").removeClass("colB").removeClass("ts-timeline-layout-spine").addClass("ts-timeline-layout-masonry"),jQuery(this).hasClass("ts-timeline-full")?(jQuery(this).find(".ts-timeline-full-colA").addClass("no-columns"),jQuery(this).find(".ts-timeline-full-colB").addClass("no-columns")):jQuery(this).hasClass("ts-timeline-break")&&jQuery(this).removeClass("ts-timeline-layout-spine").removeClass("ts-timeline-layout-masonry")}),jQuery("span",jQuery("#"+spineHolder)).remove()):(layoutMode="spineTimeline",p.each(function(){jQuery(this).hasClass("ts-timeline-full")?(jQuery(this).width("100%").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine"),jQuery(this).find(".ts-timeline-full-colA").removeClass("no-columns"),jQuery(this).find(".ts-timeline-full-colB").removeClass("no-columns")):jQuery(this).hasClass("ts-timeline-break")?jQuery(this).removeClass("ts-timeline-layout-spine").removeClass("ts-timeline-layout-masonry"):jQuery(this).width("50%").removeClass("ts-timeline-layout-masonry").addClass("ts-timeline-layout-spine")
})),setTimeout(function(){h.hasClass("isotope")&&h.isotope("reloadItems"),e(C),h.isotope("reLayout"),m.each(function(){if(jQuery(this).hasClass("ts-timeline-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}),jQuery("#"+spineHolder).height(h.height())},750)})}var i=jQuery(this),r=i.attr("data-lazy"),s=i.attr("data-count"),n=i.attr("data-order"),o=s,d=s,u=i.attr("data-trigger"),l=i.find(".ts-timeline-css-controls-asc"),c=i.find(".ts-timeline-css-controls-desc"),h=i.find("ul.ts-timeline-list"),p=i.find("li.ts-timeline-list-item"),m=(p.find(".ts-timeline-date"),p.find(".ts-timeline-icon")),f=p.length,g=0,y=i.find(".ts-timeline-footer-wrap"),v=i.find(".ts-timeline-header-wrap"),j=i.find(".ts-timeline-begin-top"),Q=i.find(".ts-timeline-begin-bottom"),w=i.find(".ts-timeline-load-more"),b=parseInt(i.attr("data-break"));spineHolder=i.find(".ts-timeline-spine").attr("id"),layoutMode="spineTimeline","asc"==n?(Q.fadeIn(),v.fadeIn()):j.fadeIn();var C=!0;l.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),c.toggleClass("active"),C=C?!1:!0,Q.fadeIn(),v.fadeIn(),j.hide(),y.hide(),i.alterClass("ts-timeline-*","ts-timeline-asc"),p.alterClass("ts-timeline-order-*","ts-timeline-order-asc").attr("data-order","asc"),e(C))}),c.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),l.toggleClass("active"),C=C?!1:!0,Q.hide(),v.hide(),j.fadeIn(),y.fadeIn(),i.alterClass("ts-timeline-*","ts-timeline-desc"),p.alterClass("ts-timeline-order-*","ts-timeline-order-desc").attr("data-order","desc"),e(C))}),p.each(function(){g++,jQuery(this).addClass("ts-timeline-order-"+n).attr("data-order",n).attr("data-number",g)}),"true"==r?(i.find("li.ts-timeline-list-item:lt("+o+")").addClass("ts-timeline-visible").fadeIn(),w.on("click",t)):(p.fadeIn().addClass("ts-timeline-visible"),"desc"==n&&y.fadeIn()),"true"==r&&"scroll"==u&&w.bind("inview",function(e,a,i,r){if(a){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-loadmore-visible"),t())}else s.removeClass("ts-loadmore-visible")}),e(C),a(),jQuery(window).on("debouncedresize",function(){a()}),jQuery(this).find(".ts-timeline-gallery-slider").each(function(){function t(){T=jQuery("#"+z).find(".owl-item").length-1,w=(new Date).setTime((new Date).getTime()+0),b=(new Date).setTime((new Date).getTime()+1e3*I),C=100,jQuery("#ts-owlslider-progressbar-"+D).prependTo(jQuery("#"+z)),jQuery("#"+z).find(".owl-dots").show(),window.setTimeout(function(){n(),i(),h.isotope("reloadItems"),e(),h.isotope("reLayout")},100)}function i(){if(1==d&&1==u){n(),jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),j=!1,isRunning=!1;var t=1e3,e=60*t,a=3600*t,i=86400*t;w=(new Date).setTime((new Date).getTime()+0),b=(new Date).setTime((new Date).getTime()+1e3*I);var r=b-w;Q=setInterval(function(){if(j===!1){_>0&&(b+=_,w+=_,r=b-w,_=0);var s=b-new Date,n=new Date-w,o=parseInt(s/i),d=parseInt((s-o*i)/a),u=parseInt((s-o*i-d*a)/e),l=(parseInt((s-o*i-u*e-d*a)/t),n>0?n/r*C:0);jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width",l+"%").attr("data-progress",l)}l>=100&&(clearInterval(Q),jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),jQuery("#ts-owlslider-controls-next-"+D).click())},C)}}function r(){0==S&&(j=!0)}function s(){0==S&&(j=!1,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),clearInterval(Q),i())}function n(){if(1==o){var t=jQuery("#"+z).find(".owl-stage").find(".active").length,e=jQuery("#"+z).find(".owl-stage .owl-item.active").first().height();if(1==t)var a=e;else{var i=Math.max.apply(null,jQuery("#"+z).find(".owl-stage").find(".active").map(function(){return jQuery(this).height()}).get());if(i>e)var a=i;else var a=e}jQuery("#"+z).find(".owl-stage-outer").height(a+5)}}var o=jQuery(this).attr("data-height");o="false"==o?!1:!0;var d=jQuery(this).attr("data-play");d="false"==d?!1:!0;var u=jQuery(this).attr("data-bar"),l=jQuery(this).attr("data-speed");1==d&&("false"==u?(u=!1,d=l):(u=!0,d=l));var c=jQuery(this).attr("data-hover");c="false"==c?!1:!0;var p=jQuery(this).attr("data-navigation");p="false"==p?!1:!0;var m=jQuery(this).attr("data-loop");m="false"==m?!1:!0;var f=jQuery(this).attr("data-rtl");f="false"==f?!1:!0;var g=jQuery(this).attr("data-mobile");if(g="false"==g?!1:!0,0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==g)var y=jQuery(this).attr("data-animationin"),v=jQuery(this).attr("data-animationout");else var y="",v="";var j,Q,w,b,C,_,x=(jQuery(this).attr("data-color"),jQuery(this).attr("data-items")),k=jQuery(this).parent(),I=parseInt(l)/1e3,S=!1,T=0;$isLastItem=!1,$isFirstItem=!0;var $=($current=$before=$after=$change=null,d),z=jQuery(this).attr("id"),D=jQuery(this).attr("data-id"),M=1,V=1==parseInt(x)?1:parseInt(x)>2?2:parseInt(x),A=1==parseInt(x)?1:parseInt(x)>3?3:parseInt(x),F=1==parseInt(x)?1:parseInt(x)>4?4:parseInt(x),H=1==parseInt(x)?1:parseInt(x)>5?5:parseInt(x),L=1==parseInt(x)?1:parseInt(x)>6?6:parseInt(x),P=1==parseInt(x)?1:parseInt(x)>7?7:parseInt(x),E=1==parseInt(x)?1:parseInt(x)>8?8:parseInt(x);"rtl"==jQuery("body").css("direction")&&0==f&&jQuery(this).css("direction","ltr");var O=jQuery(this).owlCarousel2({animateOut:v,animateIn:y,margin:10,smartSpeed:450,autoHeight:o,responsive:{0:{items:M},250:{items:V},500:{items:A},750:{items:F},1e3:{items:H},1250:{items:L},1500:{items:P},1750:{items:E}},responsiveClass:!0,responsiveBaseElement:k,responsiveRefreshRate:1e3,items:parseInt(x),loop:m,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,stagePadding:0,startPosition:0,rtl:f,nav:!1,navRewind:!0,navText:["<",">"],dots:!0,dotsEach:!1,buttons:!1,autoplay:0==u?d:!1,autoplayTimeout:parseInt(l),autoplayHoverPause:c,onInitialized:t,onDrag:r,onDragged:s});1==d&&($play_start=jQuery("#ts-owlslider-controls-play-"+D),$play_start.on("click",function(){if(jQuery(this).hasClass("active")){var t=new Date;j=!0,$=!1,S=!0,_=0,jQuery(this).attr("data-mouseenterTime",t.getTime()),0==u&&O.trigger("stop.owl.autoplay"),jQuery(this).removeClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-play")}else{var t=new Date;j=!1,$=!0,S=!1,_=t.getTime()-jQuery(this).attr("data-mouseenterTime"),1==u?jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"):O.trigger("play.owl.autoplay"),jQuery(this).addClass("active"),jQuery(this).find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause");var e=0,a=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){e++,e==a&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),(1==$isLastItem&&0==m&&0==u||jQuery("#"+z).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==m&&0==u)&&O.trigger("to.owl.carousel",[0,0])}})),(1==p||1==d)&&($play_prev=jQuery("#ts-owlslider-controls-prev-"+D),$play_next=jQuery("#ts-owlslider-controls-next-"+D),$play_prev.on("click",function(){if(1==d&&0==u&&O.trigger("stop.owl.autoplay"),1==u&&(j=!0,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==m){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;T=e-1,jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,1==t&&jQuery(this).hasClass("active")&&($isLastItem=!1,$isFirstItem=!0)})}jQuery("#ts-owlslider-controls-play-"+D).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isFirstItem&&0==m||jQuery("#"+z).find(".owl-stage .owl-item:first-child").hasClass("active")&&0==m?(O.trigger("to.owl.carousel",[T,0]),$isFirstItem=!1):O.trigger("prev.owl.carousel")}),$play_next.on("click",function(){if(1==d&&0==u&&O.trigger("stop.owl.autoplay"),1==u&&(j=!0,jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==m){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)})}jQuery("#ts-owlslider-controls-play-"+D).addClass("active").find("span").alterClass("ts-ecommerce-*","ts-ecommerce-pause"),1==$isLastItem&&0==m||jQuery("#"+z).find(".owl-stage .owl-item:last-child").hasClass("active")&&0==m?(O.trigger("to.owl.carousel",[0,0]),$isLastItem=!1):O.trigger("next.owl.carousel")})),O.find(".owl-stage-outer").on("mouseenter mouseleave",function(t){if(1==d&&1==u&&1==c)if(0==S){var e=new Date;"mouseenter"===t.type||"touchstart"===t.type?(j=!0,_=0,jQuery(this).attr("data-mouseenterTime",e.getTime()),$=!1):("mouseleave"===t.type||"touchend"===t.type)&&(j=!1,_=e.getTime()-jQuery(this).attr("data-mouseenterTime"),$=!0)}else j=!0,_=0,$=!1;else 1==d&&0==u&&1==c&&1==S&&(j=!0,_=0,$=!1)}),O.on("change.owl.carousel",function(t){if(t.namespace&&"position"==t.property.name){var e=t.relatedTarget;$current=t.item.index+1,T=t.item.count,$before=e.relative(e.normalize(e.current(),!1))+1,$after=e.relative(e.normalize(t.property.value,!1))+1,$change=!0,1==d&&1==u&&1==c||1==d&&1==u&&0==c?(1==u&&(jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","100%"),clearInterval(Q)),0==$&&1==d&&0==S&&($=!0),$after==T||jQuery("#"+z).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==$&&1==d&&0==S&&($=!0)):1==d&&0==u&&1==c&&(0==$&&1==d&&0==S&&($=!0),$after==T||jQuery("#"+z).children(".owl-stage .owl-item:last-child").hasClass("active")?($isLastItem=!0,$isFirstItem=!1):($isLastItem=!1,$isFirstItem=1==$after?!0:!1),0==$&&1==d&&0==S&&($=!0))}}),O.on("changed.owl.carousel",function(t){t.namespace&&"position"==t.property.name&&setTimeout(function(){h.isotope("reloadItems"),e(),h.isotope("reLayout")},1e3)}),O.on("translated.owl.carousel",function(){if(1==d&&1==u&&1==c)jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),_=0,window.setTimeout(function(){i()},0);else if(1==d&&1==u&&0==c)jQuery("#ts-owlslider-progressbar-"+D).children(".ts-owlslider-progressbar").css("width","0%"),_=0,window.setTimeout(function(){i()},0);else if(1==d&&0==u&&1==c){_=0,1==S&&0==u&&O.trigger("stop.owl.autoplay");var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==m&&0==S&&1==d&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+D).click()},parseInt(l))}else if(1==d&&0==u&&0==c){var t=0,e=jQuery("#"+z).find(".owl-stage").children(".owl-item").length;jQuery("#"+z).find(".owl-stage").children(".owl-item").each(function(){t++,t==e&&jQuery(this).hasClass("active")&&($isLastItem=!0,$isFirstItem=!1)}),1==$isLastItem&&0==m&&0==S&&1==d&&window.setTimeout(function(){jQuery("#ts-owlslider-controls-next-"+D).click()},parseInt(l))}n(),a()})})}),jQuery(".ts-timeline-css-container").each(function(){function e(){show=d.find(".ts-timeline-css-section.ts-timeline-css-visible").size()+_,l>=show?jQuery(this).closest(".ts-timeline").find(".ts-timeline-css-section:lt("+b+")").fadeIn().addClass("ts-timeline-css-visible"):(u.fadeIn().addClass("ts-timeline-visible"),"desc"==m&&g.fadeIn(),C.hide(),k.show(),I.show()),setTimeout(function(){r()},750)}function a(){n.width("100%"),u.each(n.outerWidth()<=c?function(){jQuery(this).hasClass("ts-timeline-css-fullwidth")&&(jQuery(this).find(".ts-timeline-css-fullwidth-colA").addClass("no-columns"),jQuery(this).find(".ts-timeline-css-fullwidth-colB").addClass("no-columns"))}:function(){jQuery(this).hasClass("ts-timeline-css-fullwidth")&&(jQuery(this).find(".ts-timeline-css-fullwidth-colA").removeClass("no-columns"),jQuery(this).find(".ts-timeline-css-fullwidth-colB").removeClass("no-columns"))}),setTimeout(function(){Q.each(function(){if(jQuery(this).hasClass("ts-timeline-css-icon-half")){if(jQuery(this).next().hasClass("ts-timeline-css-text-wrap-inner")){var t=(parseInt(jQuery(this).next().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}}else if(jQuery(this).prev().hasClass("ts-timeline-css-text-wrap-inner")){var t=(parseInt(jQuery(this).prev().outerHeight(!0))-parseInt(jQuery(this).outerHeight(!0)))/2;jQuery(this).animate({top:t+"px"},500)}})},250)}function i(){o.find(".ts-timeline-css-section").each(function(t,e){jQuery(e).addClass("ts-timeline-css-order-"+m).attr("data-item",t).attr("data-order",m),jQuery(e).attr("data-height",jQuery(e).height())})}function r(){if("ts-timeline-css-columns"==h){var t=0,e=0,a=0,i=0,r=0,s=32;o.find(".ts-timeline-css-section").each(function(i,r){jQuery(r).attr("data-height",jQuery(r).height()),jQuery(r).hasClass("ts-timeline-css-event")?(a=jQuery(r).height(),e>t?(jQuery(r).alterClass("ts-timeline-css-event-*","ts-timeline-css-event-right"),t+=a):(jQuery(r).alterClass("ts-timeline-css-event-*","ts-timeline-css-event-left"),e+=a)):(t=0,e=0)}),o.find(".ts-timeline-css-section").each(function(t,e){i=jQuery(e).offset(),jQuery(e).hasClass("ts-timeline-css-event")&&(jQuery(e).attr("data-offset",i.top),r+s>i.top&&jQuery(e).hasClass("ts-timeline-css-event-right")?jQuery(e).addClass("ts-timeline-css-event-right-offset"):jQuery(e).removeClass("ts-timeline-css-event-right-offset"),r=i.top)})}}function s(t,e,a){return jQuery(jQuery(t).toArray().sort(function(t,i){var r=parseInt(t.getAttribute(e)),s=parseInt(i.getAttribute(e));return"asc"==a?r-s:s-r}))}var n=jQuery(this),o=n.find(".ts-timeline-css-wrapper"),d=o.find(".ts-timeline-css-content"),u=d.find(".ts-timeline-css-section"),l=d.length,c=parseInt(n.attr("data-break")),h=n.attr("data-layout"),p=n.attr("data-switch"),m=n.attr("data-order"),f=n.width(),g=n.find(".ts-timeline-css-footer-wrap"),y=n.find(".ts-timeline-css-header-wrap"),v=n.find(".ts-timeline-css-begin-top"),j=n.find(".ts-timeline-css-begin-bottom"),Q=u.find(".ts-timeline-css-icon"),w="true"==n.attr("data-lazy")?!0:!1,b=parseInt(n.attr("data-count")),C=n.find(".ts-timeline-css-showmore"),_=C,x=n.attr("data-trigger"),k=(n.find(".ts-timeline-css-slickslider-container").length,n.find(".ts-timeline-css-controls-asc")),I=n.find(".ts-timeline-css-controls-desc");f>c&&"ts-timeline-css-columns"==h?o.find(".ts-timeline-css-event").each(function(t,e){var a=t%2==0?"ts-timeline-css-event-left":"ts-timeline-css-event-right";jQuery(e).addClass(a)}):c>f&&"ts-timeline-css-columns"==h&&(o.alterClass("ts-timeline-css-*",p),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&jQuery(this).css("width","98%")})),"asc"==m?(y.fadeIn(),j.fadeIn()):v.fadeIn(),b>l&&(w=!1),w?(d.find(".ts-timeline-css-section:lt("+b+")").addClass("ts-timeline-css-visible").fadeIn(),1==TS_VCSC_MobileDevice&&(x="click"),C.on("click",e)):(u.fadeIn().addClass("ts-timeline-css-visible"),"desc"==m&&g.fadeIn(),C.hide(),k.show(),I.show()),w&&"scroll"==x&&C.bind("inview",function(t,a,i,r){if(a){var s=jQuery(this);"top"==r||"bottom"==r||(s.addClass("ts-timeline-css-showmore-visible"),e())}else s.removeClass("ts-timeline-css-showmore-visible")}),k.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),I.toggleClass("active"),j.fadeIn(),y.fadeIn(),v.hide(),g.hide(),$direction="asc",n.attr("data-order",$direction),n.alterClass("ts-timeline-css-container-*","ts-timeline-css-container-asc"),u.alterClass("ts-timeline-css-order-*","ts-timeline-css-order-asc").attr("data-order","asc"),t.each(s(u,"data-item","asc"),function(t,e){d.append(e)}),r())}),I.on("click",function(){jQuery(this).hasClass("active")||(jQuery(this).toggleClass("active"),k.toggleClass("active"),j.hide(),y.hide(),v.fadeIn(),g.fadeIn(),$direction="desc",n.attr("data-order",$direction),n.alterClass("ts-timeline-css-container-*","ts-timeline-css-container-desc"),u.alterClass("ts-timeline-css-order-*","ts-timeline-css-order-desc").attr("data-order","desc"),t.each(s(u,"data-item","desc"),function(t,e){d.append(e)}),r())}),r(),i(),a(),jQuery(this).find(".ts-timeline-css-imageslider-container").each(function(){var t=jQuery(this),e=(t.attr("data-parents"),parseInt(t.attr("data-items"))),a=t.find(".ts-timeline-css-imageslider-slides"),i=t.find(".ts-timeline-css-imageslider-item"),s=t.find(".ts-timeline-css-imageslider-dot"),n=t.find(".ts-timeline-css-imageslider-next"),o=t.find(".ts-timeline-css-imageslider-prev"),d=0,u=d+1,l=e,c=!1;if(n.on("click",function(){c=!0,u=d+1>e-1?0:d+1,i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),s.removeClass("ts-timeline-css-imageslider-dotactive"),t.find(".ts-timeline-css-imageslider-item[data-order='"+u+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),t.find(".ts-timeline-css-imageslider-dot[data-order='"+u+"']").addClass("ts-timeline-css-imageslider-dotactive"),d=u,r(),c=!1}),o.on("click",function(){c=!0,l=0>d-1?e-1:d-1,i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),s.removeClass("ts-timeline-css-imageslider-dotactive"),t.find(".ts-timeline-css-imageslider-item[data-order='"+l+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),t.find(".ts-timeline-css-imageslider-dot[data-order='"+l+"']").addClass("ts-timeline-css-imageslider-dotactive"),d=l,r(),c=!1}),s.on("click",function(){d=parseInt(jQuery(this).attr("data-order")),s.removeClass("ts-timeline-css-imageslider-dotactive"),i.removeClass("ts-timeline-css-slider-view-active").addClass("ts-timeline-css-slider-view-hidden").css("display","none"),t.find(".ts-timeline-css-imageslider-item[data-order='"+d+"']").show().alterClass("ts-timeline-css-slider-view-*","ts-timeline-css-slider-view-active"),jQuery(this).addClass("ts-timeline-css-imageslider-dotactive"),r()}),"ontouchstart"in document.documentElement||1==TS_VCSC_MobileDevice){var h=new Hammer(a,"");h.on("swipeleft",function(){return c||n.trigger("click"),!1}),h.on("swiperight",function(){return c||o.trigger("click"),!1})}}),jQuery(window).on("debouncedresize",function(){h=n.attr("data-layout"),f=n.width(),c>f&&"ts-timeline-css-columns"==h?(o.alterClass("ts-timeline-css-*",p),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&jQuery(this).css("width","98%")})):f>c&&"ts-timeline-css-columns"==h&&(o.alterClass("ts-timeline-css-*","ts-timeline-css-columns"),u.each(function(){jQuery(this).hasClass("ts-timeline-css-break")&&"false"==jQuery(this).attr("data-fullwidth")&&jQuery(this).css("width","50%")})),o.addClass("ts-timeline-css-wrapper"),a(),"ts-timeline-css-columns"==h&&setTimeout(function(){r()},750)})}),"undefined"!=typeof $TS_VCSC_SmoothScrollActive&&$TS_VCSC_SmoothScrollActive&&0==TS_VCSC_MobileDevice){window.TS_VCSC_UseRequestAnimationFrame=!0;var d=null,u=!1,l=0,c=$TS_VCSC_SmoothScrollSpeed,h=!1,p=window,m=-1!==navigator.platform.toUpperCase().indexOf("MAC"),f=function(t){40===t.which?(h=!0,c=$TS_VCSC_SmoothScrollSpeed,l=-1,u=!0,p=window):38===t.which&&(h=!0,c=$TS_VCSC_SmoothScrollSpeed,l=1,u=!0,p=window)},g=function(t){if(t.preventDefault&&t.preventDefault(),!h){t.wheelDelta?l=t.wheelDelta/120:m&&t.detail?l=-t.detail:t.detail&&(l=-t.detail/3),c=$TS_VCSC_SmoothScrollSpeed;var e=t.target;for(p=window;"HTML"!=e.tagName;){if(e.scrollHeight>e.clientHeight&&"undefined"!=typeof e.style.overflow&&"hidden"!==e.style.overflow&&"visible"!==e.style.overflow&&""!==e.style.overflow){p=e;break}e=e.parentNode}}u=!0},y=function(){u&&(p==window?p.scrollBy(p.scrollX,-l*c):p.scrollTop=p.scrollTop-l*c,c*=.94,1>=c&&(c=0,u=!1,l=0,h=!1)),window.TS_VCSC_UseRequestAnimationFrame?(window.requestAnimationFrame(y),null!=d&&(clearInterval(d),d=null)):null===d&&(d=setInterval(function(){y()},16.667))};window.addEventListener("mousewheel",g,!1),window.addEventListener("DOMMouseScroll",g,!1),window.addEventListener("keydown",f,!1),window.TS_VCSC_UseRequestAnimationFrame?window.requestAnimationFrame(y):d=setInterval(function(){y()},16.667)}"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-viewport-column").each(function(){if(0==TS_VCSC_MobileDevice){{var t=jQuery(this),e=t.next();t.attr("data-scrollup")}e.css("opacity",0),e.attr("data-viewport",t.attr("data-viewport")),e.attr("data-speed",t.attr("data-speed")),e.attr("data-scrollup",t.attr("data-scrollup")),e.bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-waypoint-visible")}else{var r=jQuery(this);r.removeClass("ts-waypoint-visible")}}),e.waypoint({offset:"85%",handler:function(){var t=jQuery(this),e=t.attr("data-viewport"),a=t.attr("data-speed"),i=t.attr("data-scrollup"),r=t.width();t.css("-webkit-animation-duration",a+"ms").css("-moz-animation-duration",a+"ms").css("-ms-animation-duration",a+"ms").css("-o-animation-duration",a+"ms").css("animation-duration",a+"ms"),t.addClass(e+" animated"),t.css("opacity",1).css("width",r),setTimeout(function(){t.removeClass("animated").removeClass(e),"false"==i&&t.waypoint("destroy"),t.css("width",""),t.css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration","").css("animation-duration","")},a)}}),t.remove()}else{var t=jQuery(this),e=t.next();e.css("opacity",1)}}),"undefined"!=typeof jQuery.fn.waypoint&&jQuery(".ts-viewport-row").each(function(){if(0==TS_VCSC_MobileDevice){{var t=jQuery(this),e=t.next();t.attr("data-scrollup")}e.css("opacity",0),e.attr("data-viewport",t.attr("data-viewport")),e.attr("data-speed",t.attr("data-speed")),e.attr("data-scrollup",t.attr("data-scrollup")),e.bind("inview",function(t,e,a,i){if(e){var r=jQuery(this);r.addClass("ts-waypoint-visible")}else{var r=jQuery(this);r.removeClass("ts-waypoint-visible")}}),e.waypoint({offset:"85%",handler:function(){var t=jQuery(this);if(!t.hasClass("ts-parallax-processing")){var e=t.attr("data-viewport"),a=t.attr("data-speed"),i=t.attr("data-scrollup"),r=t.width();t.css("-webkit-animation-duration",a+"ms").css("-moz-animation-duration",a+"ms").css("-ms-animation-duration",a+"ms").css("-o-animation-duration",a+"ms").css("animation-duration",a+"ms"),t.addClass(e),t.css("opacity",1).css("width",r),setTimeout(function(){t.removeClass(e),"false"==i&&t.waypoint("destroy"),t.css("width",""),t.css("-webkit-animation-duration","").css("-moz-animation-duration","").css("-ms-animation-duration","").css("-o-animation-duration","").css("animation-duration","")},a)}}}),t.remove()}else{var t=jQuery(this),e=t.next();e.css("opacity",1)}}),setTimeout(function(){jQuery(window).trigger("resize"),jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("debouncedresize.stackslider")},250),setTimeout(function(){jQuery(".ts-figure-navigation-item").each(function(){var t=jQuery(this),e=jQuery(this).attr("data-frontend"),a=jQuery(this).attr("data-active");if("true"==a&&"false"==e){var i=(t.attr("data-group"),t.find(".ts-figure-navigation-title")),r=t.find(".ts-figure-navigation-image"),s=t.find(".ts-figure-navigation-handle"),n=t.find(".ts-figure-navigation-content"),o=t.find(".ts-figure-navigation-button"),d=i.outerHeight(!0)+r.outerHeight(!0)+s.outerHeight(!0)+n.outerHeight(!0)+o.outerHeight(!0);t.css("height",d+"px");var u=t.find(".ts-figure-navigation-image").height();n.css("height",n.height()+"px"),t.find(".ts-figure-navigation-figure").css({height:u+"px"}),t.addClass("ts-figure-navigation-hover"),t.find(".ts-figure-navigation-content").stop(!0).animate({opacity:1},500)}})},1250),(0!=jQuery(".ts-amaran-popup-main").length||0!=jQuery(".ts-amaran-popup-trigger").length)&&(TS_VCSC_Amaran_Overlay=t('<div id="ts-amaran-overlay-color"></div>').appendTo("body"),TS_VCSC_Amaran_Overlay.attr("data-visible","false"),TS_VCSC_Amaran_Noise=t('<div id="ts-amaran-overlay-noise"></div>').appendTo("body"),TS_VCSC_Amaran_Noise.attr("data-visible","false")),jQuery(".ts-amaran-popup-main").each(function(){function t(){setTimeout(function(){jQuery.TS_VCSC_Amaran_Main({randomizer:i,position:r,overlay:z,overlayColor:D,rasterUse:M,rasterType:V,background:u,width:l,marginTop:p,marginBottom:m,marginLeft:f,marginRight:g,content:{title:w,titleColor:b,titleBack:C,message:_,info:x,infoColor:k,infoBack:I,icon:y,iconColor:v,iconAnimate:j,image:Q,close:H,closeColor:L},theme:"composer",delay:c,duration:h,sticky:F,closeOnClick:P,closeButton:H,closeColor:L,clearAll:E,clearSticky:O,inEffect:s,outEffect:o,cssanimationIn:n,cssanimationOut:d,beforeStart:function(){},afterEnd:function(){var t=!0;0==jQuery(".ts-amaran.composer").length?t=!0:jQuery(".ts-amaran.composer").each(function(){jQuery(this).attr("data-randomizer")!=i&&"true"==jQuery(this).attr("data-overlay")&&(t=!1)}),t&&(TS_VCSC_Amaran_Overlay.fadeOut(250).attr("data-visible","false"),TS_VCSC_Amaran_Noise.fadeOut(250).attr("data-visible","false"))},onClick:function(){}})},c)}var e=jQuery(this),a=e.attr("id"),i=jQuery(this).attr("data-randomizer"),r=jQuery(this).attr("data-position"),s=jQuery(this).attr("data-entry"),n=jQuery(this).attr("data-entryanimate"),o=jQuery(this).attr("data-exit"),d=jQuery(this).attr("data-exitanimate"),u=jQuery(this).attr("data-background"),l=parseInt(jQuery(this).attr("data-width")),c=parseInt(jQuery(this).attr("data-delay")),h=parseInt(jQuery(this).attr("data-duration")),p=parseInt(jQuery(this).attr("data-top")),m=parseInt(jQuery(this).attr("data-bottom")),f=parseInt(jQuery(this).attr("data-left")),g=parseInt(jQuery(this).attr("data-right")),y=jQuery(this).attr("data-icon");if("transparent"==y)var y="";var v=jQuery(this).attr("data-iconcolor"),j=jQuery(this).attr("data-iconanimate"),Q=jQuery(this).attr("data-image"),w=jQuery(this).attr("data-title"),b=jQuery(this).attr("data-titlecolor"),C=jQuery(this).attr("data-titlebackground"),_=jQuery(this).find(".ts-amaran-popup-content").html(),x=jQuery(this).attr("data-info"),k=jQuery(this).attr("data-infocolor"),I=jQuery(this).attr("data-infobackground"),S=(jQuery(this).attr("data-theme"),"true"==jQuery(this).attr("data-viewport")?!0:!1),T="true"==jQuery(this).attr("data-viewportonce")?!0:!1,$=parseInt(jQuery(this).attr("data-viewportwait")),z="true"==jQuery(this).attr("data-overlay")?!0:!1,D=jQuery(this).attr("data-overlaycolor"),M="true"==jQuery(this).attr("data-rasteruse")?!0:!1,V=jQuery(this).attr("data-rastertype"),A="true"==jQuery(this).attr("data-mobile")?!0:!1,F="true"==jQuery(this).attr("data-sticky")?!0:!1,H="true"==jQuery(this).attr("data-button")?!0:!1,L=jQuery(this).attr("data-buttoncolor"),P="true"==jQuery(this).attr("data-close")?!0:!1,E="true"==jQuery(this).attr("data-clearall")?!0:!1,O="true"==jQuery(this).attr("data-clearsticky")?!0:!1;(0==TS_VCSC_MobileDevice||1==TS_VCSC_MobileDevice&&1==A)&&(S?jQuery("#"+a).waypoint({handler:function(){var e=!1;if(T||jQuery(".ts-amaran.composer").each(function(){jQuery(this).attr("data-randomizer")==i&&(e=!0)}),!e){var a=(new Date).setTime((new Date).getTime()+0),r=parseInt(jQuery(this).attr("data-viewportlast"));a-r>$&&(jQuery(this).attr("data-viewportlast",a),t())}},offset:"100%",triggerOnce:T}):t())}),jQuery(window).on("debouncedresize",function(){jQuery(".ts-amaran.composer").each(function(){var t=jQuery(this).attr("data-position"),e=parseInt(jQuery(this).attr("data-width")),a=jQuery(window).width(),i=jQuery(window).height(),r=parseInt(jQuery(this).attr("data-marginheight")),s=parseInt(jQuery(this).attr("data-marginwidth")),n=i-r,o=a-s;if(jQuery(this).css({"max-height":n+"px","max-width":(o>e?e:o)+"px"}),"center center"==t){var d=jQuery(this).height(),u=jQuery(this).outerWidth();jQuery(this).animate({"margin-left":"-"+u/2+"px","margin-top":"-"+d/2+"px"},250,function(){})}})}),setTimeout(function(){jQuery(window).trigger("resize"),jQuery(window).trigger("debouncedresize"),jQuery(window).trigger("debouncedresize.stackslider")},500)})}(jQuery),function(t,e){"use strict";function a(t){return t&&t.toLowerCase?t.toLowerCase():t}function i(t,e){for(var a=0,i=t.length;i>a;a++)if(t[a]==e)return!r;return r}var r=!1,s=null,n=parseFloat,o=Math.min,d=/(-?\d+\.?\d*)$/g,u=/(\d+\.?\d*)$/g,l=[],c=[],h=function(t){return"string"==typeof t},p=function(t,e){for(var a,i=t.length,r=i;r--;)a=i-r-1,e(t[a],a)},m=Array.prototype.indexOf||function(t){var e=this.length,a=Number(arguments[1])||0;for(a=0>a?Math.ceil(a):Math.floor(a),0>a&&(a+=e);e>a;a++)if(a in this&&this[a]===t)return a;return-1};t.tinysort={id:"TinySort",version:"1.5.6",copyright:"Copyright (c) 2008-2013 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licensed:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},plugin:function(){var t=function(t,e){l.push(t),c.push(e)};return t.indexOf=m,t}(),defaults:{order:"asc",attr:s,data:s,useVal:r,place:"start",returns:r,cases:r,forceStrings:r,ignoreDashes:r,sortFunction:s}},t.fn.extend({tinysort:function(){var f,g,y,v,j=this,Q=[],w=[],b=[],C=[],_=0,x=[],k=[],I=function(t){p(l,function(e){e.call(e,t)})},S=function(t,e){return"string"==typeof e&&(t.cases||(e=a(e)),e=e.replace(/^\s*(.*?)\s*$/i,"$1")),e},T=function(t,e){var a=0;for(0!==_&&(_=0);0===a&&v>_;){var i=C[_],s=i.oSettings,o=s.ignoreDashes?u:d;if(I(s),s.sortFunction)a=s.sortFunction(t,e);else if("rand"==s.order)a=Math.random()<.5?1:-1;else{var l=r,m=S(s,t.s[_]),f=S(s,e.s[_]);if(!s.forceStrings){var g=h(m)?m&&m.match(o):r,y=h(f)?f&&f.match(o):r;if(g&&y){var j=m.substr(0,m.length-g[0].length),Q=f.substr(0,f.length-y[0].length);j==Q&&(l=!r,m=n(g[0]),f=n(y[0]))}}a=i.iAsc*(f>m?-1:m>f?1:0)}p(c,function(t){a=t.call(t,l,m,f,a)}),0===a&&_++}return a};for(f=0,y=arguments.length;y>f;f++){var $=arguments[f];h($)?x.push($)-1>k.length&&(k.length=x.length-1):k.push($)>x.length&&(x.length=k.length)}for(x.length>k.length&&(k.length=x.length),v=x.length,0===v&&(v=x.length=1,k.push({})),f=0,y=v;y>f;f++){var z=x[f],D=t.extend({},t.tinysort.defaults,k[f]),M=!(!z||""===z),V=M&&":"===z[0];C.push({sFind:z,oSettings:D,bFind:M,bAttr:!(D.attr===s||""===D.attr),bData:D.data!==s,bFilter:V,$Filter:V?j.filter(z):j,fnSort:D.sortFunction,iAsc:"asc"==D.order?1:-1})}return j.each(function(a,i){var r,s=t(i),n=s.parent().get(0),o=[];for(g=0;v>g;g++){var d=C[g],u=d.bFind?d.bFilter?d.$Filter.filter(i):s.find(d.sFind):s;o.push(d.bData?u.data(d.oSettings.data):d.bAttr?u.attr(d.oSettings.attr):d.oSettings.useVal?u.val():u.text()),r===e&&(r=u)}var l=m.call(b,n);0>l&&(l=b.push(n)-1,w[l]={s:[],n:[]}),r.length>0?w[l].s.push({s:o,e:s,n:a}):w[l].n.push({e:s,n:a})}),p(w,function(t){t.s.sort(T)}),p(w,function(t){var e=t.s,a=t.n,s=e.length,n=a.length,d=s+n,u=[],l=d,c=[0,0];switch(D.place){case"first":p(e,function(t){l=o(l,t.n)});break;case"org":p(e,function(t){u.push(t.n)});break;case"end":l=n;break;default:l=0}for(f=0;d>f;f++){var h=i(u,f)?!r:f>=l&&l+s>f,m=h?0:1,g=(h?e:a)[c[m]].e;g.parent().append(g),(h||!D.returns)&&Q.push(g.get(0)),c[m]++}}),j.length=0,Array.prototype.push.apply(j,Q),j}}),t.fn.TinySort=t.fn.Tinysort=t.fn.tsort=t.fn.tinysort}(jQuery),function(){}(jQuery),function(t){function e(e,a,i,r){var s=e.text().split(a),n="";s.length&&(t(s).each(function(t,e){n+='<span class="'+i+(t+1)+'">'+e+"</span>"+r}),e.empty().append(n))}var a={init:function(){return this.each(function(){e(t(this),"","char","")})},words:function(){return this.each(function(){e(t(this)," ","word"," ")})},lines:function(){return this.each(function(){var a="eefec303079ad17405c889e092e105b0";e(t(this).children("br").replaceWith(a).end(),a,"line","")})}};t.fn.lettering=function(e){return e&&a[e]?a[e].apply(this,[].slice.call(arguments,1)):"letters"!==e&&e?(t.error("Method "+e+" does not exist on jQuery.lettering"),this):a.init.apply(this,[].slice.call(arguments,0))
}}(jQuery),function(t){t.fn.textfill=function(e){function a(){o.debug&&"undefined"!=typeof console&&"undefined"!=typeof console.debug&&console.debug.apply(console,arguments)}function i(){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn.apply(console,arguments)}function r(t,e,i,r,s,n){function o(t,e){var a=" / ";return t>e?a=" > ":t==e&&(a=" = "),a}a(t+"font: "+e.css("font-size")+", H: "+e.height()+o(e.height(),i)+i+", W: "+e.width()+o(e.width(),r)+r+", minFontPixels: "+s+", maxFontPixels: "+n)}function s(t,e,a,i,s,n,o,d){for(r(t+": ",e,s,n,o,d);d-1>o;){var u=Math.floor((o+d)/2);if(e.css("font-size",u),a.call(e)<=i){if(o=u,a.call(e)==i)break}else d=u;r(t+": ",e,s,n,o,d)}return e.css("font-size",d),a.call(e)<=i&&(o=d,r(t+"* ",e,s,n,o,d)),o}var n={debug:!1,maxFontPixels:40,minFontPixels:4,innerTag:"span",widthOnly:!1,success:null,callback:null,fail:null,complete:null,explicitWidth:null,explicitHeight:null},o=t.extend(n,e);return this.each(function(){var e=t(o.innerTag+":visible:first",this),r=o.explicitHeight||t(this).height(),n=o.explicitWidth||t(this).width(),d=e.css("font-size");a("Opts: ",o),a("Vars: maxHeight: "+r+", maxWidth: "+n);var u=o.minFontPixels,l=o.maxFontPixels<=0?r:o.maxFontPixels,c=void 0;o.widthOnly||(c=s("H",e,t.fn.height,r,r,n,u,l));var h=s("W",e,t.fn.width,n,r,n,u,l);o.widthOnly?e.css("font-size",h):e.css("font-size",Math.min(c,h)),a("Final: "+e.css("font-size")),e.width()>n||e.height()>r&&!o.widthOnly?(e.css("font-size",d),o.fail&&o.fail(this)):o.success?o.success(this):o.callback&&(i("callback is deprecated, use success, instead"),o.callback(this))}),o.complete&&o.complete(this),this}}(window.jQuery),function(t){t.fn.fitText=function(e,a){var i=e||1,r=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY,lineHeight:!1},a);return this.each(function(){var e=t(this),a=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*i),parseFloat(r.maxFontSize)),parseFloat(r.minFontSize))+"px"),1==r.lineHeight&&e.css("line-height",Math.max(Math.min(e.width()/(10*i),parseFloat(r.maxFontSize)),parseFloat(r.minFontSize))+"px")};a(),t(window).on("resize.fittext orientationchange.fittext",a)})}}(jQuery),function(t,e,a){t.fn.backstretch=function(i,r){return(i===a||0===i.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),a=e.data("backstretch");if(a){if("string"==typeof i&&"function"==typeof a[i])return void a[i](r);r=t.extend(a.options,r),a.destroy(!0)}a=new s(this,i,r),e.data("backstretch",a)})},t.backstretch=function(e,a){return t("body").backstretch(e,a).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==a},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var i={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},r={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(a,r,s){this.options=t.extend({},t.fn.backstretch.defaults,s||{}),this.images=t.isArray(r)?r:[r],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=a===document.body,this.$container=t(a),this.$root=this.isBody?t(n?e:document):this.$container,a=this.$container.children(".backstretch").first(),this.$wrap=a.length?a:t('<div class="backstretch"></div>').css(i).appendTo(this.$container),this.isBody||(a=this.$container.css("position"),r=this.$container.css("zIndex"),this.$container.css({position:"static"===a?"relative":a,zIndex:"auto"===r?0:r,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&n?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t,a={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),r=i,s=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),n=r/this.$img.data("ratio");n>=s?(t=(n-s)/2,this.options.centeredY&&(a.top="-"+t+"px")):(n=s,r=n*this.$img.data("ratio"),t=(r-i)/2,this.options.centeredX&&(a.left="-"+t+"px")),this.$wrap.css({width:i,height:s}).find("img:not(.deleteable)").css({width:r,height:n}).css(a)}catch(o){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){var a=this,i=a.$wrap.find("img").addClass("deleteable"),s={relatedTarget:a.$container[0]};return a.$container.trigger(t.Event("backstretch.before",s),[a,e]),this.index=e,clearInterval(a.interval),a.$img=t("<img />").css(r).bind("load",function(r){var n=this.width||t(r.target).width();r=this.height||t(r.target).height(),t(this).data("ratio",n/r),t(this).fadeIn(a.options.speed||a.options.fade,function(){i.remove(),a.paused||a.cycle(),t(["after","show"]).each(function(){a.$container.trigger(t.Event("backstretch."+this,s),[a,e])})}),a.resize()}).appendTo(a.$wrap),a.$img.attr("src",a.images[e]),a}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(a){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),a||this.$wrap.remove(),this.$container.removeData("backstretch")}};var n,o=navigator.userAgent,d=navigator.platform,u=o.match(/AppleWebKit\/([0-9]+)/),u=!!u&&u[1],l=o.match(/Fennec\/([0-9]+)/),l=!!l&&l[1],c=o.match(/Opera Mobi\/([0-9]+)/),h=!!c&&c[1],p=o.match(/MSIE ([0-9]+)/),p=!!p&&p[1];n=!((-1<d.indexOf("iPhone")||-1<d.indexOf("iPad")||-1<d.indexOf("iPod"))&&u&&534>u||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||c&&7458>h||-1<o.indexOf("Android")&&u&&533>u||l&&6>l||"palmGetResource"in e&&u&&534>u||-1<o.indexOf("MeeGo")&&-1<o.indexOf("NokiaBrowser/8.5.0")||p&&6>=p)}(jQuery,window),function(t){function e(){var e,a,i={height:u.innerHeight,width:u.innerWidth};return i.height||(e=d.compatMode,(e||!t.support.boxModel)&&(a="CSS1Compat"===e?l:d.body,i={height:a.clientHeight,width:a.clientWidth})),i}function a(){return{top:u.pageYOffset||l.scrollTop||d.body.scrollTop,left:u.pageXOffset||l.scrollLeft||d.body.scrollLeft}}function i(){var i,n=t(),d=0;if(t.each(o,function(t,e){var a=e.data.selector,i=e.$element;n=n.add(a?i.find(a):i)}),i=n.length)for(r=r||e(),s=s||a();i>d;d++)if(t.contains(l,n[d])){var u,c,h,p=t(n[d]),m={height:p.height(),width:p.width()},f=p.offset(),g=p.data("inview");if(!s||!r)return;f.top+m.height>s.top&&f.top<s.top+r.height&&f.left+m.width>s.left&&f.left<s.left+r.width?(u=s.left>f.left?"right":s.left+r.width<f.left+m.width?"left":"both",c=s.top>f.top?"bottom":s.top+r.height<f.top+m.height?"top":"both",h=u+"-"+c,g&&g===h||p.data("inview",h).trigger("inview",[!0,u,c])):g&&p.data("inview",!1).trigger("inview",[!1])}}var r,s,n,o={},d=document,u=window,l=d.documentElement,c=t.expando;t.event.special.inview={add:function(e){o[e.guid+"-"+this[c]]={data:e,$element:t(this)},n||t.isEmptyObject(o)||(n=setInterval(i,250))},remove:function(e){try{delete o[e.guid+"-"+this[c]]}catch(a){}t.isEmptyObject(o)&&(clearInterval(n),n=null)}},t(u).bind("scroll resize",function(){r=s=null}),!l.addEventListener&&l.attachEvent&&l.attachEvent("onfocusin",function(){s=null})}(jQuery),function(){for(var t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){return window.setTimeout(function(){t()},16)})}(),function(t){var e=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();t.fn.requestAnimation=function(t){var a;return a=window.mozAnimationStartTime?window.mozAnimationStartTime:window.webkitAnimationStartTime?window.webkitAnimationStartTime:(new Date).getTime(),this.each(function(){function i(u){u||(u=(new Date).getTime()),u-n>=1e3&&(o=d,d=0,n=u),t({timestamp:u,elapsed:u-a,frameTime:u-s,framesPerSecond:o})!==!1&&(e(i,r),++d)}var r=this,s=a,n=a,o=0,d=0;i(a)})}}(jQuery),function(t,e){function a(t){this.$element=jQuery(t),this.init()}var i="scrollParallax";a.prototype.init=function(){var e=this;this.startPosition=0,this.offsetTop=this.$element.offset().top,this.height=this.$element.outerHeight(!0),this.momentum=this.$element.attr("data-momentum"),this.direction=this.$element.attr("data-direction"),this.alignment=this.$element.attr("data-alignment"),t(this).requestAnimation(function(){e.scrollParallax()})},a.prototype.scrollParallax=function(){var a=(jQuery(e).height(),jQuery(e).scrollTop()-20),i=jQuery(e).scrollTop()+jQuery(e).height()+20,r=this.$element.offset().top,s=this.$element.offset().top+this.$element.height(),n=this.$element.attr("data-disabled");if(!(r>=i||a>=s||"true"==n||this.$element.hasClass("ts-device-row-hidden"))){this.$element.offset().top>jQuery(e).height()&&"none"!=this.direction&&(this.startPosition=(this.$element.offset().top-jQuery(e).height())*Math.abs(this.momentum)),position=this.startPosition+jQuery(e).scrollTop()*this.momentum;var o="50%",d="50%";if("up"===this.direction||"down"===this.direction?"left"===this.alignment?o=this.$element.offset().left+"px":"right"===this.alignment&&(o="calc(100% - "+(t(e).width()-this.$element.offset().left-this.$element.width())+"px)"):("left"===this.direction||"right"===this.direction)&&("top"===this.alignment?d="0":"bottom"===this.alignment&&(d="100%")),"left"==this.direction)o=position+"px";else if("right"==this.direction)o="calc(100% + "+-position+"px)";else if("down"==this.direction){var u=-(jQuery(e).height()-this.$element.offset().top-this.$element.height()-parseInt(this.$element.css("paddingTop"))-parseInt(this.$element.css("paddingBottom")));d="calc(100% + "+(u-jQuery(e).scrollTop()-position)+"px)"}else d=this.$element.offset().top-jQuery(e).scrollTop()+position+"px";this.$element.css({backgroundPosition:o+" "+d})}},t.fn[i]=function(e){return this.each(function(){t.data(this,"plugin_"+i)||t.data(this,"plugin_"+i,new a(this,e))})}}(jQuery,window,document),function(t){"use strict";function e(t,e){if(this.createTextRange){var a=this.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",e-t),a.select()}else this.setSelectionRange&&(this.focus(),this.setSelectionRange(t,e))}function a(t){var e=this.value.length;if(t="start"==t.toLowerCase()?"Start":"End",document.selection){var a,i,r,s=document.selection.createRange();return a=s.duplicate(),a.expand("textedit"),a.setEndPoint("EndToEnd",s),i=a.text.length-s.text.length,r=i+s.text.length,"Start"==t?i:r}return"undefined"!=typeof this["selection"+t]&&(e=this["selection"+t]),e}var i={codes:{188:44,109:45,190:46,191:47,192:96,220:92,222:39,221:93,219:91,173:45,187:61,186:59,189:45,110:46},shifts:{96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"}};t.fn.number=function(r,s,n,o){o="undefined"==typeof o?",":o,n="undefined"==typeof n?".":n,s="undefined"==typeof s?0:s;var d="\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4),u=new RegExp("[^"+d+"0-9]","g"),l=new RegExp(d,"g");return r===!0?this.is("input:text")?this.on({"keydown.format":function(r){var d=t(this),c=d.data("numFormat"),h=r.keyCode?r.keyCode:r.which,p="",m=a.apply(this,["start"]),f=a.apply(this,["end"]),g="",y=!1;if(i.codes.hasOwnProperty(h)&&(h=i.codes[h]),!r.shiftKey&&h>=65&&90>=h?h+=32:!r.shiftKey&&h>=69&&105>=h?h-=48:r.shiftKey&&i.shifts.hasOwnProperty(h)&&(p=i.shifts[h]),""==p&&(p=String.fromCharCode(h)),8!==h&&p!=n&&!p.match(/[0-9]/)){var v=!0;if(p.match(/[-]/)&&(c.isNegative||(c.isNegative=!0,v=!1)),v){var j=r.keyCode?r.keyCode:r.which;if(46==j||8==j||9==j||27==j||13==j||(65==j||82==j)&&(r.ctrlKey||r.metaKey)===!0||(86==j||67==j)&&(r.ctrlKey||r.metaKey)===!0||j>=35&&39>=j)return;return r.preventDefault(),!1}}if(0==m&&f==this.value.length||0==d.val()?8===h?(m=f=1,this.value="",c.init=s>0?-1:0,c.c=s>0?-(s+1):0,e.apply(this,[0,0])):p===n?(m=f=1,this.value="0"+n+new Array(s+1).join("0"),c.init=s>0?1:0,c.c=s>0?-(s+1):0):0===this.value.length&&(c.init=s>0?-1:0,c.c=s>0?-s:0):c.c=f-this.value.length,8==h&&1>=m&&c.isNegative)r.preventDefault(),c.isNegative=!1,c.c--,y=this.value.length+c.c;else if(s>0&&p==n&&m==this.value.length-s-1)c.c++,c.init=Math.max(0,c.init),r.preventDefault(),y=this.value.length+c.c;else if(p==n)c.init=Math.max(0,c.init),r.preventDefault();else if(s>0&&8==h&&m==this.value.length-s)r.preventDefault(),c.c--,y=this.value.length+c.c;else if(s>0&&8==h&&m>this.value.length-s){if(""===this.value)return;"0"!=this.value.slice(m-1,m)&&(g=this.value.slice(0,m-1)+"0"+this.value.slice(m),d.val(g.replace(u,"").replace(l,n))),r.preventDefault(),c.c--,y=this.value.length+c.c}else 8==h&&this.value.slice(m-1,m)==o?(r.preventDefault(),c.c--,y=this.value.length+c.c):s>0&&m==f&&this.value.length>s+1&&m>this.value.length-s-1&&isFinite(+p)&&!r.metaKey&&!r.ctrlKey&&!r.altKey&&1===p.length&&(g=f===this.value.length?this.value.slice(0,m-1):this.value.slice(0,m)+this.value.slice(m+1),this.value=g,y=m);y!==!1&&e.apply(this,[y,y]),d.data("numFormat",c)},"keyup.format":function(i){var r,n=t(this),o=n.data("numFormat"),d=i.keyCode?i.keyCode:i.which,u=a.apply(this,["start"]);""===this.value||(48>d||d>57)&&(96>d||d>105)&&8!==d||(n.val(n.val()),s>0&&(o.init<1?(u=this.value.length-s-(o.init<0?1:0),o.c=u-this.value.length,o.init=1,n.data("numFormat",o)):u>this.value.length-s&&8!=d&&(o.c++,n.data("numFormat",o))),n.get(0).value.length?o.isNegative&&(n.get(0).value="-"+this.value):o.isNegative=!1,r=this.value.length+o.c,e.apply(this,[r,r]))},"paste.format":function(e){var a=t(this),i=e.originalEvent,r=null;return window.clipboardData&&window.clipboardData.getData?r=window.clipboardData.getData("Text"):i.clipboardData&&i.clipboardData.getData&&(r=i.clipboardData.getData("text/plain")),a.val(r),e.preventDefault(),!1}}).each(function(){var e=t(this).data("numFormat",{c:-(s+1),decimals:s,thousands_sep:o,dec_point:n,regex_dec_num:u,regex_dec:l,init:!1});""!==this.value&&e.val(e.val())}):this.each(function(){var e=t(this),a=e.text().match(/^-/)?-1:1,i=+e.text().replace(u,"").replace(l,".")*a;e.number(isFinite(i)?+i:0,s,n,o)}):this.text(t.number.apply(window,arguments))};var r=null,s=null;t.isPlainObject(t.valHooks.text)?(t.isFunction(t.valHooks.text.get)&&(r=t.valHooks.text.get),t.isFunction(t.valHooks.text.set)&&(s=t.valHooks.text.set)):t.valHooks.text={},t.valHooks.text.get=function(e){var a,i=t(e),s=i.data("numFormat");return s?""===e.value?"":(e.value.match(/^-/)&&(s.isNegative=!0),a=+e.value.replace(s.regex_dec_num,"").replace(s.regex_dec,"."),a=isFinite(a)?a:0,0!=a&&s.isNegative&&(a*=-1),""+a):t.isFunction(r)?r(e):void 0},t.valHooks.text.set=function(e,a){var i=t(e),r=i.data("numFormat");return r?e.value=""===a?"":t.number(a,r.decimals,r.dec_point,r.thousands_sep):t.isFunction(s)?s(e,a):void 0},t.number=function(t,e,a,i){i="undefined"==typeof i?",":i,a="undefined"==typeof a?".":a,e=isFinite(+e)?Math.abs(e):0;var r="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),s="\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4);t=(t+"").replace(".",a).replace(new RegExp(s,"g"),"").replace(new RegExp(r,"g"),".").replace(new RegExp("[^0-9+-Ee.]","g"),"");var n=isFinite(+t)?+t:0,o="",d=function(t,e){var a=Math.pow(10,e);return""+Math.round(t*a)/a};return o=(e?d(n,e):""+Math.round(n)).split("."),o[0].length>3&&(o[0]=o[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(o[1]||"").length<e&&(o[1]=o[1]||"",o[1]+=new Array(e-o[1].length+1).join("0")),o.join(a)}}(jQuery),function(t){var e,a,i=t.event;e=i.special.debouncedresize={setup:function(){t(this).on("resize",e.handler)},teardown:function(){t(this).off("resize",e.handler)},handler:function(t,r){var s=this,n=arguments,o=function(){t.type="debouncedresize",i.dispatch.apply(s,n)};a&&clearTimeout(a),r?o():a=setTimeout(o,e.threshold)},threshold:150},t.event.special.debouncedresize.threshold=250}(jQuery);
;

