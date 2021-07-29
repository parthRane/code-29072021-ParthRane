var TableData = [{
    "Gender": "Male",
    "HeightCm": 171,
    "WeightKg": 96
  },
  {
    "Gender": "Male",
    "HeightCm": 161,
    "WeightKg": 85
  },
  {
    "Gender": "Male",
    "HeightCm": 180,
    "WeightKg": 77
  },
  {
    "Gender": "Female",
    "HeightCm": 166,
    "WeightKg": 62
  },
  {
    "Gender": "Female",
    "HeightCm": 150,
    "WeightKg": 70
  },
  {
    "Gender": "Female",
    "HeightCm": 167,
    "WeightKg": 82
    }]

for (var i in TableData) {
    var row = <tr>
        <td>${TableData[i].Gender}</td>
        <td>${TableData[i].HeightCm}</td>
        <td>${ TableData[i].WeightKg}</td>
        {/* <td>${TableData[i].BMI}</td>
        <td>${ TableData[i].HealthReport}</td> */}
    </tr>
    
    var table = ${'table-body'}
    table.append(row)
    }