import { TestBed } from "@angular/core/testing";

import { GlobalService } from "./app.service";

describe("AppService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GlobalService = TestBed.get(GlobalService);
    expect(service).toBeTruthy();
  });
});
