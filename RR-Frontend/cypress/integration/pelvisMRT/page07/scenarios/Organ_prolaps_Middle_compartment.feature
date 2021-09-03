Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select 'MRI pelvic floor' radio button from Page 01 of Pelvic MRI
And 'Dynamic' checkbox
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Organ prolaps' from the dropdown
Then 'Add new finding' button is enabled
And 'Anterior compartment' tab is preselected

When I select 'Middle compartment' tab
Then 'Uterine-/Vaginal prolapse' checkbox is enabled

When I select 'Uterine-/Vaginal prolapse' checkbox
Then 'Maximum craniocaudal extension in reference to PC' input field is enabled
And 'Above the MPL' radio button is enabled
And 'Below the MPL' radio button is enabled
And 'Organ eversion' radio button is enabled

And 'Uterine prolapse exceeding the external genital' checkbox is enabled
And 'Eversion of the vaginal walls' checkbox is enabled
And 'Horizontal shift of the vaginal axis' checkbox is enabled
And 'Evidence of a large uterus myoma/fibroid' checkbox is enabled

When I enter '10' in the input field 'Maximum craniocaudal extension in reference to PC'
Then 'Light' is displayed in the auto-filed input field 'Grading'
When I enter '30' in the input field 'Maximum craniocaudal extension in reference to PC'
Then 'Light' is displayed in the auto-filed input field 'Grading'

When I enter '31' in the input field 'Maximum craniocaudal extension in reference to PC'
Then 'Medium' is displayed in the auto-filed input field 'Grading'
When I enter '60' in the input field 'Maximum craniocaudal extension in reference to PC'
Then 'Medium' is displayed in the auto-filed input field 'Grading'

When I enter '61' in the input field 'Maximum craniocaudal extension in reference to PC'
Then 'Severe' is displayed in the auto-filed input field 'Grading'

When I select 'Above the MPL' radio button
And I enter '31' in the 'Expansion*'
Then 'Stage 0' is displayed in the auto-filed input field 'Grading'

When I select 'Above the MPL' radio button
And I enter '11' in the 'Expansion*'
Then 'Stage 0' is displayed in the auto-filed input field 'Grading'
And I enter '30' in the 'Expansion*'
Then 'Stage 0' is displayed in the auto-filed input field 'Grading'

When I select 'Above the MPL' radio button
And I enter '1' in the 'Expansion*'
Then 'Stage 2' is displayed in the auto-filed input field 'Grading'
And I enter '10' in the 'Expansion*'
Then 'Stage 2' is displayed in the auto-filed input field 'Grading'

When I select 'Below the MPL' radio button
And I enter '1' in the 'Expansion*'
Then 'Stage 2' is displayed in the auto-filed input field 'Grading'
And I enter '10' in the 'Expansion*'
Then 'Stage 2' is displayed in the auto-filed input field 'Grading'

When I select 'Organ eversion' radio button
Then 'Stage 4' is displayed in the auto-filed input field 'Grading'
And 'Expansion*' dropdown is disabled
And 'Rest' dropdown is disabled
And 'Defecation' dropdown is disabled

