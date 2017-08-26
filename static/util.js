import _ from 'lodash'

export function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size)
}

export function validEmail(email){
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function stringEquals(first, second){
  return first.toUpperCase().trim() == second.toUpperCase().trim()
}
