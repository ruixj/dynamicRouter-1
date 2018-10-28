export default {
	getCusTime(date){
		var d = new Date(Date.parse(date.replace(/-/g,"/")));
		var hh = d.getHours()
		if(hh < 10){
			hh = '0' + hh
		}
		var mm = d.getMinutes()
		if(mm < 10){
			mm = '0' + mm
		}
		var time = hh + ":" + mm
		return time
	},

	formatDate(date, fmt) {
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		let o = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
			}
		}
		return fmt;
	},

	padLeftZero(str) {
		return ('00' + str).substr(str.length);
	},

	getAge(birthday){
		var curDate = new Date()

		var date = new Date(birthday)
		var age = curDate.getFullYear() - date.getFullYear()

		return age
	},

	convertDateFromString(dateString) {
		if (dateString) {
			var arr1 = dateString.split(" ")
			var sdate = arr1[0].split('-')
			var date = new Date(sdate[0], sdate[1] - 1, sdate[2])
			return date
		}
	},

	getDate(date){
		var d = date

		var yyyy = d.getFullYear()
		var mm = d.getMonth() + 1
		var dd = d.getDate()

		var o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getDayOfWeek (index, date) {
		var day = date.getDay() || 7
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() + index - day)
	},

	getYYMM(date) {
		let d = date

		let yyyy = d.getFullYear()
		let mm = d.getMonth() + 1

		if(mm < 10){
			mm = '0' + mm
		}

		let o = yyyy + '-' + mm

		return o
	},

	getYYMMDD(date) {
		let d = date

		let yyyy = d.getFullYear()
		let mm = d.getMonth() + 1
		let dd = date.getDate()

		if(mm < 10){
			mm = '0' + mm
		}

		if(dd < 10){
			dd = '0' + dd
		}

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getYYMMDDHHmm(date) {
		let d = date

		let yyyy = d.getFullYear()
		let mm = d.getMonth() + 1
		let dd = date.getDate()
		let hh = date.getHours()
		let MM = date.getMinutes()

		if(mm < 10){
			mm = '0' + mm
		}

		if(dd < 10){
			dd = '0' + dd
		}

		if(hh < 10){
			hh = '0' + hh
		}

		if(MM < 15){
			MM = '00'
		}else if(MM < 30){
			MM = '15'
		}else if(MM < 45){
			MM = '30'
		}else if(MM < 60){
			MM = '45'
		}

		let o = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM

		return o
	},

	mGetDate(year, month){
	var d = new Date(year, month, 0)
	return d.getDate()
	},

	getPreDayDate(date){
		let preDayTime = date.getTime() - 24*60*60*1000
		let preDayDate = new Date(preDayTime)
		let yyyy = preDayDate.getFullYear()
		let mm = preDayDate.getMonth() + 1
		let dd = preDayDate.getDate()

		if(mm < 10){
			mm = '0' + mm
		}
		if(dd < 10){
			dd = '0' + dd
		}

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getNextDayDate(date){
		let nextDayTime = date.getTime() + 24*60*60*1000
		let nextDayDate = new Date(nextDayTime)

		let yyyy = nextDayDate.getFullYear()
		let mm = nextDayDate.getMonth() + 1
		let dd = nextDayDate.getDate()

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getPreWeekDate(date){
		let preWeekTime = date.getTime() - 24*60*60*1000*7
		let preWeekDate = new Date(preWeekTime)
		let yyyy = preWeekDate.getFullYear()
		let mm = preWeekDate.getMonth() + 1
		let dd = preWeekDate.getDate()

		if(mm < 10){
			mm = '0' + mm
		}
		if(dd < 10){
			dd = '0' + dd
		}

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getNextWeekDate(date){
		let nextWeekTime = date.getTime() + 24*60*60*1000*7
		let nextWeekDate = new Date(nextWeekTime)

		let yyyy = nextWeekDate.getFullYear()
		let mm = nextWeekDate.getMonth() + 1
		let dd = nextWeekDate.getDate()

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getPreMonthDate(date){
		let yyyy = date.getFullYear()
		let mm = date.getMonth()
		let dd = date.getDate()
		if(mm < 10){
			if(mm == 0){
				mm = '12'
				yyyy = yyyy - 1
			}else{
				mm = '0' + mm
			}
		}
		if(dd < 10){
			dd = '0' + dd
		}

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getNextMonthDate(date){
		let yyyy = date.getFullYear()
		let mm = date.getMonth() + 2
		let dd = date.getDate()

		if(mm == 13){
			mm = '01'
			yyyy = yyyy + 1
		}else{
			if(mm < 10){
				mm = '0' + mm
			}
			if(dd < 10){
				dd = '0' + dd
			}
		}

		let o = yyyy + '-' + mm + '-' + dd

		return o
	},

	getMondayDateOfWeek (date) {
		var day = date.getDay() || 7;
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1 - day);
	},

	getSundayDateOfWeek (date) {
		var day = date.getDay() || 7;
		return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7 - day);
	},

	CompareDate(d1,d2)
	{
		return ((new Date(d1.replace(/-/g,"\/"))) > (new Date(d2.replace(/-/g,"\/"))));
	}
}


