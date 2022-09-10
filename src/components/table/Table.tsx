import React, { FunctionComponent } from 'react';
// import { RFTableAction } from './RFTableAction';
import { Checkbox } from '../checkbox/Checkbox';
import { debounce } from 'lodash';
import { Input } from '../input/Input';
import { Select } from '../select/Select';
import { TableProps } from './Table.types';
export const Table: FunctionComponent<TableProps> = ({ data, onSelect, onSelectAll }) => (
	<table className="raz-table-wrapper">
		<thead>
			<tr>
				<th style={{ width: '50px' }}>
					<Checkbox
						onChange={() =>
							onSelectAll(
								!data.rows.map((r) => r.selected, []).reduce((a, r) => a && r, true)
							)
						}
						value={data.rows.map((r) => r.selected, []).reduce((a, r) => a && r, true)}
						width="24px"
					/>
					{/* <input className={styles.selectCheckbox} type={'checkbox'} /> */}
				</th>
				{data.headers.map((h) => {
					return (
						<th className="text-left fs-12 fs-sm-14 p-2 p-sm-3 px-md-4" key={h.title}>
							{h.title}
						</th>
					);
				})}
				<th style={{ width: '50px' }} />
			</tr>
			<tr className="raz-bg-dark">
				<td />
				{data.headers.map((h) => {
					return (
						<td className="p-2 p-sm-3 px-md-4 " key={h.title}>
							{h.search && (
								<Input
									inputClass="raz-bg-gray"
									placeholder="Type to Filter"
									height="38px"
									clear
									onChange={debounce(
										(e) => h.search!.onChange(e.target.value),
										1000
									)}
									suffix={
										<i className="ty-icon ty-icon-search-normal px-2 pr-1" />
									}
								/>
							)}
							{h.filterBy && (
								<Select
									placeholder="Filter By"
									disabled
									clear
									options={h.filterBy?.options || []}
									onChange={
										h.filterBy?.onChange ||
										((value) => {
											return;
										})
									}
								/>
							)}
						</td>
					);
				})}
				<td />
			</tr>
		</thead>
		<tbody>
			{data.rows.map((r, i) => {
				return (
					<tr key={i}>
						<td className="pr-3">
							<Checkbox
								onChange={() => onSelect(i)}
								value={r.selected}
								width="24px"
							/>
						</td>
						{r.cols.map((c, i) => (
							<td style={{ minWidth: '50px' }} className="px-4 py-2 py-sm-3" key={i}>
								{c.value}
							</td>
						))}
						{/* <td style={{ width: '50px' }} className="text-center">
							<RFTableAction Actions={r.actions} />
						</td> */}
					</tr>
				);
			})}
		</tbody>
	</table>
);
