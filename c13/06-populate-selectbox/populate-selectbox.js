/*
사용자가 드롭다운 목록에서 옵션을 선택하면 change 이벤트가 발생
*/
(function () {
	var type = document.getElementById('equipmentType');
	var model = document.getElementById('model');
	var cameras = {
		bolex: 'Bolex Paillard H8',
		yashica: 'Yashica 30',
		pathescape: 'Pathescape Super-8 Relax',
		cannon: 'Canon 512'
	};
	var projectors = {
		kodak: 'Kodak Instamatic M55',
		bolex: 'Bolex Sound 715',
		eumin: 'Euming Mark S',
		sankyo: 'Sankyo Dualux'
	}

	addEvent(type, 'change', function () {
		if (this.value === 'choose') {
			model.innerHTML = '<option>Please choose a type first</option>';
			return;
		}

		var models = getModels(this.value);
		var options = '<option>Please choose a model</option>';
		// 루프 내에서 key 변수는 객체의 각 아이템을 참조 
		var key;
		for (key in models) {
			options += '<option value="' + key + '">' + models[key] + '</option>';
		}
		model.innerHTML = options;
	});

	function getModels(equipmentType) {
		if (equipmentType === 'cameras') {
			return cameras;
		} else if (equipmentType === 'projectors') {
			return projectors;
		}
	}
}());