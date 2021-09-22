import * as React from 'react';
import './ProgressBar.css';

import { CSSProperties } from 'react';

declare const manywho: any;

export default class ProgressBar extends React.Component<any,any> {
    
    constructor(props: any) {
        super(props);
    }

    async componentDidMount() {
        this.forceUpdate();
    }

    
    render() {
        let model = manywho.model.getComponent(this.props.id, this.props.flowKey);
        
        let componentClass: string = "";
        let headerClass: string = "";
        let title: string = model.attributes?.title || 'Select File';

        componentClass = "pb " + (model.attributes?.classes || "");
        
        
        let style: CSSProperties = {};
        style.width="-webkit-fill-available";
        style.height="1rem";

        if(model.isVisible === false) {
            style.display = "none";
        }
        if(model.width) {
            style.width=model.width + "px"
        }
        if(model.height) {
            style.height=model.height + "px"
        }

        let width: string = "" + model.attributes?.progress + "%";
        let label: string = "" + model.attributes?.progress + " %";
        let barStyle: CSSProperties = {};
        barStyle.width = width;
  

        return (
                <div 
                    className={componentClass}
                    style={style}
                >
                    <div 
                        className="pb-bar"
                        style={barStyle}
                    />
                    <div 
                        className="pb-legend"
                    >
                        <span
                            className="pb-label"
                        >
                            {label}
                        </span>
                    </div>
               </div>
        );
    }

}

manywho.component.register('ProgressBar', ProgressBar);

