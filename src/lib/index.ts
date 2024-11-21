// place files you want to import through the `$lib` alias in this folder.

export function parseStringTemplate(str: string, obj: {[index: string]:any}) {
    const parts = str.split(/\{(?!\d)[\w]*\}/);
    const args = str.match(/[^{\}]+(?=})/g) || [];
    const parameters = args.map((argument: any) => obj[argument] || (obj[argument] === undefined ? "" : obj[argument]));
    return String.raw({ raw: parts }, ...parameters);
}

export function download(content: any, fileName: string, contentType: string) {
    if (!document) {
        return
    }
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

export function upload(callback: Function, accept: string, isBinary = false) {
    if (!document) {
        return
    }
    const reader = new FileReader();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
        const files = Array.from(input.files as ArrayLike<File>);
        reader.onload = () => {
            callback(reader.result);
        };

        if (files.length === 0) {
            return;
        }
        const file = files[0];
        if (isBinary) {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsText(file)
        }
    };
    input.click();
    
  }