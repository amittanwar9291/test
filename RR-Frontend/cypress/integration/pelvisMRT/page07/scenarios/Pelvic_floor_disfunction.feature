Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select 'MRI pelvic floor' radio button from Page 01 of Pelvic MRI
And 'Dynamic' checkbox
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Organ prolaps' from the dropdown
Then 'Add new finding' button is enabled

And 'Hiatal extension: H-line' checkbox is enabled
And 'Descending pelvic floor: M-Line' checkbox is enabled
And 'Caudal angulation of levator plate by > 10° to the PCL' checkbox is enabled

When I select 'Hiatal extension: H-line' checkbox
Then input field 'in mm' is enabled

When I enter '1' in the input field 'in mm'
Then auto-filled input field shows 'Normal'
And I enter '59' in the input field 'in mm'
Then auto-filled input field shows 'Normal'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '60' in the input field 'in mm'
Then auto-filled input field shows 'Light'
And I enter '80' in the input field 'in mm'
Then auto-filled input field shows 'Light'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '81' in the input field 'in mm'
Then auto-filled input field shows 'Medium'
And I enter '100' in the input field 'in mm'
Then auto-filled input field shows 'Medium'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '101' in the input field 'in mm'
Then auto-filled input field shows 'Severe'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I select 'Descending pelvic floor: M-Line' checkbox
Then input field 'in mm' is enabled

When I enter '1' in the input field 'in mm'
Then auto-filled input field shows 'Normal'
And I enter '19' in the input field 'in mm'
Then auto-filled input field shows 'Normal'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '20' in the input field 'in mm'
Then auto-filled input field shows 'Light'
And I enter '40' in the input field 'in mm'
Then auto-filled input field shows 'Light'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '41' in the input field 'in mm'
Then auto-filled input field shows 'Medium'
And I enter '60' in the input field 'in mm'
Then auto-filled input field shows 'Medium'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

When I enter '61' in the input field 'in mm'
Then auto-filled input field shows 'Severe'
And 'Rest' radio button is enabled
And 'Defecation' radio button is enabled

