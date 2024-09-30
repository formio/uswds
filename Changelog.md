# Change Log
All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 2.6.0-rc.3
### Changed
 - FIO-8960: Updated file component template
   
## 2.6.0-rc.2
### Changed
 - FIO-8911 Added 'aria-labelledby' to Select component
   
## 2.6.0-rc.1
### Changed
 - FIO-8729: upgraded to 5x renderer
 - FIO-8507: GH Action To Publish USWDS To NPM

## 2.5.1
### Changed
 - Official Release

## 2.5.1-rc.1
### Changed
 - FIO-7660 Fixed the progressbar for File component
   
## 2.5.0
### Changed
 - Official Release

## 2.5.0-rc.1
### Changed
 - Increment minor version.
 - FIO-6551 Added USWDS support for DataTable

## 2.4.8
### Changed
 - Official Release

## 2.4.8-rc.1
### Fixed
 - FIO-5082: Added label alignment for PDF condensed mode
 - FIO-5327: Fixed style for Month input

## 2.4.7
### Changed
 - Official Release

## 2.4.7-rc.1
### Fixed
 - FIO-5276: fixed template for Day component
 - FIO-5275: Select comp provide submitted data on PDF

## 2.4.6
### Changed
 - Official Release

## 2.4.6-rc.1
### Fixed
 - Fixing issues with viewer crashing when widget=null.

## 2.4.5
### Changed
 - Official Release

## 2.4.5-rc.1
### Fixed
 - FIO-4600: Fixed radio buttons inside of Survey component

## 2.4.4
### Changed
 - Official Release

## 2.4.4-rc.1
### Fixed
 - Styles declaration on the component template.

## 2.4.3
### Changed
 - Official Release

## 2.4.3-rc.1
### Changed
 - FIO-4314: Fixes viewer not having script and style resources

## 2.4.2
### Changed
 - Official Release

## 2.4.2-rc.1
### Fixed
 - FIO-4081 Fixed incorrect file pattern message
 - FIO-3990 Fixed issue with checkboxes inside of Fieldset in DataGrid

## 2.4.1
### Changed
 - Official Release

## 2.4.1-rc.1
### Fixed
 - FIO-4082, FIO-2984, FIO-4098: Fixed styles for checkbox, file, error indication

## 2.4.0
### Changed
 - Official Release

## 2.4.0-rc.3
### Fixed
 - FIO-3758: Duplication of radio ids inside nested forms

## 2.4.0-rc.2
### Fixed
 - FIO-3758: Duplication of radio ids inside nested forms
 - FIO-3782 Fixed outline for choicesjs select in PDF

## 2.4.0-rc.1
### Changed
 - Upgrade formiojs@4.14.0-rc.23

### Fixed
 - FIO-3656 Fixed issue when columns were not auto collapsing in some cases
 - FIO-3519 Made 'scroll on top' option in wizard to scroll to the top of progressbar
 - Changes for 2.4.0 uswds release:
 - FIO-3208 Fixed issue when description was displaying under charcount
 - FIO-3206 Fixed styles for labels
 - FIO-2648 Adjusted uswds styles to work with vpat
 - FIO-2546 Fixed focus outline of builder modal buttons, which were not fully visible for Content component
 - FIO-2544 Fixed issue when suffixes and prefixes were displayed wrong on a big scale
 - FIO-2535 Fixed modal buttons that were displaying outside of modal window in FMG

## 2.3.8
### Fixed
 - FIO-3598 Rolled back USWDS version to fix issues with radio and checkboxes

## 2.3.7
### Fixed
 - FIO-1627 Changed focus order in wizard header for tooltip to be included into intuitive flow

## 2.3.6
### Fixed
 - FIO-1627 Fixed wizard panel tooltip not being focusable

## 2.3.5
### Fixed
 - FIO-1627: Added tooltip to wizard header

## 2.3.4
### Fixed
 - FIO-3210 Fixed button component to have correct options and builder and to correctly display custom classes

## 2.3.3
### Changed
 - Released 2.3.3 as official release.

## 2.3.3-rc.1
### Fixed
 - FIO-3104: Fixes an issue where usa-button class makes buttons to be always visible event when they have formio-hidden class

### Changed
 - Upgrade dependencies.

## 2.3.2
### Fixed
 - FIO-2643 Fixed tooltips displaying 'null'

### Changed
 - Upgrade formiojs@4.13.0-rc.26

## 2.3.1
### Fixed
 - https://github.com/formio/uswds/pull/185

## 2.3.0-rc.2
### Changed
 - Upgrade formiojs@4.13.0-rc.13

## 2.3.0-rc.1
### Changed
 - https://github.com/formio/uswds/pull/176

## 2.2.0
### Changed
 - No changes. Released 2.2.0-rc.1 as 2.2.0

## 2.2.0-rc.1
### Changed
 - Upgrade formiojs@4.13.0-rc.6

## 2.1.0
### Changed
 - Upgrade formiojs@4.13.0-rc.5
### Changed
 - Changes for USWDS v2.1.0

## 2.0.3
### Fixed
 - Issue where the PDF upload is not showing the progress indicator.

## 2.0.2
### Changed
 - Upgrade formiojs@4.12.4

## 2.0.2-rc.3
### Fixed
 - Adding target to webpack so builds work with IE11.
 - Fixed viewer not working in IE

## 2.0.2-rc.2
### Changed
 - Upgrade formiojs@4.12.4-rc.2

## 2.0.2-rc.1
### Fixed
 - FJS-1488: Adding tabindex to datagrid elements.

### Changed
 - Upgrade formiojs@4.12.4-rc.1
 - Upgrade @types/node@14.14.12, sinon@9.2.2, ts-node@9.1.1, @types/mocha@8.2.0

## 2.0.1
### Fixed
 - VPAT-775 Changed wizardHeader from nav to div and fixed focus on progressbar

### Changed
 - Upgrade formiojs@4.12.2

## 2.0.1-rc.3
### Fixed
 - VPAT-758 Removed styling modifications for disabled dates in Datepicker
 - VPAT-757 Fixed text in li being wrapped at set width
 - VPAT-756 Made font weight bold for headings using strong tag in FMG

### Changed
 - Upgrade formiojs@4.12.2-rc.5

## 2.0.1-rc.2
### Changed
 - Changed renderer to official 4.12.1

## 2.0.1-rc.1
### Fixed
 - VPAT-623 Added address component to USWDS templates with correct styles
 - VPAT-592 Fixed incorrect presentation of the last cell in a table in IE/FF
 - VPAT-623 Fixed incorrect display of choicesjs selects in some cases

### Chnaged
 - Upgrade formiojs@4.12.2-rc.3

## 2.0.0
### Changed
 - Upgrade formiojs@4.12.1

### Fixed
 - VPAT-592 Changed data grid table to populate all available space
 - VPAT-594 Applied USWDS select styling to choicesjs selects

## 2.0.0-rc.9
### Changed
 - Upgrade formiojs@4.12.1-rc.28

## 2.0.0-rc.8
### Changed
 - Upgrade formiojs@4.12.1-rc.26

### Fixed
 - VPAT-719 Fixed disappearing fields when failing validation in USWDS
 - VPAT-697 Added border outlines to layout component in builder

## 2.0.0-rc.7
### Changed
 - Upgrade formiojs@4.12.1-rc.18

### Fixed
 - VPAT-672 Fixed failing EditGrid in builder options

## 2.0.0
### Added
 - Further accessibility support for DateTime component.
 - Accessibility support for modal edit.

### Changed
 - Reworked tooltips to make them accessible.

### Fixed
 - Several accessibility and PDF issues.

## 1.8.2-rc.5
### Changed
 - Upgrade uswds-viewer base to 2.97.0-rc.11

## 1.8.2-rc.4
### Changed
 - uswds-viewer Docker base to 2.97.0-rc.10
 - formiojs@4.11.1-rc.5

## 1.8.2-rc.3
### Changed
 - uswds-viewer Docker base to 2.97.0-rc.9

## 1.8.2-rc.2
### Changed
 - uswds-viewer Docker base to 2.97.0-rc.7

## 1.8.2-rc.1
### Changed
 - uswds-viewer Docker base to 2.97.0-rc.6

## 1.8.1
### Changed
 - Reverted docker base back to 2.96.0 for uswds-viewer

## 1.8.0
### Changed
 - Fixed viewer to show checked radios and checkboxes correctly.
 - Upgrade formiojs@4.11.0

## 1.8.0-rc.2
### Changed
 - Upgrade formiojs@4.11.0-rc.5
 - Fixed issue with DateTime icon showing incorrect.

## 1.7.0
### Added
 - Accessibility support for DateTime component.

## 1.6.0
### Fixed
 - Issue with stacked fields in PDFs.
 - Issue with Radio/Checkbox component not appearing selected in PDF.
 - Issue with Panel component header announcing excessive info on IE.

## 1.5.0
### Changed
 - Columns layout not spanning with the width of the page.
 - HTML component styles to be in accordance with USWDS.

### Fixed
 - Issue with components being too close to each other.

## 1.4.0
### Changed
 - Redesigned Wizard navigation and made it accessible.
 - General accessibility improvements.

### Fixed
 - Issue with legends not being distinguished.
 - Issue with announcements for numeric fields.
 - Issue with spacing of components in all forms.

## 1.3.2
### Changed
 - Added column size variable to columns template.
 - Added mapping function to map bootstrap columns sizes to uswds.
 - Fixed margins in component template.

## 1.3.1
### Changed
 - Fixed documentation.
 - Added way to add Form.io license.

### Fixed
 - Issue with duplicate input labels on Radio components.

## 1.3.0
### Changed

## 1.2.4
### Upgrade viewer to latest versions.

## 1.2.3
### Fixed
 - Viewer to use premium components.

## 1.2.2
### Fixed
 - Build processes.
