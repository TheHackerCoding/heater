/*
    Info
        - random word generator generating 15 letters with a dictionary of _.length ( ion know 53 ┐('～`；)┌ )
*/
const fs = require('fs');
const os = require('os');
//console.log(os.platform())
switch (os.platform()) {
  case 'darwin':
    var temp = process.env.TMPDIR;
    var bs = "FINDER.TMP";
    break;
  case 'win32':
    var temp = process.env.TEMP;
    var bs = "EXPLORER.TMP";
    break;
  case 'linux':
    var temp = "/tmp/";
    var bs = "LINUX.TMP";
    break;
}
function append(x, y) {
  try {
    fs.appendFileSync(x, y + "\n");
  } catch (error) {
    console.log(error);
  }
}
let _ = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "_"] //52
var _loop_number = _.length;
var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v; //15
for (h = 0; h < _loop_number; h++){
  for (i = 0; i < _loop_number; i++){
    for (j = 0; j < _loop_number; j++){
      for (k = 0; k < _loop_number; k++){
        for (l = 0; l < _loop_number; l++){
          for (m = 0; m < _loop_number; m++){
            for (n = 0; n < _loop_number; n++){
              for (o = 0; o < _loop_number; o++){
                for (p = 0; p < _loop_number; p++){
                  for (q = 0; q < _loop_number; q++){
                    for (r = 0; r < _loop_number; r++){
                      for (s = 0; s < _loop_number; s++){
                        for (t = 0; t < _loop_number; t++){
                          for (u = 0; u < _loop_number; u++){
                            for (v = 0; v < _loop_number; v++){
                              let __random_name = _[h] + _[i] + _[j] + _[k] + _[l] + _[m] + _[n] + _[o] + _[p] + _[q] + _[r] + _[s] + _[t] + _[u] + _[v];
                              // ↑ ...ik this isnt python
                              console.log(__random_name);
                              append(temp + bs, __random_name);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// its supposted to look like this... no loops
//let bro = _[h] + _[i] + _[j] + _[k] + _[l] + _[m] + _[n] + _[o] + _[p] + _[q]
//console.log(bro)

