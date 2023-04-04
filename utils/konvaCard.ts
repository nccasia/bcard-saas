

export const editTextCard = (e: any) => {
    const stage = e.target.getStage();
    const node = e.target as any;
    const textPosition = node.getAbsolutePosition();
    const stageRect = stage.container().getBoundingClientRect();
    const nodeRect = node.getClientRect();
    const absPos = {
        x: stageRect.left + nodeRect.x,
        y: stageRect.top + nodeRect.y,
    };
    const textarea = document.createElement('input');
    textarea.value = node.text();
    document.body.appendChild(textarea);
    textarea.style.position = 'absolute';
    textarea.style.zIndex="10"
    textarea.style.top = absPos.y + 'px';
    textarea.style.left = absPos.x + 'px';
    textarea.style.width = String(Number(nodeRect.width+5)) + 'px';
    textarea.style.height = String(Number(nodeRect.height+5)) + 'px';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.padding = '0';
    textarea.style.fontSize = node.fontSize() + 'px';
    textarea.style.fontFamily = node.fontFamily();
    //textarea.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    textarea.style.color = node.fill();
    textarea.style.resize = 'none';
    textarea.focus();

    // const handleTextareaBlur = () => {
    //     if (!document.body.contains(textarea)) {
    //         return;
    //     }
    //     const updatedText = textarea.value;
    //     node.text(updatedText);
    //     document.body.removeChild(textarea);
    //     stage.batchDraw(); 
    // };
    // textarea.addEventListener('blur', handleTextareaBlur);   
    return new Promise((resolve, reject) => {
        const handleTextareaBlur = () => {
            if (!document.body.contains(textarea)) {
                reject(new Error('Textarea not found in document body.'));
            }
            const updatedText = textarea.value;
            node.text(updatedText);
            document.body.removeChild(textarea);
            stage.batchDraw(); 
            resolve(updatedText);
        };
        textarea.addEventListener('blur', handleTextareaBlur); 
    });    
};