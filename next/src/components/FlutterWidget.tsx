import React, { useEffect, useState } from 'react';

type AnimationStatus = 'dismissed' | 'animating' | 'completed';

declare let _flutter: any;

function FlutterWidget(props: {dirName: string, height: number}) {

    const dirName = props.dirName;
    const height = props.height;
    
    const [status, setAnimState] = useState<AnimationStatus>('dismissed');
    useEffect(() => {
    
        const flutterBundle = document.createElement('script');

        flutterBundle.src = `/flutter/${dirName}/flutter.js`;
        flutterBundle.defer = true;
        document.head.appendChild(flutterBundle);
        
        flutterBundle.addEventListener('load', () => {
  
          _flutter.loader.loadEntrypoint({
            entrypointUrl: `/flutter/${dirName}/main.dart.js`,
            onEntrypointLoaded: async function (engineInitializer: any) {

              let appRunner = await engineInitializer.initializeEngine({
                assetBase: `/flutter/${dirName}/`,
                canvasKitBaseUrl: `/flutter/${dirName}//canvaskit/`,
                hostElement: document.querySelector('#flutter_target'),
                renderer: 'canvaskit'
              })
              
              await appRunner.runApp();
            }
          });
  
        });
  
        return () => {
          document.head.removeChild(flutterBundle);
        }
    }, [ dirName ]);

    useEffect(() => {
      const handleScroll = () => {
        if(status === 'completed') return;

        const element = document.getElementById('flutter_target');
        if (element) {
          const rect = element.getBoundingClientRect();
          const ratio = rect.top / window.innerHeight;
          if(ratio < 0.5){
            setAnimState('animating');
            setTimeout(()=>{
              setAnimState('completed');
            }, 500);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [status]);

    return (

      <div id='flutter_target' 
        className={`overflow-visible transition-all duration-[500ms] ${status === 'animating' ? '-translate-y-6 scale-110' : 'translate-y-0 scale-100'} ease-in-out`} 
        style={{height: height}}  
      />
    )
}


export default FlutterWidget;