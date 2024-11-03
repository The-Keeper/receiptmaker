// place files you want to import through the `$lib` alias in this folder.
export function array_move(arr: any[], old_index: number, new_index: number) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing purposes
};

export function parseStringTemplate(str: string, obj: {[index: string]:any}) {
    let parts = str.split(/\{(?!\d)[\w]*\}/);
    let args = str.match(/[^{\}]+(?=})/g) || [];
    let parameters = args.map((argument: any) => obj[argument] || (obj[argument] === undefined ? "" : obj[argument]));
    return String.raw({ raw: parts }, ...parameters);
}

export function download(content: any, fileName: string, contentType: string) {
    if (!document) {
        return
    }
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

export function upload(callback: Function, accept: string, isBinary = false) {
    if (!document) {
        return
    }
    const reader = new FileReader();
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
        let files = Array.from(input.files as ArrayLike<File>);
        reader.onload = function () {
            callback(reader.result);
        };

        if (files.length == 0) {
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