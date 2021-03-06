import * as assert from "assert";
import * as path from "path";
import * as vs from "vscode";
import { fsPath } from "../../shared/utils/fs";

describe("test environment", () => {
	it("has opened the correct folder", () => {
		const wfs = vs.workspace.workspaceFolders || [];
		assert.equal(wfs.length, 5);
		assert.ok(
			fsPath(wfs[0].uri).endsWith(path.sep + "flutter_create_basic"),
			`${fsPath(wfs[0].uri)} doesn't end with ${path.sep}flutter_create_basic`,
		);
		assert.ok(
			fsPath(wfs[1].uri).endsWith(path.sep + "flutter_create_sample"),
			`${fsPath(wfs[1].uri)} doesn't end with ${path.sep}flutter_create_sample`,
		);
		assert.ok(
			fsPath(wfs[2].uri).endsWith(path.sep + "flutter_create_module"),
			`${fsPath(wfs[2].uri)} doesn't end with ${path.sep}flutter_create_module`,
		);
		assert.ok(
			fsPath(wfs[3].uri).endsWith(path.sep + "flutter_create_package"),
			`${fsPath(wfs[3].uri)} doesn't end with ${path.sep}flutter_create_package`,
		);
		assert.ok(
			fsPath(wfs[4].uri).endsWith(path.sep + "flutter_create_plugin"),
			`${fsPath(wfs[4].uri)} doesn't end with ${path.sep}flutter_create_plugin`,
		);
	});
});
