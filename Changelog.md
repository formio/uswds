# Change Log
All notable changes to this project will be documented in this file

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

##2.12.1-rc.1
### Changed
 - Upgrade formiojs@4.12.4-rc.2

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
 - Created initial public release.

## 1.2.4
### Upgrade viewer to latest versions.

## 1.2.3
### Fixed
 - Viewer to use premium components.

## 1.2.2
### Fixed
 - Build processes.
